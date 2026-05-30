import { RotatingLines } from "react-loader-spinner"
import { useState } from "react"
import { useEffect } from "react"
import CoinTable from "../modules/CoinTable"
import { getCoinList } from "../../services/cryptoApi"
import Pagination from "../modules/pagination"

const HomePage = () => {
    const [coins, setCoins] = useState([])
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(getCoinList(page))
                if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
                const json = await res.json()
                setCoins(json)
            } catch (err) {
                console.error("Failed to fetch coins:", err)
            } finally {
                setIsLoading(false)
            }
        }
        getData()
    }, [page])
    return (
        <div>
            {isLoading ? <RotatingLines strokeColor="#3874ff" strokeWidth={2} /> : (
                <>
                    <CoinTable coins={coins} />
                    <Pagination page={page} setPage={setPage}/>
                </>
            )}
        </div>
    )
}

export default HomePage