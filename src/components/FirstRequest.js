import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import useFetch from "./hooks/UseFetch";

export default function GetData(props) {
  const data = useFetch(
    `https://api.openweathermap.org/data/2.5/forecast?id=${props.id}&appid=${process.env.REACT_APP_API_KEY}`
  );

  if (!data) {
    return <>Loading...</>;
  } else {
    return (
      <>
        {console.log(props.inputState, "id in GD")}
        <div>
          <ul>
            <Row>
              <Col span={6}>
                <li>
                  <Link to={`cities/` + props.id.toString()}>
                    {data.city.name}{" "}
                  </Link>
                </li>
              </Col>

              <Col span={6}>
                temperature: {Math.round(data.list[0].main.temp - 273)}
              </Col>

              <Col span={6}>wind_speed:{data.list[0].wind.speed}</Col>
              <Col span={6}>
                description: {data.list[0].weather[0].description}
              </Col>
            </Row>
          </ul>
        </div>
      </>
    );
  }
}
