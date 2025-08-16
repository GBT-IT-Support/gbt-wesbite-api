
/**
 * A simple example includes a HTTP get method to get all items from a DynamoDB table.
 */
export const getStatusHandler = async (event) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getStatus only accept GET method, you tried: ${event.httpMethod}`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);

    const response = {
        statusCode: 200,
        body: 'Welcome to Great Beauty Tabernacle API'
    };

    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
