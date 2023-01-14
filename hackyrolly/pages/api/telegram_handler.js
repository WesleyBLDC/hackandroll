import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

export default async (req, res) => {
  const tgbot = process.env.NEXT_TELEGRAM_TOKEN;

  if (req.body.message.text === "/start") {
    // Send reply
    const message = "Initializing group chat";
    const ret = await fetch(
      "https://api.telegram.org/bot${tgbot}/sendMessage?chat_id=${req.body.message.chat.id}&text=${message}&parse_mode=HTML"
    );
  } else {
    const data = {
      text: req.body.message,
    };

    function criteria(item) {
      const count = item.split(",");
      if (count.count() == 5 && count[1] == "," && count[3] == ",") {
        return true;
      } else {
        return false;
      }
    }

    if (criteria(data.text.text?.toString())) {
      // Successfully added
      const docRef = await addDoc(collection(db, "Messages"), data);
    } else {
      // Rejected
      const msg =
        "Please try again, please use the following format [Found/Lost, Item Lost, Location]";
    }

    // await setDoc(doc(db, "Messages", data.text.message_id), data);
  }

  res.status(200).send("ok");
};
