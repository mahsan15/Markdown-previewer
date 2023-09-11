import { useState } from 'react'
import styled from 'styled-components';
import Header from './components/Header';
import MarkdownGuide from './components/MarkdownGuide';
import MarkdownInput from './components/MarkdownInput';
import MarkdownOutput from './components/MarkdownOutput';
import './App.css'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

function App() {

  const [markdown, setMarkdown] = useState<string>('# Hello World');
  const [showGuide, setShowGuide] = useState<boolean>(false);

  const handleToggleGuide = () => {
    setShowGuide(!showGuide);
  };

  return (
    <Container>
      <Header onToggleGuide={handleToggleGuide} />
      {showGuide && <MarkdownGuide />}
      <MarkdownInput value={markdown} onChange={setMarkdown} />
      <MarkdownOutput markdown={markdown} />
    </Container>
  );
}

export default App
