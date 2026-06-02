export const convertData = (data, type) => {
    return data[type]
        .filter((_, i) => i % 4 === 0)
        .map(item => ({ date: item[0], [type]: parseFloat(item[1].toFixed(2)) }))
}