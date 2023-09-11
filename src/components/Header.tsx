import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  onToggleGuide: () => void;
}

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 2rem;
  width: 95%;
  border-radius: 30px 30px 0 0;
`;

const Title = styled.h1`
  margin: 0;
`;

const Button = styled.button`
  background-color: #fff;
  color: #333;
  border: none;
  margin-top: 40px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const Header: React.FC<HeaderProps> = ({ onToggleGuide }) => {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <Button onClick={onToggleGuide}>Toggle Guide</Button>
    </HeaderContainer>
  );
};

export default Header;