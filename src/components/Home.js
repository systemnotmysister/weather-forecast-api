import React, { Component } from "react";
import { useHistory, Link } from "react-router-dom";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

export default function Home() {
  let history = useHistory();

  return (
    <div className="homeb">
      hello there!
      <button className="homeb" onClick={() => history.push("/cities")}>
        {" "}
        show forecast
      </button>
    </div>
  );
}
