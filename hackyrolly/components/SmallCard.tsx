import React from "react";

interface CreateCardProps {
  from: string;
  message: string;
  text: string;
  date: string;
  from_id: string;
  status: string;
}

function SmallCard({
  from,
  message,
  text,
  date,
  from_id,
  status,
}: CreateCardProps) {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();

  const month = dateObj.getMonth();
  const date2 = dateObj.getDate();
  date = date2 + "." + month + "." + year;

  return (
    <div className="card w-72 h-72 bg-zinc-100 text-black border border-yellow-700 shadow-xl overflow-auto co">
      {" "}
      {/* bg-black*/}
      <div className="card-body">
        <h2 className="card-title">
          <a>{from}</a>
          {status == "FOUND" ? (
            <div className="badge badge-secondary bg-lime-600 border-transparent">
              {status}
            </div>
          ) : (
            <div className="badge badge-secondary  bg-red-500 border-transparent">
              {status}
            </div>
          )}
        </h2>

        <div>
          <div className="badge badge-outline">{date}</div>
        </div>
        <p>
          {message} {text}
        </p>
        {/* <div className="card-actions justify-end">
          <div className="badge badge-outline">{from_id}</div>
        </div> */}
      </div>
    </div>
  );
}

export default SmallCard;
