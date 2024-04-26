const AWS = require('aws-sdk');
const getMovies = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const result = await dynamodb.scan({
            TableName: process.env.DYNAMODB_TABLE
        }).promise();
        const movies = result.Items;

        return {
            status: 200,
            body: {
                movies
            }
        };
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getMovies
}
