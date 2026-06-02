import React from 'react'
import styles from "./Chart.module.css"
import { convertData } from '../../helpers/convertData'
import { useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const Chart = ({ chart, setChart }) => {
    const [type, setType] = useState("prices")
    const data = convertData(chart, type)
    return (
        <div className={styles.container}>
            <span className={styles.cross} onClick={() => setChart(null)}>X</span>
            <div className={styles.chart}>
                <div className={styles.name}>
                    <img src={chart?.coin?.image}></img>
                    <p>{chart?.coin?.name}</p>
                </div>
                <div className={styles.graph}>
                    <ChartComponent data={data} type={type} />
                </div>
                <div className={styles.types}>
                    <button>Prices</button>
                    <button>Market Cap</button>
                    <button>Total Volumes</button>
                </div>
                <div className={styles.details}>
                    <div>
                        <p>Prices:</p>
                        <span>${chart?.coin?.current_price}</span>
                    </div>
                    <div>
                        <p>ATH:</p>
                        <span>${chart?.coin?.ath}</span>
                    </div>
                    <div>
                        <p>Market Cap:</p>
                        <span>${chart?.coin?.market_cap}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart


const ChartComponent = ({ data, type }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <CartesianGrid stroke='#404042' />
                <Line type='monotone' dataKey={type} stroke='#3874ff' strokeWidth={2} />
                <YAxis dataKey={type} domain={['auto', 'auto']} />
                <XAxis dataKey="date" hide />
                <Legend />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    )
}