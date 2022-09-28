import React, { useEffect, useState } from 'react';
import { ChromeMessage, Sender } from '../types';
import { getCurrentTabUId, getCurrentTabUrl } from '../utils';

const Popup = () => {
  const [onIACR, setOnIACR] = useState<boolean>(false);

  /**
   * Get current URL
   */
  useEffect(() => {
    getCurrentTabUrl((url) => {
      if (url !== undefined) {
        setOnIACR(url.startsWith('https://eprint.iacr.org/'));
      }
    });
  }, []);

  const sendTestMessage = () => {
    const message: ChromeMessage = {
      from: Sender.React,
      message: 'modify',
    };

    getCurrentTabUId((id) => {
      id &&
        chrome.tabs.sendMessage(id, message, (responseFromContentScript) => {
          console.log('response:', responseFromContentScript);
        });
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        {onIACR ? (
          <button onClick={sendTestMessage}>Modify Page</button>
        ) : (
          <div>The extension only works on IACR eprint website!</div>
        )}
      </header>
    </div>
  );
};

export default Popup;
