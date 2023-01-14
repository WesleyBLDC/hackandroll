// page.tsx

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="w-full bg-black">
      <main className="flex justify-center items-center m-auto h-screen flex-col">
        <div className="text-8xl ">
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </div>
        <div className="text-4xl my-10 ">
          This is a Tailwind Example with Next.js 13
        </div>
      </main>

      <button className="btn w-64 rounded-full">Button</button>
    </div>
  );
}
