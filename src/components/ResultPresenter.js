import React from 'react';

const ResultPresenter = (props) => {
    console.log(props);
    
    return (
        <div>
            <h2>Computer Vision Analysis</h2>
            {props.imageUrl && 
                <img alt={''} src={props.imageUrl}/>}
            {props.analysisResult && 
                <pre>{JSON.stringify(props.analysisResult, null, 2)}</pre>
            }
            {
                props.generatedImage && 
                props.generatedImage.map((image) => 
                    (
                    <div key={image.url}>
                      <img
                        src={image.url}
                        alt={`Generated by AI`}
                        style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                    ))
            }
        </div>)
}

export default ResultPresenter;