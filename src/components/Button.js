import React from 'react';
import analyzeImage from './azure-image-analysis';
import generateImage from './azure-image-generation';

function Button (props) {
    
    const btnText = props.type === 'Analyze' ? 'Analyze' : 'Generate';
    const handleImageAnalysis = async () => {
        try {
          const result = await analyzeImage(props.imageUrl);
            props.setAnalysisResult(result);
        } catch (error) {
          // Handle errors
          console.error('Error analyzing image:', error.message);
        }
      };
    
    const handleImageGeneration = async () => {
        try {
            console.log(props.setIsLoading)
            props.setIsLoading(true);
            const result = await generateImage(props.prompt);
            props.setGeneratedImage(result);
        } catch (error) {
            console.error('Error generating images:', error);
        } finally {
            props.setIsLoading(false);
        }
    }
    const handleOnclick = (e) => {
        e.preventDefault();
        if (props.type === 'Analyze' && props.imageUrl)
            handleImageAnalysis();
        else 
            handleImageGeneration();
    }
    return (
        <button disabled={props.isLoading} className="btn" onClick={handleOnclick}>{btnText}</button>
    )
}

export default Button;