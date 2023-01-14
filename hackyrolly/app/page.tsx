// page.tsx

import SmallCard from "@/components/SmallCard";
import Image from "next/image";
import styles from "./page.module.css";
import results from "../pages/api/result.json";


export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="input w-full max-w-xs w-screen"
        />
      </div>


      <div className="grid grid-cols-3 gap-3 p-3">
        {results.messages.map((item) => (
          <SmallCard
            key={item.id}
            from={item.from || "NA"}
            message={item.text.toString()}
            text={item.text.toString()}
            date={item.date.toString()}
            from_id={item.from_id || "NA"}
          />
        ))}

        {/* <SmallCard
          from="test"
          message={"test"}
          text={"test"}
          date={"test"}
          from_id={"test"}
        />
        <SmallCard
          from="test"
          message={"test"}
          text={"test"}
          date={"test"}
          from_id={"test"}
        /> */}
      </div>
    </div>
  );
}
