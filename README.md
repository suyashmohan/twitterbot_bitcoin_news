# A Twitter Bot that Searches for Bitcoin news

## Goal
Nothing. Just an exercise. Does not solve a real purpose.
It runs a scheduler to search for Bitcoin and Blockchain related news every 30 minutes and saves it to MongoDB.

## How to run
1. Open config.js and put your twitter keys along with mongodb details
2. Run `npm run start` to start the server

## How to use
You can access the tweets saved into Database through REST API
Use `api/tweets` to access tweets. You can may provide 2 additional params :
1. `limit` for number of results to fetch
2. `sort` to sort the results by retweet count.
E.g. `api/tweets?sort&limit=20`