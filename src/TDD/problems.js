const getCelcius = (farenheit) => {
    return farenheit.map(value => (value-32) *  5/9)
}

const currentTime = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    return date;
}