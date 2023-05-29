type AlgoliaApps = {
    [appId: string]: {
        apiKey: string
        indices: {
            name: string
            searchTerm: string
        }[]
    }
}

type Events = {
    [eventName: string]: string
}

export const ALGOLIA_APPS = JSON.parse(process.env.ALGOLIA_APPS!) as AlgoliaApps
export const ALGOLIA_OBJECT_ID_COUNT = parseInt(process.env.ALGOLIA_OBJECT_ID_COUNT!, 10)
export const USER_TOKENS = JSON.parse(process.env.USER_TOKENS!) as string[]
export const EVENT_COUNT = parseInt(process.env.EVENT_COUNT!, 10)
export const EVENTS = JSON.parse(process.env.EVENTS!) as Events
export const OUT_DIR = './out'
export const EVENTS_OUT = `${OUT_DIR}/events.csv`
export const EVENT_HEADERS = [
    'userToken',
    'timestamp',
    'objectID',
    'eventType',
    'eventName'
]
export const SEPARATOR = ','
