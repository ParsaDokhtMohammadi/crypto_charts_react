import chartUp from "../../assets/chart-up.svg"
import chartDown from "../../assets/chart-down.svg"
import styles from "./CoinTable.module.css"
import { marketChart } from "../../services/cryptoApi"


const CoinTable = ({ coins , setChart }) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>total volume</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            coins?.map(coin => (
                <TableRow coin={coin} key={coin.id} setChart={setChart}/>
              ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default CoinTable



const TableRow = ({coin , setChart}) => {
  const showHandler = async() => {
    try{
      const res = await fetch(marketChart(coin.id))
      const json = await res.json()
      setChart({...json , coin})
    }catch(err){
      setChart(null)
      console.log(err)
    }
  }
  return (
    <>
      <tr onClick={showHandler}>
        <td>
          <div className={styles?.symbol}>
            <img src={coin?.image} alt={coin?.name} />
            <span>{coin?.symbol?.toUpperCase()}</span>
          </div>
        </td>
        <td>{coin?.name}</td>
        <td>${coin?.current_price?.toLocaleString()}</td>
        <td className={coin?.price_change_percentage_24h > 0 ?styles?.success:styles?.error}>{coin?.price_change_percentage_24h?.toFixed(2)}%</td>
        <td>{coin?.total_volume?.toLocaleString()}</td>
        <td><img src={coin?.price_change_percentage_24h > 0 ? chartUp : chartDown} alt="chart" /></td>
      </tr>
    </>
  )
}