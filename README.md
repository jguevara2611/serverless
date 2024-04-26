# Serverless Framework Node HTTP API on AWS

### Requisitos:

#### Instalar serverless globalmente

```
$ npm install -g serverless
```

#### Instalar dependencias del proyecto
Ingresar a las carpeta del proyecto clonado y ejecutar el siguiente comando:
```
$ npm install
```

### Despliegue
Previamente se tiene que configurar las credenciales de AWS
```
$ serverless deploy
```

### Documentación de la API - Servicio Serverless

### 1. [GET /films]

- **Descripción:** Obtiene lista de películas disponibles en SWAPI.
- **URL:** `/films`
- **Ejemplo de respuesta:**
```json
  {
  "status": 200,
  "body": {
    "response": [
          {
            "titulo": "A New Hope",
            "episodio_id": 4,
            "parrafo_apertura": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
            "director": "George Lucas",
            "productor": "Gary Kurtz, Rick McCallum",
            "fecha_lanzamiento": "1977-05-25",
            "especies": [
              "https://swapi.py4e.com/api/species/1/",
              "https://swapi.py4e.com/api/species/2/",
              "https://swapi.py4e.com/api/species/3/",
              "https://swapi.py4e.com/api/species/4/",
              "https://swapi.py4e.com/api/species/5/"
            ],
            "naves_estelares": [
              "https://swapi.py4e.com/api/starships/2/",
              "https://swapi.py4e.com/api/starships/3/",
              "https://swapi.py4e.com/api/starships/5/",
              "https://swapi.py4e.com/api/starships/9/",
              "https://swapi.py4e.com/api/starships/10/",
              "https://swapi.py4e.com/api/starships/11/",
              "https://swapi.py4e.com/api/starships/12/",
              "https://swapi.py4e.com/api/starships/13/"
            ],
            "vehiculos": [
              "https://swapi.py4e.com/api/vehicles/4/",
              "https://swapi.py4e.com/api/vehicles/6/",
              "https://swapi.py4e.com/api/vehicles/7/",
              "https://swapi.py4e.com/api/vehicles/8/"
            ],
            "personajes": [
              "https://swapi.py4e.com/api/people/1/",
              "https://swapi.py4e.com/api/people/2/",
              "https://swapi.py4e.com/api/people/3/",
              "https://swapi.py4e.com/api/people/4/",
              "https://swapi.py4e.com/api/people/5/",
              "https://swapi.py4e.com/api/people/6/",
              "https://swapi.py4e.com/api/people/7/",
              "https://swapi.py4e.com/api/people/8/",
              "https://swapi.py4e.com/api/people/9/",
              "https://swapi.py4e.com/api/people/10/",
              "https://swapi.py4e.com/api/people/12/",
              "https://swapi.py4e.com/api/people/13/",
              "https://swapi.py4e.com/api/people/14/",
              "https://swapi.py4e.com/api/people/15/",
              "https://swapi.py4e.com/api/people/16/",
              "https://swapi.py4e.com/api/people/18/",
              "https://swapi.py4e.com/api/people/19/",
              "https://swapi.py4e.com/api/people/81/"
            ],
            "planetas": [
              "https://swapi.py4e.com/api/planets/1/",
              "https://swapi.py4e.com/api/planets/2/",
              "https://swapi.py4e.com/api/planets/3/"
            ],
            "recurso_url": "https://swapi.py4e.com/api/films/1/",
            "creado": "2014-12-10T14:23:31.880000Z",
            "editado": "2014-12-20T19:49:45.256000Z"
          },
        ...
      ]
    }
  }
```
  
### 2. [POST /movies]

- **Descripción:** Agrega una nueva película a la base de datos.
- **URL:** `/movies`
- **Ejemplo de envio:**
```json
  {
        "titulo": "A New Hope",
        "episodio_id": 4,
        "parrafo_apertura": "Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        "director": "George Lucas",
        "productor": "Gary Kurtz, Rick McCallum",
        "fecha_lanzamiento": "1977-05-25",
        "especies": [
          "https://swapi.py4e.com/api/species/1/",
          "https://swapi.py4e.com/api/species/2/"
        ],
        "naves_estelares": [
          "https://swapi.py4e.com/api/starships/2/",
          "https://swapi.py4e.com/api/starships/3/"
        ],
        "vehiculos": [
          "https://swapi.py4e.com/api/vehicles/4/",
          "https://swapi.py4e.com/api/vehicles/8/"
        ],
        "personajes": [
          "https://swapi.py4e.com/api/people/1/",
          "https://swapi.py4e.com/api/people/81/"
        ],
        "planetas": [
          "https://swapi.py4e.com/api/planets/1/",
          "https://swapi.py4e.com/api/planets/3/"
        ],
        "recurso_url": "https://swapi.py4e.com/api/films/1/"
  }
```
  
### 3. [GET /movies/:id]

- **Descripción:** Obtiene los detalles de una película específica de la base de datos.
- **URL:** `/movies/:id`
- **Ejemplo de respuesta:**
```json
{
  "status": 200,
  "body": {
    "movie": {
      "director": "George Lucas",
      "productor": "Gary Kurtz, Rick McCallum",
      "planetas": [
        "https://swapi.py4e.com/api/planets/1/",
        "https://swapi.py4e.com/api/planets/2/",
        "https://swapi.py4e.com/api/planets/3/"
      ],
      "vehiculos": [
        "https://swapi.py4e.com/api/vehicles/4/",
        "https://swapi.py4e.com/api/vehicles/6/",
        "https://swapi.py4e.com/api/vehicles/7/",
        "https://swapi.py4e.com/api/vehicles/8/"
      ],
      "recurso_url": "https://swapi.py4e.com/api/films/1/",
      "titulo": "A New Hope 2",
      "fecha_lanzamiento": "1977-05-25",
      "episodio_id": 5,
      "naves_estelares": [
        "https://swapi.py4e.com/api/starships/2/",
        "https://swapi.py4e.com/api/starships/3/",
        "https://swapi.py4e.com/api/starships/13/"
      ],
      "personajes": [
        "https://swapi.py4e.com/api/people/1/",
        "https://swapi.py4e.com/api/people/2/",
        "https://swapi.py4e.com/api/people/81/"
      ],
      "parrafo_apertura": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      "especies": [
        "https://swapi.py4e.com/api/species/1/",
        "https://swapi.py4e.com/api/species/2/",
        "https://swapi.py4e.com/api/species/3/",
        "https://swapi.py4e.com/api/species/4/",
        "https://swapi.py4e.com/api/species/5/"
      ],
      "id": "620f45d6-f54d-4e77-b5f9-a0150a99d502"
    }
  }
}
```
  
### 4. [GET /movies]

- **Descripción:** Obtiene todas las películas disponibles en la base de datos.
- **URL:** `/movies`
- **Ejemplo de respuesta:**
```json
{
  "status": 200,
  "body": {
    "movies": [
      {
        "director": "George Lucas",
        "productor": "Gary Kurtz, Rick McCallum",
        "planetas": [
          "https://swapi.py4e.com/api/planets/1/",
          "https://swapi.py4e.com/api/planets/2/",
          "https://swapi.py4e.com/api/planets/3/"
        ],
        "vehiculos": [
          "https://swapi.py4e.com/api/vehicles/4/",
          "https://swapi.py4e.com/api/vehicles/6/",
          "https://swapi.py4e.com/api/vehicles/7/",
          "https://swapi.py4e.com/api/vehicles/8/"
        ],
        "recurso_url": "https://swapi.py4e.com/api/films/1/",
        "titulo": "A New Hope 2",
        "fecha_lanzamiento": "1977-05-25",
        "episodio_id": 5,
        "naves_estelares": [
          "https://swapi.py4e.com/api/starships/2/",
          "https://swapi.py4e.com/api/starships/3/",
          "https://swapi.py4e.com/api/starships/13/"
        ],
        "personajes": [
          "https://swapi.py4e.com/api/people/1/",
          "https://swapi.py4e.com/api/people/2/",
          "https://swapi.py4e.com/api/people/81/"
        ],
        "parrafo_apertura": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        "especies": [
          "https://swapi.py4e.com/api/species/1/",
          "https://swapi.py4e.com/api/species/2/",
          "https://swapi.py4e.com/api/species/3/",
          "https://swapi.py4e.com/api/species/4/",
          "https://swapi.py4e.com/api/species/5/"
        ],
        "id": "620f45d6-f54d-4e77-b5f9-a0150a99d502"
      },
      {
        "year": "2000",
        "director": "test 2",
        "id": "c4b3ef9e-b3ae-43fd-bace-5a770c77d849",
        "createAt": {},
        "title": "peli 1"
      },
      {
        "director": "George Lucas",
        "productor": "Gary Kurtz, Rick McCallum",
        "planetas": [
          "https://swapi.py4e.com/api/planets/1/",
          "https://swapi.py4e.com/api/planets/2/",
          "https://swapi.py4e.com/api/planets/3/"
        ],
        "vehiculos": [
          "https://swapi.py4e.com/api/vehicles/4/",
          "https://swapi.py4e.com/api/vehicles/6/",
          "https://swapi.py4e.com/api/vehicles/7/",
          "https://swapi.py4e.com/api/vehicles/8/"
        ],
        "recurso_url": "https://swapi.py4e.com/api/films/1/",
        "titulo": "A New Hope",
        "fecha_lanzamiento": "1977-05-25",
        "episodio_id": 4,
        "naves_estelares": [
          "https://swapi.py4e.com/api/starships/2/",
          "https://swapi.py4e.com/api/starships/3/",
          "https://swapi.py4e.com/api/starships/13/"
        ],
        "personajes": [
          "https://swapi.py4e.com/api/people/1/",
          "https://swapi.py4e.com/api/people/2/",
          "https://swapi.py4e.com/api/people/81/"
        ],
        "parrafo_apertura": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        "especies": [
          "https://swapi.py4e.com/api/species/1/",
          "https://swapi.py4e.com/api/species/2/",
          "https://swapi.py4e.com/api/species/3/",
          "https://swapi.py4e.com/api/species/4/",
          "https://swapi.py4e.com/api/species/5/"
        ],
        "id": "1b861dcb-beb2-475d-9fdd-1c8162ee3527"
      }
    ]
  }
}
```
  
### 5. [PUT /movies/:id]

- **Descripción:** Actualiza los detalles de una película existente en la base de datos.
- **URL:** `/movies/:id`
- **Ejemplo de envio:**
```json
  {
        "titulo": "A New Hope",
        "episodio_id": 4,
        "parrafo_apertura": "Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        "director": "George Lucas",
        "productor": "Gary Kurtz, Rick McCallum",
        "fecha_lanzamiento": "1977-05-25",
        "especies": [
          "https://swapi.py4e.com/api/species/1/",
          "https://swapi.py4e.com/api/species/2/"
        ],
        "naves_estelares": [
          "https://swapi.py4e.com/api/starships/2/",
          "https://swapi.py4e.com/api/starships/3/"
        ],
        "vehiculos": [
          "https://swapi.py4e.com/api/vehicles/4/",
          "https://swapi.py4e.com/api/vehicles/8/"
        ],
        "personajes": [
          "https://swapi.py4e.com/api/people/1/",
          "https://swapi.py4e.com/api/people/81/"
        ],
        "planetas": [
          "https://swapi.py4e.com/api/planets/1/",
          "https://swapi.py4e.com/api/planets/3/"
        ],
        "recurso_url": "https://swapi.py4e.com/api/films/1/"
  }
```
  
### 6. [DELETE /movies/:id]

- **Descripción:** Elimina una película de la base de datos.
- **URL:** `/movies/:id`
- **Ejemplo de respuesta:**
```json
     {
      "status": 200,
      "body": {"message":"Pelicula eliminada"}
    }
```