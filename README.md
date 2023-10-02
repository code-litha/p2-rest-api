# MOVIE APP

## URL

> http://localhost:3000

## List Endpoints

- GET /movies
- POST /movies
- DELETE /movies/:id

### GET /movies

- Response (200 - OK)

```js
{
  "statusCode": 200,
  "message": `Success retrieved data movies`,
  "data": [
    {
      "id": <Integer>,
      "name": <String>,
      "imageUrl": <String>,
      "releaseYear": <Integer>,
      "rating": <Float>,
      "createdAt": <String>,
      "updatedAt": <String>
    },
    ...
  ]
}
```

- Response (500 - Internal Server Error)

```js
{
}
```

### POST /movies

- Request Body

```js
{
  "name": <String>,
    "imageUrl": <String>,
      "releaseYear": <integer>,
       "rating": <integer>,
}
```

- Response (201 - Created)

```js
{
}
```

- Response (400 - Bad Request)

```js
{
}
```
