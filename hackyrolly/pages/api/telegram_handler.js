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
    const docRef = await addDoc(collection(db, "Messages"), data);
    // await setDoc(doc(db, "Messages", data.text.message_id), data);
  }

  res.status(200).send("ok");
};
