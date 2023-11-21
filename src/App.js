import React, {useState} from 'react';
import Title from './components/Title';
import TextBox from './components/TextBox';
import Button from './components/Button';
import ResultPresenter from './components/ResultPresenter';
import { LoaderComponent } from './components/Loader';
import { Warning } from './components/Warning';

import './index.css';

function App() {
  const btnsRequired = ['Analyze', 'Generate'];
  const [input, setInput] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');
  const [generatedImage, setGeneratedImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const warningTextAzure = 'Key and/or endpoint not configured for cognitive services'

  const onTextBoxChange = (e) => {
    setInput(e.target.value);
  };

  function checkConfiguration() {
    return process.env.REACT_APP_AZURE_SUBSCRIPTION_KEY && process.env.REACT_APP_AZURE_ENDPOINT;
  }

  return (
    <div className='appContainer'>
      {!checkConfiguration() ? <Warning text={warningTextAzure}/> : 
        ( <>
            <Title />
            <TextBox changeFunc={onTextBoxChange} text={input}/>
            <div className='btnContainer'>
            {
              btnsRequired.map((elem) => {
                return <Button 
                  type={elem} 
                  key={elem} 
                  imageUrl={elem === 'Analyze' ? input : '' }
                  prompt={elem === 'Generate' ? input : '' }
                  setAnalysisResult={setAnalysisResult} 
                  setIsLoading={setIsLoading} 
                  setGeneratedImage={setGeneratedImage}
                  isLoading={isLoading}
                />
              })
            }
            </div>
            {(analysisResult && !isLoading) && (
              <ResultPresenter analysisResult={analysisResult} imageUrl={input} setInput={setInput}/>
            )}
            {(generatedImage?.length > 0 && !isLoading) && (
              <ResultPresenter generatedImage={generatedImage} setInput={setInput}/>
            )}
            {isLoading && (
              <LoaderComponent />
            )}
          </>
        )
      }
      </div>)
}

export default App;
