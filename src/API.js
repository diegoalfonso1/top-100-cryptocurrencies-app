export const getData = async () => {
  let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false&price_change_percentage=24h";

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.map((item) => { return {...item, isSelected: false}});
  } catch (error) {
    console.log("error");
  }
};


