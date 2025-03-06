import { ResourcesConfig } from "aws-amplify";

export const cognitoConfig = {
    region: "us-east-2", //AWS region
    userPoolId: "us-east-2_lvVS3IycK", //Cognito User Pool ID
    clientId: "537baquetuf87a6usjqoisup0o", //Cognito App Client ID
  };
  
export const authCognitoConfig: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: "us-east-2_lvVS3IycK", //Cognito User Pool ID
      userPoolClientId: "537baquetuf87a6usjqoisup0o", //Cognito App Client ID
    }
  }
}