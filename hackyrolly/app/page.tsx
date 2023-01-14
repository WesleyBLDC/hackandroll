// page.tsx

import Image from "next/image";
import styles from "./page.module.css";

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

      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
}
