const AWS = require('aws-sdk');
const getMovie = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const { id } = event.pathParameters;
        const result = await dynamodb.get({
            TableName: process.env.DYNAMODB_TABLE,
            Key: {
                id
            }
        }).promise();

        const movie = result.Item;
        return {
            status: 200,
            body: {
                movie
            }
        };
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getMovie
}
