# Algolia Event Generator

Generates fake Algolia click + conversion events en masse.

Retrieves objectIDs from specified indices within specified Apps, and generates fake events for those objectIDs.

Useful for supporting the testing of Algolia Recommend and Personalization, where test environments may not collect enough user events to activate those features organically.

## Setup

- `npm install`
- `cp ./.env.example ./.env`
- fill out `ALGOLIA_APPS` with real App IDs, API Keys, Index names and search terms
- configure other env vars as required

`ALGOLIA_APPS` example breakdown:

```json
{
    "exampleApp1": {
        "apiKey": "app1APIKey",
        "indices": [
            {"name": "app1Index1", "searchTerm": "app1Index1SearchTerm"},
            {"name": "app1Index2", "searchTerm": "app1Index2SearchTerm"}
        ]
    },
    "exampleApp2": {
        "apiKey": "app2APIKey",
        "indices": [
            {"name": "app2Index1", "searchTerm": "app2Index1SearchTerm"}
        ]
    }
}
```

This will produce files...
- `exampleApp1-app1Index1.csv`
  - events logged against ObjectIDs retrieved from `app1Index1` with search term `app1Index1SearchTerm`
- `exampleApp1-app1Index2.csv`
  - events logged against ObjectIDs retrieved from `app1Index2` with search term `app1Index2SearchTerm`
- `exampleApp2-app2Index1.csv`
  - events logged against ObjectIDs retrieved from `app2Index1` with search term `app2Index1SearchTerm`

## Usage

- `npm run generate`
- Find outputs for each index in `./out`

Output can be supplied directly to Algolia, for example as additional data source in Recommend model training.