const { v4 } = require('uuid');
const AWS = require('aws-sdk');

const addMovie = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
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
        recurso_url
    } = JSON.parse(event.body);

    const id = v4();

    const newMovie = {
        id,
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
    }

    await dynamodb.put({
        TableName: process.env.DYNAMODB_TABLE,
        Item: newMovie
    }).promise()

    return {
        statusCode: 200,
        body: JSON.stringify(newMovie)
    }
}

module.exports = {
    addMovie
};
