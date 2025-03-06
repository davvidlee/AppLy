import { Application } from "./applications/columns";
import { CognitoUser } from "amazon-cognito-identity-js";
import { userPool } from "./auth/auth"; // Import your Cognito user pool
import { fetchUserAttributes, fetchAuthSession, FetchUserAttributesOutput } from "aws-amplify/auth";

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

export async function fetchApplications(): Promise<Application[]> {
  try {
    // Get the authenticated user
    const session = await fetchAuthSession();
    const token = session.tokens?.idToken?.toString();

    if (!token) {
      throw new Error("No authentication token found.");
    }

    // Fetch applications from API Gateway
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`, // Ensure token is correctly formatted
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching applications: ${response.statusText}`);
    }

    const data: Application[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch applications:", error);
    return []; // Return an empty list if there's an error
  }
}
