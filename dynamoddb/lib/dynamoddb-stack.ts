import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
export class DynamoddbStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // dynamodb table
    const table = new dynamodb.Table(this, 'Table', {
  partitionKey: { name: 'custmeridtype0ijk909', type: dynamodb.AttributeType.NUMBER },
});
    // example resource
    // const queue = new sqs.Queue(this, 'DynamoddbQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
