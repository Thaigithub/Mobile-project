
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Api local
### register user
http://localhost:3000/user/registerUser\\
```
example body:
{
  "username": "thienle",
  "password": "1234",
  "firstName": "thien",
  "lastName": "le",
  "phoneNumber": "091241241",
  "address": "HCM",
  "role": "customer"
}
```
### login
http://localhost:3000/auth/login\\
```
example body:
{
  "username": "thienle",
  "password": "1234"
}
```
### get user
http://localhost:3000/user/<username>


