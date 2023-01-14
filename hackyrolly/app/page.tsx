// page.tsx

import SmallCard from "@/components/SmallCard";
import Image from "next/image";
import styles from "./page.module.css";
import results from "../pages/api/result.json";


export default function Home() {
  return (
    <div>
      <div className="flex justify-center p-4">
        <input
          type="text"
          placeholder="Find item..."
          className=" w-11/12 md:w-8/12 xl:w-3/4 h-auto p-3 rounded-3xl bg-white"
        />
        <button className="btn btn-active btn-secondary absolute right-20 rounded-3xl">Search</button>
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
