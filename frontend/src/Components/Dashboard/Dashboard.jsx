import "./dashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../services/Authentication";
import { Collapse } from "antd";

const { Panel } = Collapse;

const header = `first item     second item    third item`;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export function Dashboard() {
  const { user } = useUserContext();
  const name = user.toUpperCase();
  const navigate = useNavigate();
  const [result, setResult] = useState({});

  function handleNavigate() {
    navigate("/");
  }

  //   useEffect(() => {
  //     fetch(
  //       "https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=GOOGL&datatype=json&output_size=compact",
  //       {
  //         method: "GET",
  //         headers: {
  //           "X-RapidAPI-Key":
  //             "597269576emsh2a1ffbdbc22aca5p1c45cajsnb3b4658bb5c7",
  //           "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
  //         },
  //       }
  //     )
  //       .then((response) => response.json())
  //       .then((data) => setResult(data))
  //       .catch((err) => console.error(err));
  //   }, []);

  console.log(result);

  return (
    <main className="dashboard-main">
      {/* <h1 className="dashboard-welcome-message">WELCOME BACK, <span className="user-name">{name}</span></h1>
        <button className="button-style" onClick={handleNavigate}>Back to Homepage</button> */}
      <section className="dashboard-legend">
        <h6 className="dashboard-legend-items">Ticker</h6>
        <h6 className="dashboard-legend-items">Market Sentiment</h6>
        <h6 className="dashboard-legend-items">Grade</h6>
        <h6 className="dashboard-legend-items">Analyst EPS</h6>
        <h6 className="dashboard-legend-items">Chance Earning Beat</h6>
        <h6 className="dashboard-legend-items">Momentum Score</h6>
        <h6 className="dashboard-legend-items">Financial Increase</h6>
        <h6 className="dashboard-legend-items">Suggestion</h6>
      </section>

      <div class="tabs">
        <div class="tab">
          <input type="checkbox" id="chck1" className="accordion-input" />
          <label class="tab-label" for="chck1">
            Item 1
          </label>
          <div class="tab-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
            reiciendis!
          </div>
        </div>
        <div class="tab">
          <input type="checkbox" id="chck2" className="accordion-input" />
          <label class="tab-label" for="chck2">
            Item 2
          </label>
          <div class="tab-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
          </div>
        </div>
      </div>
    </main>
  );
}
