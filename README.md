# Algolia Event Generator

Generates fake Algolia click + conversion events en masse.

Useful for supporting the testing of Algolia Recommend and Personalization, where test environments may not collect enough user events to activate those features organically.

## Setup

- clone
- `npm install`
- `cp .env.example .env`

Fill out `.env` with your Algolia App ID, Algolia API Key, the search index to get ObjectIDs from and a query string for the search operation.

Configure existing `.env` vars to your requirements.

## Usage

- `npm run generate` - generate events

`generate` outputs to `./out/events.csv` - this can be uploaded directly to Algolia (for example, as an additional data source for a Recommend model).