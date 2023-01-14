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
        <SmallCard
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
        />
      </div>
    </div>
  );
}
