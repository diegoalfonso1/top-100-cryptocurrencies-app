import { NavLink } from "react-router-dom";
import "./MainHeader.css";

const MainHeader = (props) => {
  const { counter, fetchData } = props;

  const titleClickHandler = () => {
    fetchData()
  }

  return (
    <div className="top">
      <header className="header">
        <h3 onClick={titleClickHandler}>Check top 100 Cryptocurrencies</h3>
        <div className="navbar">
          <NavLink to="/home" activeClassName="active" className="home">
            <h4>Home</h4>
          </NavLink>
          <NavLink
            to="/watchlist"
            activeClassName="active"
            className="watch-list"
          >
            <h4>Watch List</h4>
            {counter > 0 ? <h6 className="counter">{counter}</h6> : ""}
          </NavLink>
          <NavLink
            to="/calculator"
            activeClassName="active"
            className="calculator"
          >
            <h4>Calculator</h4>
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
