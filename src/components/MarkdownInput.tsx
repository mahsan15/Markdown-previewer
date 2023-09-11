import React from 'react';
import styled from 'styled-components';

interface MarkdownInputProps {
  value: string;
  onChange: (newValue: string) => void;
}

const InputContainer = styled.div`
  margin-top: 1rem;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 1rem;
`;

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <InputContainer>
      <StyledTextArea value={value} onChange={handleChange} />
    </InputContainer>
  );
};

export default MarkdownInput;