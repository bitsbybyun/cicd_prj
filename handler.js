'use strict';

module.exports.api = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({
        message: 'Go Serverless v1.0! Your function executed successfully!',
        value: 30
      },
      null,
      2
    ),
  };
};
