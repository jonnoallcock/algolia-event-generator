export const getDates = () => {
    const today = new Date()
    return [
        today.toISOString(),
        ...Array.from(Array(30)).map((_, i) => {
            return new Date(new Date().setDate(today.getDate() - (i + 1))).toISOString()
        })               
    ]
}