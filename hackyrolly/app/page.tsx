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
        <button className="btn btn-secondary absolute right-20 rounded-3xl bg-sky-500 border-transparent hover:bg-sky-500 hover:border-transparent">Search</button>
      </div>


<div className="flex justify-center">
<div className="grid grid-cols-3 gap-3"> {/* p-3  pl-20 pr-7*/}

        {results.messages.map((item) => (
          <SmallCard
          
            key={item.id}
            from={item.from || "NA"}
            message={item.text.toString()}
            date={item.date.toString()}
            text={item.text.toString()}
            from_id={item.from_id || "NA"}
          />
   
        ))}
  
      </div>
</div>
      
    </div>
  );
}
