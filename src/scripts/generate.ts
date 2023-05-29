import fs from 'fs'
import { EVENTS, EVENT_COUNT, EVENT_HEADERS, OUT_DIR, SEPARATOR, USER_TOKENS, arrayOfLength, getDates, getObjectIDs, randomArrayElement, startup } from "../utils";

;(async () => {
    startup()

    const eventTypes = Object.keys(EVENTS)
    const dates = getDates()
    const objectIDs = await getObjectIDs()

    for (const [appName, objectIDsPerIndex] of Object.entries(objectIDs)) {
        for (const indexName of Object.keys(objectIDsPerIndex)) {
            const fileName = `${OUT_DIR}/${appName}-${indexName}.csv`

            fs.writeFileSync(fileName, [
                EVENT_HEADERS.join(SEPARATOR),
                ...arrayOfLength(EVENT_COUNT).map(() => {
                    const eventType = randomArrayElement(eventTypes)
                    const eventName = EVENTS[eventType]

                    return [
                        randomArrayElement(USER_TOKENS),
                        randomArrayElement(dates),
                        randomArrayElement(objectIDsPerIndex[indexName]),
                        eventType,
                        eventName
                    ].join(SEPARATOR)
                })
            ].join('\n'))

            console.info(`Generation complete: ${fileName}`)
        }
    }
})()