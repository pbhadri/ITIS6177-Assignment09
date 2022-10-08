exports.handler = async (event) => {
    // TODO implement
    const msg = "Pallavi says " + event.queryStringParameters.keyword;
    const response = {
        statusCode: 200,
        body: msg
    };
    return response;
}