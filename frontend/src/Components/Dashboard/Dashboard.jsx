import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../services/Authentication";

export function Dashboard() {
  const { user } = useUserContext();
  const name = user.toUpperCase();
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/");
  }

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "597269576emsh2a1ffbdbc22aca5p1c45cajsnb3b4658bb5c7",
  //     "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
  //   },
  // };

  // fetch(
  //   "https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=GOOGL&datatype=json&output_size=compact",
  //   options
  // )
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));

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
    </main>
  );
}
