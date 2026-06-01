import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { searchCoin } from '../../services/cryptoApi'

const Search = ({currency,setCurrency}) => {
    const [search , setSearch] = useState("")
    const [searchedCoins,setSearchedCoins] = useState([])
    useEffect(()=>{
        if(!search)return
        const searchCoins = async()=>{
            const res = await fetch(searchCoin(search))
            const json = await res.json()
            if(json.coins) setSearchedCoins(json.coins)
            if(json?.status===429) alert(json?.status?.error_message || "rate limit exeeded please wait")
            }
           
        searchCoins()  
    },[search])
  return (
    <div>
      <input type="text" placeholder='search' value={search} onChange={e=>setSearch(e.target.value)}/>
      <select  value={currency} onChange={e=>setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
    </div>
  )
}

export default Search
