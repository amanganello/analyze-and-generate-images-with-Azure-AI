import axios from 'axios';

const analyzeImage = async (imageUrl) => {
  try {
    // Replace 'YOUR_SUBSCRIPTION_KEY' and 'YOUR_ENDPOINT' with your actual Azure subscription key and endpoint
    const subscriptionKey = process.env.REACT_APP_AZURE_SUBSCRIPTION_KEY;
    const endpoint = process.env.REACT_APP_AZURE_ENDPOINT;

    // Specify the visual features you want to retrieve (replace with your desired features)
    const features = 'caption,tags';

    const apiUrl = `${endpoint}/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&Features=${features}`;

    // Set up the request headers
    const headers = {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': subscriptionKey,
    };

    // Set up the request body
    const data = {
      url: imageUrl,
    };

    // Make the API request
    const response = await axios.post(apiUrl, data, { headers });

    // Return the JSON response
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error('Error analyzing image:', error.message);
    throw error;
  }
};

export default analyzeImage;
