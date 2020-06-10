# Backend

## Endpoints
| Method | Route| Description|
| --- | --- |--- |
| GET | /items |  Get all items|
| GET | /points |  Get all points by city, uf and item through query params|
| GET | /points/:id |  Get point by id|
| POST | /points |  Create new point|

**GET /items**
-> http://localhost:3333/items
~~~~
Response
[
    {
        "id": 1,
        "title": "Lâmpadas",
        "image_url": "http://192.168.0.18:3333/uploads/lampadas.svg"
    },
    {
        "id": 2,
        "title": "Pilhas e Baterias",
        "image_url": "http://192.168.0.18:3333/uploads/baterias.svg"
    }
]
~~~~

**GET /points**
-> http://localhost:3333/points?uf=SP&city=São Paulo&items=6,1,2
~~~~
Response
[
    {
        "id": 5,
        "image": "https://example",
        "name": "Point Test",
        "email": "point.test@test.com",
        "whatsapp": "81 99999-9999",
        "latitude": -48.0000,
        "longitude": -31.0000,
        "city": "São Paulo",
        "uf": "SP",
        "image_url": "http://192.168.0.00:3333/uploads/...",
    },
]
~~~~

**GET /points/:id**
-> http://localhost:3333/points/12
~~~~
Response
{
    "point": {
        "id": 13,
        "image": "d881104b4aa2_test.png",
        "name": "Mercado",
        "email": "test@test.com",
        "whatsapp": "12334",
        "latitude": 0,
        "longitude": 0,
        "city": "Barreirinha",
        "uf": "AM",
        "image_url": "http://192.168.0.00:3333/uploads/d881104b4aa2_test.png"
    },
    "items": [
        {
            "title": "Lâmpadas"
        },
    ]
}
~~~~

**POST /points**
-> http://localhost:3333/points
~~~~
Body

-> Create from data with table attributes

Response
{
    "id": 14,
    "image": "61e464b26d30_test.png",
    "name": "Test",
    "email": "test.email",
    "whatsapp": "81 999999999",
    "latitude": "-48.00000,
    "longitude": "-31.00000",
    "city": "São Paulo",
    "uf": "SP"
}
~~~~

## Tables

#### Points 

| Field name | Type|
| --- | --- |
| id | number (increment) |
| image | string |
| name | string |
| email | string |
| whatsapp | string |
| latitude | decimal |
| longitude | decimal |
| city | string |
| uf | string |

#### Items 

| Field name | Type|
| --- | --- |
| id | number (increment) |
| image | string |
| name | string |
