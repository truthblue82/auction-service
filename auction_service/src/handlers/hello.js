async function hello(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello, this is a test!' }),
    };
}

export const handler = hello;
