# Backend for rustaceans.org

These scripts contain the API backend for rustaceans.org.

## Development

In order to develop rustaceans.org locally, follow these steps:

1. Fork <https://github.com/nrc/rustaceans.org> (required to access it later)
1. Create a personal access token: <https://github.com/settings/tokens>
1. Create `config.json` with:

```json
{
    "repo": "yourname/rustaceans.org",
    "username": "yourname",
    "token": "your-token"
}
```
1. `npm install`
1. `node init.js` (this will fill the database)
1. `node rustacean.js` (this will start the API server on port 2345)
1. In a second terminal, in the `rustaceans.org` directory: `python2 -m SimpleHTTPServer` (to have an http server serving these files)
1. In `rustaceans.org/js/router.js` change API url to `http://localhost:2345/`
1. Browse <http://localhost:8000/>
