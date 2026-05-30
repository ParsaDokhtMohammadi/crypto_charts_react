export const apiKey = "CG-7i6C2zV2N24s9w8wjsxamCEw"
//free tier so it does not matter
const baseUrl = "https://api.coingecko.com/api/v3"

export const getCoinList = (page=1) => {
    return `${baseUrl}/coins/markets?vs_currency=usd&page=${page}&x_cg_demo_api_key=${apiKey}`
}
