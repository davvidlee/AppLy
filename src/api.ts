import { Application } from "./applications/columns";
import { CognitoUser } from "amazon-cognito-identity-js";
import { userPool } from "./auth/auth"; // Import your Cognito user pool
import { fetchUserAttributes, fetchAuthSession, FetchUserAttributesOutput } from "aws-amplify/auth";

import axios from "axios";

const API_URL = "https://exoilvbze7.execute-api.us-east-2.amazonaws.com/dev/applications";
export async function getUserAttributes(): Promise<FetchUserAttributesOutput | null> {
  try {
    const attributes = await fetchUserAttributes();
    console.log("Fetched attributes: ", attributes);
    return attributes || null;
  } catch (error) {
    console.error("Error fetching user attributes:", error);
    return null;
  }
}

export async function getUserID(){
  try {
    const userAttributes: FetchUserAttributesOutput = await fetchUserAttributes();
    const userSub = userAttributes['sub'];
    return userSub
  } catch (error) {
    console.error("Error getting userID:", error);
    return "";
  }
}

export async function fetchApplications() {
  try {
    const response = await axios.get(API_URL);
    const userAttributes: FetchUserAttributesOutput | null = await fetchUserAttributes();
    const userSub = userAttributes['sub'];
    const data = response.data;

    const userData = data.find((user: any) => user.id === userSub);
    return userData['applications'];
  } catch (error) {
    console.error("Error fetching applications:", error);
    return [];
  }
}

export async function addApplication(userID: string, application: any) {
  try {
    // console.log(userID);
    const response = await axios.post(API_URL, { userID, application }, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding application:", error);
    throw new Error("Failed to add application");
  }
}