Farset Membership Management
============================

A MVP membership management system enabling new and returning users to purchase daily passes to Farset Labs

> Farset Labs is a community funded and volunteer operated charity, opened in 2012 as a place for creativity and technological tinkering. We’re open to everyone, no matter what you want to do, and we welcome people from all walks of life to use our space, come to our events, and get involved with the maker community in Northern Ireland.

Getting Started
---------------

Run the following commands in your terminal to get started

```sh
git clone https://github.com/gingerzoealex/farset-membership-management
cd farset-membership-Management
cd server/client
npm install
cd ../../
docker-compose -f docker-compose-dev.yml build
docker-compose -f docker-compose-dev.yml up
```

##### Open the client

The client should become available on `http://localhost`
