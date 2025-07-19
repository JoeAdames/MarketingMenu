import React from "react";

export default function Address({ address }) {
  return (
    <>
      <div className="flex justify-evenly">
        <div>{address.location}</div>
        <div>
          {address.city}, {address.state}
        </div>
        <div>{address.zip}</div>
        <a href={`tel:${address.number}`}>{address.number}</a>
      </div>
    </>
  );
}
