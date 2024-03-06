let url = "https://api.coingecko.com/api/v3";

let token = "x_cg_demo_api_key=CG-ZfjXMDV9Gc1PJ4G85eSRd53R";
//simple price
// https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd,inr&ids=bitcoin&include_24hr_change=true&x_cg_demo_api_key=CG-ZfjXMDV9Gc1PJ4G85eSRd53R

// for top 3 products
// https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-ZfjXMDV9Gc1PJ4G85eSRd53R

//symobol for coins
// https://api.coingecko.com/api/v3/coins/bitcoin?x_cg_demo_api_key=CG-ZfjXMDV9Gc1PJ4G85eSRd53R

// structure
// ${url}/xyz/xyz?properties1=x&properties2=y&${token}

export {url,token};
