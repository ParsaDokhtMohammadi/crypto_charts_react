import { RotatingLines } from "react-loader-spinner"
import { useState } from "react"
import { useEffect } from "react"
import CoinTable from "../modules/CoinTable"
import { getCoinList } from "../../services/cryptoApi"
import Pagination from "../modules/pagination"
import Search from "../modules/Search"
import Chart from "../modules/Chart"

const HomePage = () => {
    const [coins, setCoins] = useState([])
    const [page, setPage] = useState(1)
    const [currency,setCurrency] = useState("USD")
    const [isLoading, setIsLoading] = useState(true)
    const [chart,setChart] = useState(null)
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(getCoinList(page,currency))
                if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
                const json = await res.json()
                setCoins(json)
            } catch (err) {
                console.error("Failed to fetch coins:", err)
                alert(err.message||"faild to fetch coins")
            } finally {
                setIsLoading(false)
            }
        }
        getData()
    }, [page,currency])
    return (
        <div>
            {isLoading ? <RotatingLines strokeColor="#3874ff" strokeWidth={2} /> : (
                <>
                    <Search  currency={currency} setCurrency={setCurrency}/>
                    <CoinTable coins={coins} setChart={setChart}/>
                    <Pagination page={page} setPage={setPage}/>
                    {chart && <Chart chart={chart} setChart={setChart}/>}
                </>
            )}
        </div>
    )
}

export default HomePage