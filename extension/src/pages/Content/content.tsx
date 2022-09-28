import React from 'react';
// import { createRoot } from 'react-dom/client';
import AbstractComponent from './modules/abstract';
import { ChromeMessage, Sender } from '../types';

type MessageResponse = (response?: any) => void;

const validateSender = (
  message: ChromeMessage,
  sender: chrome.runtime.MessageSender
) => {
  return sender.id === chrome.runtime.id && message.from === Sender.React;
};

const messagesFromReactAppListener = (
  message: ChromeMessage,
  sender: chrome.runtime.MessageSender,
  response: MessageResponse
) => {
  const isValidated = validateSender(message, sender);

  if (isValidated && message.message === 'modify') {
    modifyPageContent();
    response('success!');
  }

  //if (isValidated && message.message === 'delete logo') {
  //  const logo = document.getElementsByClassName('lnXdpd')[0];
  //  logo?.parentElement?.removeChild(logo);
  //}
};

const revealAbstract = (node: Element, fullText: string) => {
  node.textContent = fullText;
};

const modifyPageContent = () => {
  const abstract = document.querySelector('main div div p:nth-of-type(2)');
  if (abstract !== null) {
    const abstractContent = abstract.textContent;
    const shortAbstractContent =
      abstractContent?.substring(0, 200) + ' ...' || '';
    abstract.textContent = shortAbstractContent;
    const container = document.createElement('div');
    container.id = 'injected';
    abstract.appendChild(container);
    // const root = createRoot(container);

    // root.render(<AbstractComponent />);
    // abstract.insertAdjacentElement(
    //   'afterend',
    //   <button
    //     onClick={() => {
    //       revealAbstract(abstract, abstractContent);
    //     }}
    //   ></button>
    // );
  }
  console.log();
};

export const main = () => {
  console.log('[content.ts] Main');
  /**
   * Fired when a message is sent from either an extension process or a content script.
   */
  chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
};

main();
