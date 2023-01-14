// page.tsx

import SmallCard from "@/components/SmallCard";
import Image from "next/image";
import styles from "./page.module.css";
import results from "../pages/api/result.json";
import firebase from "firebase/app";
import "firebase/firestore";

import { db } from "../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

// // const q = query(collection(db, "Messages"), where("capital", "==", true));

// // const querySnapshot = await getDocs(q);

// const querySnapshot = await getDocs(collection(db, "Messages"));

// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });

// async function getData() {
//   const querySnapshot = await getDocs(collection(db, "Messages"));
//   const products = querySnapshot.docs.map((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     // console.log(doc.id, " => ", doc.data().text.text);
//     doc.data();
//   });

//   return products;
// }

export default async function Home() {
  // const data = await getData();

  const querySnapshot = await getDocs(collection(db, "Messages"));
  // const products = querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data().text.chat.id);
  //   // doc.data();
  // });

  return (
    <div>
      {/* <div className="flex justify-center p-4 bg-base-100">
        <input
          type="text"
          placeholder="Find item..."
          className=" w-11/12 md:w-8/12 xl:w-3/4 h-auto p-3 rounded-3xl bg-white text-black"
        />

        <button className="btn btn-secondary absolute right-20 rounded-3xl bg-sky-500 border-transparent hover:bg-sky-500 hover:border-transparent">
          Search
        </button>
      </div> */}
      {/* 
      <select className="select w-30 justify-items-center max-w-xs absolute left-8 top-20">
        <option disabled selected>
          Filter
        </option>
        <option>Electronics</option>
        <option>Wallet</option>
        <option>Cards</option>
        <option>Clothing</option>
        <option>Others</option>
      </select> */}

      {/* <button onClick={() => console.log(data.text.text)}> products.id</button> */}

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
          {/* {results.messages.map((item) => ( */}
          {/* {data.map((x) => (
            <SmallCard
              key={x.text}
              from={x.from.first_name || "NA"}
              message={x.text.toString()}
              date={x.chat.date.toString()}
              text={x.text.toString()}
              from_id={x.from.id || "NA"}
              status={"FOUND"}
              // status={
              //   item.text.toString().includes("found")
              //     ? "FOUND"
              //     : item.text.toString().includes("lost")
              //     ? "LOST"
              //     : ""
              // }
            />
          ))} */}
          {/* {results.messages.map((item) => (
            <SmallCard
              key={item.id}
              from={item.from || "NA"}
              message={item.text.toString()}
              date={item.date.toString()}
              text={item.text.toString()}
              from_id={item.from_id || "NA"}
              status={
                item.text.toString().includes("found")
                  ? "FOUND"
                  : item.text.toString().includes("lost")
                  ? "LOST"
                  : ""
              }
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   // firebase.initializeApp({
//   //   apiKey: "YOUR_API_KEY",
//   //   authDomain: "YOUR_AUTH_DOMAIN",
//   //   projectId: "YOUR_PROJECT_ID",
//   // });

//   // const productsRef = db.collection("messages");
//   // const snapshot = await productsRef.get();
//   // const products = snapshot.docs.map((doc) => ({
//   //   id: doc.id,
//   //   ...doc.data(),
//   // }));

//   const querySnapshot = await getDocs(collection(db, "Messages"));
//   const products = querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//   });

//   return {
//     props: {
//       products,
//     },
//   };
// }
