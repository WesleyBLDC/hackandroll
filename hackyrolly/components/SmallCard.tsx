import React from "react";

interface CreateStudentProps {
  from: string;
  message: string;
  text: string;
  date: string;
  from_id: string;
}

function SmallCard({ from, message, text, date, from_id }: CreateStudentProps) {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
const month = dateObj.getMonth();
const date2 = dateObj.getDate();
date = date2 + "." + month + "." + year;

  return (
    <div className="card w-96 h-96 bg-zinc-100 text-black border border-yellow-700 shadow-xl overflow-auto co"> {/* bg-black*/}
      <div className="card-body">
       
        <h2 className="card-title">
        {from}
          
          <div className="badge badge-secondary  bg-sky-500 border-transparent hover:bg-sky-500 hover:border-transparent">LOST</div>
        </h2>

        <div>
        <div className="badge badge-outline">{date}</div>

        </div>
        <p >
          {message} {text}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{from_id}</div>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
