import "./WatchList.css";

const WatchList = (props) => {
  const { watchList, counter, setCounter, cryptos } = props;

  setCounter(watchList.length);

  return (
    <div>
      <div className="watchlist">
        {watchList.length < 1 ? (
          <div className="message">
            <h3>Your watch list is empty!</h3>
          </div>
        ) : (
          <ol className="list-container">
            {watchList.map((item, id) => {
              return (
                <li key={id} className="list-item">
                  <div className="rank">#{item.market_cap_rank}.</div>
                  <img src={item.image} alt={item.name} />
                  <div className="crypto-data">
                    <h3>{item.name}</h3>
                    <div>{item.symbol}</div>
                    <div className="price">
                      $ {item.current_price.toLocaleString("en-US")}
                    </div>
                    <div className="market-cap">
                      Market Cap. ${item.market_cap.toLocaleString("en-US")}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </div>
  );
};

export default WatchList;
