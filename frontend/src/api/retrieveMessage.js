const axios = require("axios");

export default async function RetrieveMessage() {
  try {
    const response = await axios.get("http://localhost:3333/testMessage");
    const message = response.data;
    console.log(message); // Logs the response data
    return message; // Returns the message to be used in your onClick handler
  } catch (error) {
    console.error("Error fetching message:", error);
    return "Error fetching message"; // Return a fallback message on error
  }
}
