import React from "react";

interface CreateStudentProps {
  from: string;
  message: string;
  text: string;
  date: string;
  from_id: string;
}

function SmallCard({ from, message, text, date, from_id }: CreateStudentProps) {
  return (
    <div className="card w-96 bg-zinc-100 text-black border border-yellow-700 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          Reported by: {from}
          <div className="badge badge-secondary">LOST</div>
        </h2>
        <p>
          found at AS3-03-14 after FAS1101 tutorial at 12pm {message} {text}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{date}</div>
          <div className="badge badge-outline">{from_id}</div>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
