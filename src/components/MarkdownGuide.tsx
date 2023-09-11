import React from 'react';
import styled from 'styled-components';

const GuideContainer = styled.div`
  background-color: #f9f9f9;
  padding: 1rem;
  margin-top: 1rem;
  width: 100%;
`;

const Code = styled.code`
  display: block;
  margin: 0.5rem 0;
`;

const MarkdownGuide: React.FC = () => {
  return (
    <GuideContainer>
      <Code># Heading 1</Code>
      <Code>## Heading 2</Code>
      <Code>### Heading 3</Code>
      <Code>*Italc text*</Code>
      <Code>**bold text**</Code>
      <Code>***Bold Italic text***</Code>
      <Code>- bullet point</Code>
      <Code>* bullet point</Code>
      <Code>+ bullet point</Code>

      
      {/* Add more common Markdown syntaxes */}
    </GuideContainer>
  );
};

export default MarkdownGuide;