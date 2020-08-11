const fetchShiftsAPI= async() => {
    try {
        const shifts = await fetch('https://vvgv5rubu3.execute-api.eu-west-2.amazonaws.com/dev/sessions')
        const data = await shifts.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export default fetchShiftsAPI
