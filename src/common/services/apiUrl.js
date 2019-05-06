const PORT = 4000
const HOST = "localhost"
const PROTOCOL = "http"

export const apiUrl = endpoint => `${PROTOCOL}://${HOST}:${PORT}/${endpoint}/`
