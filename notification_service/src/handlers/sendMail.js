import AWS from 'aws-sdk';

const ses = new AWS.SES({region: 'ap-southeast-2'});

async function sendMail(event, context) {
  const params = {
    Source: 'truthblue82@gmail.com',
    Destination: {
      ToAddresses: ['truthblue82@gmail.com']
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from JannyYen!'
        }
      },
      Subject: {
        Data: 'Test Mail'
      }
    }
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;


