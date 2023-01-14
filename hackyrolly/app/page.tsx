// page.tsx

import Image from "next/image";
import styles from "./page.module.css";


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
