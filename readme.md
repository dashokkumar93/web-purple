# Web Purple Web Site
[![Build Status](https://travis-ci.org/kitos/web-purple.svg?branch=master)](https://travis-ci.org/kitos/web-purple)
[![Coverage Status](https://coveralls.io/repos/github/kitos/web-purple/badge.svg?branch=master)](https://coveralls.io/github/kitos/web-purple?branch=master)
[![Dependency status](https://david-dm.org/kitos/web-purple/status.png)](https://david-dm.org/kitos/web-purple#info=dependencies&view=table)
[![Dev Dependency Status](https://david-dm.org/kitos/web-purple/dev-status.png)](https://david-dm.org/kitos/web-purple#info=devDependencies&view=table)

## How to start project?
```
[configure database](#database)
npm install
npm run start
```

## Database
[mongodb](https://www.mongodb.com/) is used in app (hosted on [mLab](https://mlab.com/welcome/)).

To change connection configuration see *src/server/conf/db.js*

For development purposes you can use next db:
```javascript
const connectionUrl = 'mongodb://admin:123123@ds064718.mlab.com:64718/webpurple';
```
or set up your own db (500mb fo free in [mLab](https://mlab.com/welcome/))

## Facebook
Authorisation in app can be done via facebook.
Credentials of facebook app should be passed to *src/server/conf/passport.js*

For development purposes you can use next credentials:

```javascript
fb: {
    clientID: '1208431049220025',
    clientSecret: '39bf839eeb8805fd32f77dd70fac3604',
    ...
```

## Flow
```javascript
flow-typed install
npm run flow
```
If the errors occures with the external libraty you could create a stub with: 
```javascript
flow-typed create-stub my-package
```
You probably want to upgrade your editor/IDE with any Flow plug-in to see errors reported by Flow in the editor.

## How to contribute?
We are open to, and grateful for, any contributions made by the community.

You can find a list of issues you can work on [here](https://github.com/kitos/web-purple/issues).
Feel free to create new ones.

In general, the contribution workflow looks like this:

1. Fork the repo.
2. Create a new feature branch based off the master branch.
3. Make sure all tests pass (`npm run test`) and there are no linting errors (`npm run lint`).
4. Submit a pull request, referencing any issues it addresses.

Please try to keep your pull request focused in scope and avoid including unrelated commits.

You can read here more about contributing [here](https://guides.github.com/activities/contributing-to-open-source/). 

### Commit messages
Feel free to use emoji in your commit messages :anguished: (More about it [here](https://github.com/dannyfritz/commit-message-emoji)).

## Useful links
[redux](http://redux.js.org/)