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
                <div className={styles.graph}>
                    <ChartComponent data={data} type={type}/>
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