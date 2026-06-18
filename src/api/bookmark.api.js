import { httpsClient } from "./client/httpsClient"

export const bookmarkEventApi = (payload) => {
    httpsClient.post("/bookmark-event", payload)
}
