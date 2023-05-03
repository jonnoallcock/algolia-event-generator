import fs from 'fs'
import { EVENTS, EVENTS_OUT, EVENT_COUNT, USER_TOKENS, arrayOfLength, getDates, getObjectIDs, randomArrayElement, startup } from "../utils";

const headers = [
    'userToken',
    'timestamp',
    'objectID',
    'eventType',
    'eventName'
]
const separator = ','

const eventTypes = Object.keys(EVENTS)
const dates = getDates()

;(async () => {
    startup(EVENTS_OUT)

    const objectIDs = await getObjectIDs()

    fs.writeFileSync(EVENTS_OUT, [
        headers.join(separator),
        ...arrayOfLength(EVENT_COUNT).map(() => {
            const eventType = randomArrayElement(eventTypes)
            const eventName = EVENTS[eventType]
            
            return [
                randomArrayElement(USER_TOKENS),
                randomArrayElement(dates),
                randomArrayElement(objectIDs),
                eventType,
                eventName
            ].join(separator)
        })
    ].join('\n'))

    console.log(`Generation complete: ${EVENTS_OUT}`)
})()