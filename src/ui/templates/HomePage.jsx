import { useState } from "react"
import { useEffect } from "react"
import CoinTable from "../modules/CoinTable"
import { getCoinList } from "../../services/cryptoApi"

const HomePage = () => {
    const [coins , setCoins] = useState([])
useEffect(() => {
  fetch(getCoinList())
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return res.json()
    })
    .then(json => setCoins(json))
    .catch(err => console.error("Failed to fetch coins:", err))
}, [])
    return (
        <div>
            <CoinTable coins={coins}/>
        </div>
    )
}

export default HomePage
