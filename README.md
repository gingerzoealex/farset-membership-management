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
docker-compose -f docker-compose-dev.yml run users-service python manage.py recreate_db
```

If have previously set up this repository, you will only need to run the following commands:

```sh
docker-compose -f docker-compose-dev.yml build
docker-compose -f docker-compose-dev.yml up
docker-compose -f docker-compose-dev.yml run users-service python manage.py recreate_db
```

##### Open the client

The client should become available on `http://localhost`

#### Creating user accounts

Checking the users service is up

```json
curl -X GET \
  http://localhost/users/ping
```

Creating a new user

```json
curl -X POST \
  http://localhost:5000/auth/register \
  -H 'content-type: application/json' \
  -d '{
  "email":"joe@gmail.com",
  "password":"123456"
}'
```

Login as an existing user

```json
curl -X POST \
  http://http/0.0.0.0:5001/auth/login \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 1f265bf8-7004-e46f-a85f-e130979d5f06' \
  -d '{
  "username": "awfulwaffle",
  "email":"joe@gmail.com",
  "password":"123456"
}'
```

Getting a list of users

```json
curl -X GET \
  http://localhost/users \
  -H 'cache-control: no-cache' \
```
