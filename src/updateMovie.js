const AWS = require('aws-sdk');

const updateMovie = async (event) => {

    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const { id } = event.pathParameters;
        const {
            titulo,
            episodio_id,
            parrafo_apertura,
            director,
            productor,
            fecha_lanzamiento,
            especies,
            naves_estelares,
            vehiculos,
            personajes,
            planetas,
            recurso_url,
        } = JSON.parse(event.body);

        const result = await dynamodb.update({
            TableName: process.env.DYNAMODB_TABLE,

            // Setear cada uno de los valores
            UpdateExpression: `set 
                titulo = :titulo, 
                episodio_id = :episodio_id, 
                parrafo_apertura = :parrafo_apertura, 
                director = :director, 
                productor = :productor,
                fecha_lanzamiento = :fecha_lanzamiento,
                especies = :especies,
                naves_estelares = :naves_estelares,
                vehiculos = :vehiculos,
                personajes = :personajes,
                planetas = :planetas,
                recurso_url = :recurso_url
                `,
            ExpressionAttributeValues: {
                ':titulo': titulo,
                ':episodio_id': episodio_id,
                ':parrafo_apertura': parrafo_apertura,
                ':director': director,
                ':productor': productor,
                ':fecha_lanzamiento': fecha_lanzamiento,
                ':especies': especies,
                ':naves_estelares': naves_estelares,
                ':vehiculos': vehiculos,
                ':personajes': personajes,
                ':planetas': planetas,
                ':recurso_url': recurso_url,
            },
            Key: { id },
            ReturnValues: 'ALL_NEW'
        }).promise();

        return {
            status: 200,
            body: JSON.stringify({
                message: 'Pelicula actualizada'
            })
        };
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    updateMovie,
}
