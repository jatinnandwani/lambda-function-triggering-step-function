'use strict';

module.exports.handler = async (event) => {
  // DEFINING EVENT STATUS

  var event = {
    status: "secondLambdaInProgress",
    message: "SECOND LAMBDA IN PROGRESS"
  };

  // WRITE ALL YOUR OPERATIONS 
  // EXAMPLE

  var x = 5;
  if(x < 7){
    var event = {
      status: "secondLambdaIsCompleted",
      message: "SECOND LAMBDA IS COMPLETED"
    };
  }
  
  return event
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
