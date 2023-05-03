import invariant from 'invariant'

invariant(process.env.ALGOLIA_APP_ID, 'ALGOLIA_APP_ID missing')
export const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID

invariant(process.env.ALGOLIA_API_KEY, 'ALGOLIA_API_KEY missing')
export const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY

invariant(process.env.ALGOLIA_SEARCH_INDEX, 'ALGOLIA_SEARCH_INDEX missing')
export const ALGOLIA_SEARCH_INDEX = process.env.ALGOLIA_SEARCH_INDEX

invariant(process.env.ALGOLIA_QUERY_STRING, 'ALGOLIA_QUERY_STRING missing')
export const ALGOLIA_QUERY_STRING = process.env.ALGOLIA_QUERY_STRING

invariant(process.env.ALGOLIA_OBJECT_ID_COUNT, 'ALGOLIA_OBJECT_ID_COUNT missing')
export const ALGOLIA_OBJECT_ID_COUNT = parseInt(process.env.ALGOLIA_OBJECT_ID_COUNT, 10)

invariant(process.env.USER_TOKENS, 'USER_TOKENS missing')
export const USER_TOKENS = JSON.parse(process.env.USER_TOKENS)

invariant(process.env.EVENT_COUNT, 'EVENT_COUNT missing')
export const EVENT_COUNT = parseInt(process.env.EVENT_COUNT, 10)

invariant(process.env.EVENTS, 'EVENTS missing')
export const EVENTS = JSON.parse(process.env.EVENTS)