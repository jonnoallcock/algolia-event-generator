export const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID!
export const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY!
export const ALGOLIA_SEARCH_INDEX = process.env.ALGOLIA_SEARCH_INDEX!
export const ALGOLIA_QUERY_STRING = process.env.ALGOLIA_QUERY_STRING!
export const ALGOLIA_OBJECT_ID_COUNT = parseInt(process.env.ALGOLIA_OBJECT_ID_COUNT!, 10)
export const USER_TOKENS = JSON.parse(process.env.USER_TOKENS!)
export const EVENT_COUNT = parseInt(process.env.EVENT_COUNT!, 10)
export const EVENTS = JSON.parse(process.env.EVENTS!)
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
