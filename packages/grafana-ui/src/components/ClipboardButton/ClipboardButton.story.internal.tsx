import React, { useState } from 'react';

import { withCenteredStory } from '../../utils/storybook/withCenteredStory';
import { ClipboardButton } from './ClipboardButton';
import { Input } from '../Forms/Legacy/Input/Input';
import { text } from '@storybook/addon-knobs';

const getKnobs = () => {
  return {
    buttonText: text('Button text', 'Copy to clipboard'),
    inputText: text('Input', 'go run build.go -goos linux -pkg-arch amd64 ${OPT} package-only'),
    clipboardCopyMessage: text('Copy message', 'Value copied to clipboard'),
  };
};

const Wrapper = () => {
  const { inputText, buttonText } = getKnobs();
  const [copyMessage, setCopyMessage] = useState('');

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', width: '100%', marginBottom: '1em' }}>
        <ClipboardButton
          variant="secondary"
          getText={() => getKnobs().inputText}
          onClipboardCopy={() => setCopyMessage(getKnobs().clipboardCopyMessage)}
        >
          {buttonText}
        </ClipboardButton>
        <Input value={inputText} onChange={() => {}} />
      </div>
      <span>{copyMessage}</span>
    </div>
  );
};

export default {
  title: 'Buttons/ClipboardButton',
  component: ClipboardButton,
  decorators: [withCenteredStory],
};

export const copyToClipboard = () => <Wrapper />;
