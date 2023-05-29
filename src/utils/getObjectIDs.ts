import algoliaSearch from 'algoliasearch'
import { ALGOLIA_APPS, ALGOLIA_OBJECT_ID_COUNT } from './constants'

type Out = {
    [appId: string]: {
        [indexName: string]: string[]
    }
}

export const getObjectIDs = async (): Promise<Out> => {
    const out: Out = {}

    for (const [appId, {apiKey, indices}] of Object.entries(ALGOLIA_APPS)) {
        out[appId] = {}

        for (const indexConfig of indices) {
            const searchClient = algoliaSearch(appId, apiKey)
            const index = searchClient.initIndex(indexConfig.name)

            out[appId][indexConfig.name] = (await index.search(indexConfig.searchTerm, {
                attributesToRetrieve: ['objectID'],
                hitsPerPage: ALGOLIA_OBJECT_ID_COUNT
            })).hits.map((hit) => hit.objectID)
        }
    }

    return out;
}
