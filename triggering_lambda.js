'use strict';

var aws = require('aws-sdk')

module.exports.handler = (event, context, callback) => {
  var params = {
    stateMachineArn: process.env.statemachine_arn,
    input: JSON.stringify({})
  }
  var stepfunctions = new aws.StepFunctions()
  stepfunctions.startExecution(params, function (err, data) {
    if (err) {
      console.log('err while executing step function')
    } else {
      console.log('started execution of step function')
    }
  })
}
