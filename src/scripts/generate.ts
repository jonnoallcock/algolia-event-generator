import fs from 'fs'
import { EVENTS, EVENTS_OUT, EVENT_COUNT, EVENT_HEADERS, SEPARATOR, USER_TOKENS, arrayOfLength, getDates, getObjectIDs, randomArrayElement, startup } from "../utils";

const eventTypes = Object.keys(EVENTS)
const dates = getDates()

;(async () => {
    startup(EVENTS_OUT)

    const objectIDs = await getObjectIDs()

    fs.writeFileSync(EVENTS_OUT, [
        EVENT_HEADERS.join(SEPARATOR),
        ...arrayOfLength(EVENT_COUNT).map(() => {
            const eventType = randomArrayElement(eventTypes)
            const eventName = EVENTS[eventType]
            
            return [
                randomArrayElement(USER_TOKENS),
                randomArrayElement(dates),
                randomArrayElement(objectIDs),
                eventType,
                eventName
            ].join(SEPARATOR)
        })
    ].join('\n'))

    console.info(`Generation complete: ${EVENTS_OUT}`)
})()