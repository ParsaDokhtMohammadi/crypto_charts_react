import { useState } from "react"
import { useEffect } from "react"
import CoinTable from "../modules/CoinTable"
import { getCoinList } from "../../services/cryptoApi"

const HomePage = () => {
    const [coins , setCoins] = useState([])
useEffect(() => {
    const getData = async()=>{
        const res = await fetch(getCoinList())
        const json = await res.json()
        setCoins(json)
    }
    getData()
}, [])
    return (
        <div>
            <CoinTable coins={coins}/>
        </div>
    )
}

export default HomePage