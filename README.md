# Codingly.io: Base Serverless Framework Template

https://codingly.io

## What's included
* Folder structure used consistently across our projects.
* [serverless-pseudo-parameters plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Allows you to take advantage of CloudFormation Pseudo Parameters.
* [serverless-bundle plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Bundler based on the serverless-webpack plugin - requires zero configuration and fully compatible with ES6/ES7 features.

## Getting started
```
sls create --name YOUR_PROJECT_NAME --template-url https://github.com/codingly-io/sls-base
cd YOUR_PROJECT_NAME
npm install
```

Add region `region: ap-southeast-1` into provider
Then run below command:

```
#deploy
$>sls deploy -v

#create function:
$>sls deploy -f functionName -v
```

Output:
```
Serverless: Stack update finished...
Service Information
service: auction-service
stage: dev
region: ap-southeast-1
stack: auction-service-dev
resources: 11
api keys:
  None
endpoints:
  GET - https://d6foz2wahj.execute-api.ap-southeast-1.amazonaws.com/dev/hello
functions:
  hello: auction-service-dev-hello
layers:
  None

Stack Outputs
HelloLambdaFunctionQualifiedArn: arn:aws:lambda:ap-southeast-1:949607011998:function:auction-service-dev-hello:1
ServiceEndpoint: https://d6foz2wahj.execute-api.ap-southeast-1.amazonaws.com/dev
ServerlessDeploymentBucketName: auction-service-dev-serverlessdeploymentbucket-1zcn76fjzx3w

Serverless: Run the "serverless" command to setup monitoring, troubleshooting and testing.
```

Copy endpoints url https://d6foz2wahj.execute-api.ap-southeast-1.amazonaws.com/dev/hello and paste into browser, we will see content:
{"message":"Hello from https://codingly.io"}

## Remove serverless:

$>sls remove -v