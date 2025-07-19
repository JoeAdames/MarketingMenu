import React from "react";

export default function Service({ subcategories }) {
  return (
    <>
      {subcategories.map((sub, t) => (
        <div
          key={t}
          className="flex flex-col justify-between border rounded-lg p-4 my-3"
        >
          <div className="text-xl text-left font-bold">{sub.name}</div>
          <ul>
            {sub.items.map((item, j) => (
              <li key={j} className="flex justify-between p-1">
                <div className="text-lg">{item.name}</div>
                <div className="font-bold text-indigo-500">{item.price}</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
