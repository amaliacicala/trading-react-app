import "./dashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../services/Authentication";

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
  const [toggle, setToggle] = useState(true)

  function handleNavigate() {
    navigate("/");
  }

    useEffect(() => {
      fetch(
        "https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=GOOGL&datatype=json&output_size=compact",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "597269576emsh2a1ffbdbc22aca5p1c45cajsnb3b4658bb5c7",
            "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setResult(data))
        .catch((err) => console.error(err));
    }, []);

  console.log(result);


  return (
    <main className="dashboard-main">
      {/* <h1 className="dashboard-welcome-message">WELCOME BACK, <span className="user-name">{name}</span></h1>
        <button className="button-style" onClick={handleNavigate}>Back to Homepage</button> */}
      <section className="dashboard-legend">
        <div className="dashboard-legend-items">
          <h6 className="dashboard-legend-text">Ticker</h6>
        </div>
        <div className="dashboard-legend-items">
          <h6 className="dashboard-legend-text">Market Sentiment</h6>
        </div>
        <div className="dashboard-legend-items">
          <h6 className="dashboard-legend-text">Grade</h6>
        </div>
        <div className="dashboard-legend-items">
          <h6 className="dashboard-legend-text">Analyst EPS</h6>
        </div>
        <div className="dashboard-legend-items">
          <h6 className="dashboard-legend-text">Chance Earning Beat</h6>
        </div>
        <div className="dashboard-legend-items">
          <h6 className="dashboard-legend-text">Momentum Score</h6>
        </div>
        <div className="dashboard-legend-items">
          <h6 className="dashboard-legend-text">Financial Increase</h6>
        </div>
        <div className="dashboard-legend-items">
          <h6 className="dashboard-legend-text">Suggestion</h6>
        </div>
      </section>

      <div class="accordions">
        <input type="checkbox" id="chck1" className="accordion-input" onClick={() => setToggle(!toggle)}/>
        <div className="accordion-header">
          <div className="accordion-header-items">
            <label for="chck1">
              <h2 className="accordion-button">{toggle ? '+' : '-'}</h2>
            </label>
            <h6 className="accordion-header-text">{result.Meta}</h6>
          </div>
          <div className="accordion-header-items">
            <h6 className="accordion-header-text">Market Sentiment</h6>
          </div>
          <div className="accordion-header-items">
            <h6 className="accordion-header-text">Grade</h6>
          </div>
          <div className="accordion-header-items">
            <h6 className="accordion-header-text">Analyst EPS</h6>
          </div>
          <div className="accordion-header-items">
            <h6 className="accordion-header-text">Chance Earning Beat</h6>
          </div>
          <div className="accordion-header-items">
            <h6 className="accordion-header-text">Momentum Score</h6>
          </div>
          <div className="accordion-header-items">
            <h6 className="accordion-header-text">Financial Increase</h6>
          </div>
          <div className="accordion-header-items">
            <h6 className="accordion-header-text">Suggestion</h6>
          </div>
        </div>
        <div class="accordion-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
          reiciendis!
        </div>
      </div>
    </main>
  );
}
