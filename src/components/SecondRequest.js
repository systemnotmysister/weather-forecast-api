import { Table, Tag } from "antd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const { Column, ColumnGroup } = Table;

function GetData2() {
  let history = useHistory();

  let { id } = useParams();

  async function getData(id) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${process.env.REACT_APP_API_KEY}`
    );

    const dataResponse = await response.json();
    return dataResponse;
  }
  const [data, setData] = useState();

  useEffect(() => {
    getData(id).then((dataResponse) => {
      console.log(data);

      if (dataResponse) {
        const dataSource = dataResponse.list.map((element) => {
          return {
            dt_txt: element.dt_txt,
            feels_like: Math.round(element.main.feels_like - 273),
            humidity: element.main.humidity,
            pressure: element.main.pressure,
            temp: Math.round(element.main.temp - 273),
            temp_min: Math.round(element.main.temp_min - 273),
            temp_max: Math.round(element.main.temp_max - 273),
            speed: element.wind.speed,
            description: element.weather[0].description,
            weatherIconID: element.weather[0].id,
            weatherIcon: element.weather[0].icon,
          };
        });

        console.log("got it ");
        console.log(dataSource);
        setData(dataSource);
      }
    });
  }, []);

  if (data) {
    return (
      <>
        <button onClick={() => history.push("/")}> Back to cities </button>
        <Table className="someClass" dataSource={data}>
          <Column
            title="date  time"
            dataIndex="dt_txt"
            key="dt_txt"
            className="DTX"
            render={(dt_txt) => (
              <Tag color="" key={dt_txt}>
                {" "}
                {dt_txt}{" "}
              </Tag>
            )}
          />

          <ColumnGroup title="temperature">
            <Column
              title="temp_max"
              dataIndex="temp_max"
              key="temp_max"
              className="Maxa"
              render={(temp_min) => (
                <Tag color="" key={temp_min}>
                  {" "}
                  {temp_min}{" "}
                </Tag>
              )}
            />

            <Column
              title="feels_like"
              dataIndex="feels_like"
              key="feels_like"
              className="Fila"
              render={(feels_like) => (
                <Tag color="" key={feels_like}>
                  {" "}
                  {feels_like}{" "}
                </Tag>
              )}
            />

            <Column
              title="temp_min"
              dataIndex="temp_min"
              key="temp_min"
              className="Mina"
              render={(temp_min) => (
                <Tag color="" key={temp_min}>
                  {" "}
                  {temp_min}{" "}
                </Tag>
              )}
            />

            <Column
              title="current_t"
              dataIndex="temp"
              key="temp"
              className="Tempa"
              render={(temp) => (
                <Tag color="" key={temp}>
                  {" "}
                  {temp}{" "}
                </Tag>
              )}
            />
          </ColumnGroup>
          <Column
            title="humidity"
            dataIndex="humidity"
            key="humidity"
            className="Humud"
            render={(pressure) => (
              <Tag color="" key={pressure}>
                {" "}
                {pressure}{" "}
              </Tag>
            )}
          />
          <Column
            title="pressure"
            dataIndex="pressure"
            key="pressure"
            className="Press"
            render={(pressure) => (
              <Tag color="" key={pressure}>
                {" "}
                {pressure}{" "}
              </Tag>
            )}
          />
          <Column
            title="wind_speed"
            dataIndex="speed"
            key="speed"
            className="Speed"
          />
          <Column
            title="description"
            dataIndex="weatherIcon"
            key="weatherIcon"
            className="DESC"
            render={(weatherIcon, text) => {
              return (
                <div className="icons">
                  {text.description}{" "}
                  <img
                    width="75"
                    src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                    alt="imagebitch"
                  />
                </div>
              );
            }}
          />
        </Table>
      </>
    );
  } else {
    return <div>loading</div>;
  }
}

export default GetData2;
