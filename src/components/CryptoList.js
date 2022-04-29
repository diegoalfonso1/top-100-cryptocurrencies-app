import React from "react";
import "./CryptoList.css";

const CryptoList = (props) => {
  const { loading, search, cryptos, setCryptos } = props;

  const tag = <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="tagIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="tagIconTitle">Tag</title> <path d="M8 18l-6-6 6-6h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8z"/> </svg>

  const addToWatchList = (clicked) => {
    const selected = cryptos.find((item) => item.id === clicked.id);

    const modifyingPropertie = cryptos.map((crypto) => {
      if (crypto.id === selected.id) {
        return { ...crypto, isSelected: !crypto.isSelected };
      }
      return crypto;
    });
    setCryptos(modifyingPropertie);
  };

  


  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <span className="loader">Loading</span>
        </div>
      ) : (
        <div>
          <ol className="list-container">
            {cryptos
              .filter((item) =>
                item.name
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
              )
              .map((item, id) => {
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

                    {item.isSelected ? (
                      <i
                        onClick={() => addToWatchList(item)}
                        className="fa fa-circle button"
                        aria-hidden="true"
                        placeholder="add to watchlist"
                      ></i>
                    ) : (
                      <i
                        onClick={() => addToWatchList(item)}
                        className="fa fa-circle-o button"
                        aria-hidden="true"
                        placeholder="add to watchlist"
                      ></i>
                    )}
                  </li>
                );
              })}
          </ol>
        </div>
      )}
    </div>
  );
};

export default CryptoList;
