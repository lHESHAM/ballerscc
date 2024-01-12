


// FixedButton.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './FixedButton.css'


function FixedButton() {
  const { t} = useTranslation();

  const [showButton, setShowButton] = useState(true);

  const toggleButton = () => {
    setShowButton(!showButton);
  };

  return (
    <div>
      {showButton && (
        <div className="fixed-button">
          <button onClick={toggleButton}>{t('FreeSessionFixed')}</button>
          <div className="close-button" onClick={toggleButton}>
            X
          </div>
        </div>
      )}
    </div>
  );
}

export default FixedButton;
