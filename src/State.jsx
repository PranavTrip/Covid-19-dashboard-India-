import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const State = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://data.covid19india.org/data.json");
    const jsonResponse = await response.json();
    setData(jsonResponse.statewise);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="main_div">
          <div className="main-heading  my-3 mb-8">
            <h1 className="text-center">
              <span className="fw-bold"> India </span> Covid-19 StateWise
              Dashboard
            </h1>
          </div>

          <div className="table-responsive">
            <table className="table table-hover table-striped ">
              <thead className="thead-dark">
                <tr>
                  <th>State</th>
                  <th>Confirmed</th>
                  <th>Recovered</th>
                  <th>Deaths</th>
                  <th>Active</th>
                  <th>Last Updated On</th>
                </tr>
              </thead>
              <tbody className="tbody-dark">
                {data.map((currentValue, index) => {
                  return (
                    <tr key={index}>
                      <td>{currentValue.state}</td>
                      <td id="confirmed">{currentValue.confirmed}</td>
                      <td id="recovered">{currentValue.recovered}</td>
                      <td id="death">{currentValue.deaths}</td>
                      <td id="active">{currentValue.active}</td>
                      <td>{currentValue.lastupdatedtime}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default State;
