import React from "react";
import CityId from "./components/CityId";
import GetData from "./components/FirstRequest";

export default function ListOfReq() {
  return (
    <div className="App">
      {CityId.map((it) => (
        <GetData id={it.id} />
      ))}
    </div>
  );
}
