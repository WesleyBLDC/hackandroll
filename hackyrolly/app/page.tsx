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
          className=" w-11/12 md:w-8/12 xl:w-3/4 h-auto p-3 rounded-3xl bg-white text-black"
        />

        <button className="btn btn-secondary absolute right-20 rounded-3xl bg-sky-500 border-transparent hover:bg-sky-500 hover:border-transparent">
          Search
        </button>

      </div>

      <select className="select w-30 justify-items-center max-w-xs absolute left-8 top-20">
          <option disabled selected>Filter</option>
          <option>Electronics</option>
          <option>Wallet</option>
          <option>Cards</option>
          <option>Clothing</option>
          <option>Others</option>
      </select>


<div className="flex justify-center">
<div className="grid grid-cols-3 gap-3"> {/* p-3  pl-20 pr-7*/}


      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-3">
          {" "}
          {/* p-3  pl-20 pr-7*/}
          {results.messages.map((item) => (
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
          ))}
        </div>


      </div>
</div>
      
    </div>
  );
}

