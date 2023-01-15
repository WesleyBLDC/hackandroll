import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

export default async (req, res) => {
  const tgbot = process.env.NEXT_TELEGRAM_TOKEN;

  const querySnapshot = await getDocs(collection(db, "Messages"));

  if (req.body.message.text === "/start") {
    // Send reply
    const message = "Initializing group chat";
    const ret = await fetch(
      "https://api.telegram.org/bot${tgbot}/sendMessage?chat_id=${req.body.message.chat.id}&text=${message}&parse_mode=HTML"
    );
  } else if (req.method === "POST") {
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

    function checkDb(item) {
      // item.text.text check if found or lost
      const original = item.split(",");

      const result = querySnapshot.docs.filter((curr) => {
        const other = curr.data().text.text?.toString().split(",");
        item[0] == other[0];
      });

      if (result.count > 0) {
        if (original[0].contains("found")) {
        } else if (original[0].contains("lost")) {
        }
      }
      /*
        check if there is any matching keyword

          if lost

          else if found

        else do nth

      */
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
