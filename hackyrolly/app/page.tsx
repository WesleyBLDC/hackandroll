// page.tsx

import SmallCard from "@/components/SmallCard";
import Image from "next/image";
import styles from "./page.module.css";
import results from "../pages/api/result.json";
import firebase from "firebase/app";
import "firebase/firestore";

import { db } from "../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

export default async function Home() {
  const querySnapshot = await getDocs(collection(db, "Messages"));

  return (
    <div>
      <div className="flex justify-center bg-base-100 pt-2">
        <div className="grid grid-cols-4 gap-3">
          {" "}
          {querySnapshot.docs.map((doc) => (
            <SmallCard
              key={doc.data().text.message_id}
              from={doc.data().text.from.first_name || "NA"}
              message={doc.data().text.text?.toString() || "NA"}
              date={doc.data().text.date}
              from_id={doc.data().text.from.username || "NA"}
              status={
                doc.data().text.text?.toString().includes("Found")
                  ? "FOUND"
                  : doc.data().text.text?.toString().includes("Lost")
                  ? "LOST"
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
