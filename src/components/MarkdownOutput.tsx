import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

interface MarkdownOutputProps {
  markdown: string;
}

const OutputContainer = styled.div`
  margin-top: 1rem;
  border: 4px solid #ddd;
  padding: 1rem;
  width: 99.5%;
  border-radius: 0 0 30px 30px ;
`;

const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;