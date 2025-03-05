import axios from "axios";

const API_URL = "https://exoilvbze7.execute-api.us-east-2.amazonaws.com/dev/applications";

export async function fetchApplications() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching applications:", error);
    return [];
  }
}


