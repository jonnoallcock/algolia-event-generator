import algoliaSearch from 'algoliasearch'
import { ALGOLIA_APP_ID, ALGOLIA_API_KEY, ALGOLIA_SEARCH_INDEX, ALGOLIA_QUERY_STRING, ALGOLIA_OBJECT_ID_COUNT } from './env'

export const getObjectIDs = async () => {
    const searchClient = algoliaSearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY)
    const index = searchClient.initIndex(ALGOLIA_SEARCH_INDEX)

    return (await index.search(ALGOLIA_QUERY_STRING, {
        attributesToRetrieve: ['objectID'],
        hitsPerPage: ALGOLIA_OBJECT_ID_COUNT
    })).hits.map((hit) => hit.objectID)
}