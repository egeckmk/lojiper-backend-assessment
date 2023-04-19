- [API Documentation](#api-documentation)
  - [Register](#register)
  - [Login](#login)
  - [Bus Services](#bus-services)
  - [Bus Service Detail](#bus-service-detail)
  - [Buy Ticket](#buy-ticket)
  - [User Tickets](#user-tickets)
  - [Ticket Details](#ticket-details)

# API Documentation

## Register

**HTTP Method:** POST

**Metod Privacy:** Public

**Endpoint URL:** /api/user/register

**Description:** The registration API is an API that allows users to register to the system. Users can create a new account by sending the necessary parameters to the system via the registration API. The API validates the user data, performs the necessary validations and returns with an appropriate message upon successful registration.

**Parameters:**

| Parameter | Type    | Required | Description                  |
| :-------- | :------ | :------- | ---------------------------- |
| name      | String  | Yes      | Fullname of user             |
| email     | String  | Yes      | Email of user                |
| password  | String  | Yes      | Password of user             |
| age       | Number  | Yes      | Age of user                  |
| gender    | String  | Yes      | Gender of user               |
| phone     | String  | Yes      | Phone of user                |
| isAdmin   | Boolean | No       | Is the user an administrator |

**Example Url:**

`POST http://localhost:PORT/api/user/register`

**Example request body:**

```json
{
  "name": "Ege Çakmak",
  "email": "egeckmk@gmail.com",
  "password": "Asd.1234",
  "age": 26,
  "gender": "E",
  "phone": "5558968719"
}
```

**Example success response:**

```json
{
  "message": "User created successfully"
}
```

## Login

**HTTP Method:** POST

**Metod Privacy:** Public

**Endpoint URL:** /api/user/login

**Description:** The login API is an endpoint that allows users to authenticate themselves and gain access to a system. Users can submit their credentials, such as email and password, to the login API for verification. The API validates the user's credentials and returns a token or session key upon successful authentication, which can be used to authorize subsequent requests to protected resources.

**Parameters:**

| Parameter | Type   | Required | Description      |
| :-------- | :----- | :------- | ---------------- |
| email     | String | Yes      | Email of user    |
| password  | String | Yes      | Password of user |

**Example Url:**

`POST http://localhost:PORT/api/user/login`

**Example request body:**

```json
{
  "email": "egeckmk@gmail.com",
  "password": "Asd.1234"
}
```

**Example success response:**

```json
{
  "message": "Login successfully.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2IzZWVkNDg3NjIzZDA1ZTgzZTY1NCIsImlhdCI6MTY4MTkwNzE2OSwiZXhwIjoxNjgxOTkzNTY5fQ.deGvaz340M3TxdI7XyCOy03jB58pZOQciGPVEYbdBzc"
}
```

## Bus Services

**HTTP Method:** GET

**Metod Privacy:** Private

**Endpoint URL:** /api/bus-service/get-bus-services

**Description:** Bus Services API is an endpoint that provides information about bus schedules, routes. It allows users to query current bus routes, departure and arrival times, fares.

**Parameters:**

| Parameter     | Type   | Required | Description            |
| :------------ | :----- | :------- | ---------------------- |
| departureCity | String | Yes      | Bus departure location |
| arrivalCity   | String | Yes      | Bus arrival location   |

**Example Url:**

`GET http://localhost:PORT/api/bus-service/get-bus-services`

**Example request body:**

```json
{
  "departureCity": "Izmir",
  "arrivalCity": "Aydin"
}
```

**Example success response:**

```json
{
  "message": "Bus services getted successfully.",
  "data": [
    {
      "_id": "643f2c89ffb4a129aa3507ef",
      "departureTime": "2023-04-20T11:00:00.000Z",
      "arrivalTime": "2023-04-20T12:15:00.000Z",
      "price": 100
    },
    {
      "_id": "643f2c89ffb4a129aa3507f0",
      "departureTime": "2023-04-20T12:00:00.000Z",
      "arrivalTime": "2023-04-20T13:15:00.000Z",
      "price": 100
    },
    {
      "_id": "643f2c89ffb4a129aa3507f1",
      "departureTime": "2023-04-20T13:00:00.000Z",
      "arrivalTime": "2023-04-20T14:15:00.000Z",
      "price": 100
    }
  ]
}
```

## Bus Service Detail

**HTTP Method:** GET

**Metod Privacy:** Private

**Endpoint URL:** /api/bus-service/get-bus-service-detail/:id

**Description:** Bus Services API is an endpoint that provides information about bus schedules, routes. It allows users to query current bus routes, departure and arrival times, fares.

**Example Url:**

`GET http://localhost:PORT/api/bus-service/get-bus-service-detail/:id`

**Example success response:**

```json
{
  "message": "Bus services getted successfully.",
  "data": [
    {
      "_id": "643f2c89ffb4a129aa3507ef",
      "departureTime": "2023-04-20T11:00:00.000Z",
      "arrivalTime": "2023-04-20T12:15:00.000Z",
      "price": 100
    },
    {
      "_id": "643f2c89ffb4a129aa3507f0",
      "departureTime": "2023-04-20T12:00:00.000Z",
      "arrivalTime": "2023-04-20T13:15:00.000Z",
      "price": 100
    },
    {
      "_id": "643f2c89ffb4a129aa3507f1",
      "departureTime": "2023-04-20T13:00:00.000Z",
      "arrivalTime": "2023-04-20T14:15:00.000Z",
      "price": 100
    }
  ]
}
```

## Buy Ticket

**HTTP Method:** POST

**Metod Privacy:** Private

**Endpoint URL:** /api/ticket/buy-ticket

**Description:** The Buy Ticket API allows users to purchase tickets for a bus service.

**Parameters:**

| Parameter                       | Type     | Required | Description                                                                       |
| :------------------------------ | :------- | :------- | --------------------------------------------------------------------------------- |
| busServiceId                    | ObjectId | Yes      | Unique identification (ID) of the bus service                                     |
| userId                          | ObjectId | Yes      | Unique identification (ID) of the user                                            |
| tickets                         | String   | Yes      | A list of tickets contains the following sub-parameters within each ticket object |
| &emsp;&emsp;- ticketOwner       | String   | Yes      | Name of the ticket holder                                                         |
| &emsp;&emsp;- ticketOwnerGender | String   | Yes      | Gender of the ticket holder (E: Male, K: Female)                                  |
| &emsp;&emsp;- seatNumber        | String   | Yes      | Seat number                                                                       |

**Example Url:**

`POST http://localhost:PORT/api/ticket/buy-ticket`

**Example request body:**

```json
{
  "busServiceId": "643f2c89ffb4a129aa3507ef",
  "userId": "643b3eed487623d05e83e654",
  "tickets": [
    {
      "ticketOwner": "Ege Çakmak",
      "ticketOwnerGender": "E",
      "seatNumber": 1
    },
    {
      "ticketOwner": "Esra Kayaoglu",
      "ticketOwnerGender": "K",
      "seatNumber": 2
    }
  ]
}
```

**Example success response:**

```json
{
  "message": "Ticket created successfully."
}
```

## User Tickets

**HTTP Method:** GET

**Metod Privacy:** Private

**Endpoint URL:** /api/ticket/get-user-tickets/:userId

**Description:** The User Tickets API allows users to retrieve information about their purchased tickets for bus services.

**Example Url:**

`GET http://localhost:PORT/api/ticket/get-user-tickets/:id`

**Example success response:**

```json
{
  "message": "Tickets getting successfully.",
  "data": [
    {
      "_id": "643fe1cc8119ecc69318815d",
      "busServiceId": "643f2c89ffb4a129aa3507ef",
      "userId": "643b3eed487623d05e83e654",
      "departureCity": "Izmir",
      "arrivalCity": "Aydin",
      "departureTime": "2023-04-20T11:00:00.000Z",
      "arrivalTime": "2023-04-20T12:15:00.000Z",
      "seatNumber": 1,
      "ticketOwner": "Ege Çakmak",
      "ticketOwnerGender": "E",
      "createdAt": "2023-04-19T12:42:52.942Z",
      "updatedAt": "2023-04-19T12:42:52.942Z",
      "__v": 0
    },
    {
      "_id": "643fe1cc8119ecc69318815e",
      "busServiceId": "643f2c89ffb4a129aa3507ef",
      "userId": "643b3eed487623d05e83e654",
      "departureCity": "Izmir",
      "arrivalCity": "Aydin",
      "departureTime": "2023-04-20T11:00:00.000Z",
      "arrivalTime": "2023-04-20T12:15:00.000Z",
      "seatNumber": 2,
      "ticketOwner": "Esra Kayaoglu",
      "ticketOwnerGender": "K",
      "createdAt": "2023-04-19T12:42:52.942Z",
      "updatedAt": "2023-04-19T12:42:52.942Z",
      "__v": 0
    }
  ]
}
```

## Ticket Details

**HTTP Method:** GET

**Metod Privacy:** Private

**Endpoint URL:** /api/ticket/get-ticket-details/:id

**Description:** The Ticket Details API allows users to retrieve detailed information about a specific ticket for a bus service.

**Example Url:**

`POST http://localhost:PORT/api/ticket/buy-ticket`

**Example success response:**

```json
{
  "message": "Ticket details getting successfully.",
  "data": {
    "departureCity": "Izmir",
    "arrivalCity": "Aydin",
    "departureTime": "2023-04-20T10:00:00.000Z",
    "seatNumber": 1,
    "ticketOwner": "Ege Çakmak"
  }
}
```
