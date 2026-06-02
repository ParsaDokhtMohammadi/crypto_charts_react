import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { searchCoin } from '../../services/cryptoApi'

const Search = ({ currency, setCurrency }) => {
    const [search, setSearch] = useState("")
    const [searchedCoins, setSearchedCoins] = useState([])
    const controller = new AbortController()
    useEffect(() => {
        setSearchedCoins([])
        if (!search) return
        const searchCoins = async () => {
            try {
                const res = await fetch(searchCoin(search), { signal: controller.signal })
                const json = await res.json()
                if (json.coins) setSearchedCoins(json.coins)
                if (json?.status === 429) alert(json?.status?.error_message || "rate limit exeeded please wait")
            }catch(err){
                if(err.name!=="AbortError") alert(err.message||"something went wrong")
            }
        }

        searchCoins()
        return () => controller.abort()
    }, [search])
    return (
        <div>
            <input type="text" placeholder='search' value={search} onChange={e => setSearch(e.target.value)} />
            <select value={currency} onChange={e => setCurrency(e.target.value)}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="jpy">JPY</option>
            </select>
            <div>
                <ul>
                    {searchedCoins.map(coin=>(<li key={coin.id}>
                        <img src={coin.thumb} alt={coin.name} />
                        <p>{coin.name}</p>
                    </li>))}
                </ul>
            </div>
        </div>
    )
}

export default Search
