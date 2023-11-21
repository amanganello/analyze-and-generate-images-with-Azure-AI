import axios from 'axios';

async function generateImage(prompt) {
    
    try {
       const requestData = {
       prompt: prompt,
       n: 1,
       size: '256x256', // Set the desired image size here
    };
    
    const headers = {
      'Content-Type': 'application/json',
       Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    };
      
    const response = await axios.post('https://api.openai.com/v1/images/generations', requestData, {
        headers: headers,
    });
      
    return response.data.data;
    } catch (error) {
        console.error('Error generating images:', error);
    }
}

export default generateImage;