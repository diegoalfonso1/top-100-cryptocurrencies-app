import { useEffect, useState } from "react";
import { getData } from "./API";
import "./App.css";
import CryptoList from "./components/CryptoList";
import WatchList from "./components/WatchList";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Calculator from "./components/Calculator";

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const [watchList, setWatchList] = useState([]);
  const [counter, setCounter] = useState(0);

  const [showCalculator, setShowCalculator] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    setTimeout(async () => {
      try {
        const data = await getData();
        console.log({ data });
        setCryptos(data);

        setLoading(false);
      } catch (error) {
        console.log("error");
      }
    }, 1200);

    setShowCalculator(true);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <MainHeader
        counter={counter}
        setCounter={setCounter}
        watchList={watchList}
        fetchData={fetchData}
      />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="home" />
          </Route>
          <Route path="/home" exact>
            <div className="input">
              <input
                type="search"
                placeholder="Type crypto..."
                onChange={searchHandler}
                value={search}
              />
            </div>
            <CryptoList
              cryptos={cryptos}
              setCryptos={setCryptos}
              loading={loading}
              search={search}
              counter={counter}
              setCounter={setCounter}
              watchList={watchList}
              setWatchList={setWatchList}
            />
          </Route>
          <Route path="/watchlist">
            <WatchList
              watchList={cryptos.filter((item) => item.isSelected)}
              setWatchList={setWatchList}
              cryptos={cryptos}
              counter={counter}
              setCounter={setCounter}
            />
          </Route>
          <Route path="/calculator">
          <Calculator cryptos={cryptos}/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
