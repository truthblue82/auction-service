# Using Serverless framework for build sample project.

## What's included

* Folder structure used consistently across our projects.
* [serverless-pseudo-parameters plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Allows you to take advantage of CloudFormation Pseudo Parameters.
* [serverless-bundle plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Bundler based on the serverless-webpack plugin - requires zero configuration and fully compatible with ES6/ES7 features.

## Install AWS CLI version 2

Install from the link: https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html

After finishing, check AWS by command:
```
$>aws --version
```

## Install Serverless framework

Run command:
```
$>npm install -g serverless
```

Check serverless after finishing:
```
$>sls --version

Framework Core: 1.71.3
Plugin: 3.6.12
SDK: 2.3.1
Components: 2.30.12
```

## Getting started

Run command below:
```
sls create --name YOUR_PROJECT_NAME --template-url https://github.com/codingly-io/sls-base
cd YOUR_PROJECT_NAME
npm install
```

Configure for AWS:

```
$>aws configure
AWS Access Key ID [None]:
AWS Secret Access Key [None]:
Default region name [None]:ap-southeast-1 (depend on you)
Default output format [None]:yaml / json ( depend on you )
```

Add region `region: ap-southeast-1` into provider
Then run below command:

```
#deploy
$>sls deploy -v

#deploy a new function:
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

## Remove serverless:

$>sls remove -v

## Process auction:

```
$>sls logs -f processAuctions
```