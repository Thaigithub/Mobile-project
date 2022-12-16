
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
http://localhost:3000/user/registerUser
```
example body:
{
  "id": "142516541"
  "username": "thienle",
  "password": "1234",
  "firstName": "thien",
  "lastName": "le",
  "phoneNumber": "091241241",
  "email: "thien@gmail.com",
  "address": "HCM",
  "role": "customer"
}
```
### login
http://localhost:3000/auth/login
```
example body:
{
  "username": "thienle",
  "password": "1234"
}
```
### get user
http://localhost:3000/user/<username>

### save home rent
http://localhost:3000/homerent/upsertHomerent
```
{
  "name": "abc",
  "imageUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvi.wikipedia.org%2Fwiki%2FManchester_United_F.C.&psig=AOvVaw3zYduQJ58VxHQ20-21gvzA&ust=1670906177893000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLilr9ug8_sCFQAAAAAdAAAAABAD",
  "price": 1250,
  "rating": 3,
  "status": "available",
  "note": "",
  "contact": "0912481512",
  "roomType": "apartment",
  "roomService": ["priveWC"],
  "address": {
    "street": "618b dien bien phu",
    "dictrict": "Binh Thanh",
    "city": "HCM"
  },
  "details": {
    "area": 50,
    "numOfRooms": 4,
    "roomCapacity": 3,
    "isPrivateWc": true,
    "waterUnitPrice": 10,
    "bikeUnitPrice": 10,
    "electricUnitPrice": 123,
    "wifiPrice": 15
  }
}
```
### get home rent list
http://localhost:3000/homerent

### get home rent by id
http://localhost:3000/homerent/6396b84b145ef40cd40f282e
