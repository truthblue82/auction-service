# Serverless Framework Auth0 Authorizer

A modern, ES6-friendly Lambda Authorizer ready for integration with Serverless Framework and Auth0.

## Features

- Test front-end application
- Private endpoint for testing
- Public endpoint for testing
- ES6-friendly

## Getting started

### 1. Clone the repository (or generate a serverless project)
```sh
sls create --name auth-service --template-url https://github.com/codingly-io/serverless-auth0-authorizer
cd auth-service
```

### 2. Install dependencies

```sh
npm install
```

### 3. Create `secret.pem` file

This file will contain your Auth0 public certificate, used to verify tokens.

Create a `secret.pem` file in the root folder of this project. Simply paste your public certificate in there.

### 4. Deploy the stack

We need to deploy the stack in order to consume the private/public testing endpoints.

```sh
sls deploy -v
```

### 5. Final test

To make sure everything works, send a POST request (using curl, Postman etc.) to your private endpoint.

You can grab a test token from Auth0. Make sure to provide your token in the headers like so:

```
"Authorization": "Bearer YOUR_TOKEN"
```

You should be good to go!

<hr/>

## Bonus: Cross-stack authorization

This is very useful in a microservices setup. For example, you have an Auth Service (this service) which owns anything auth/user-related, and a bunch of other services that require user authorization.
Fear not, it is very easy to make your authorizer work anywhere else in your AWS account.

When defining your Lambdas in other services, simply define the `authorizer` as well and provide the ARN of your `auth` function (can be found in the AWS Console or via `sls info`).

#### Example:

```yaml
functions:
  someFunction:
    handler: src/handlers/someFunction.handler
    events:
      - http:
          method: POST
          path: /something
          authorizer: arn:aws:lambda:#{AWS::Region}:#{AWS::AccountId}:function:sls-auth-service-draft-dev-auth
```

If everything was set up correctly, all incoming requests to your `someFunction` Lambda will first be authorized. You can find the JWT claims at `event.requestContext.authorizer`.

## How to generate `id_token` for authentication

Signup in the link: auth0.com

Run the below command with information from the auth0.com
```
curl --location --request POST 'https://YOUR_HOSTNAME/oauth/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id=CLIENT_ID' \
--data-urlencode 'username=USERNAME' \
--data-urlencode 'password=PASSWORD' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'scope=openid'
```