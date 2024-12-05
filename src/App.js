import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import './theme.css'
import LanguagePopup from './components/common/LanguagePopup';
function App() {
  const [language, setLanguage] = useState('English');
  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    console.log(`Selected language: ${selectedLanguage}`);
  };
  return (
    <div className="d-flex">
      {/* <LanguagePopup onSelectLanguage={handleLanguageSelect} /> */}
      {/* <div id="google_translate_element" style={{ display: 'none' }}></div> */}
      <HomePage />
    </div>
  );
}

export default App;
