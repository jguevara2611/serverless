const AWS = require('aws-sdk');
const deleteMovie = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const { id } = event.pathParameters;
        await dynamodb.delete({
            TableName: process.env.DYNAMODB_TABLE,
            Key: { id }
        }).promise();
        return {
            status: 200,
            body: JSON.stringify({
                message: 'Pelicula eliminada'
            })
        };
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    deleteMovie,
}
