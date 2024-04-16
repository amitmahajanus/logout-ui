// App.js
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Container = styled('div')({
  textAlign: 'center',
});

const Header = styled('header')({
  backgroundColor: '#282c34',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
});

function App() {
  const handleCloseTab = () => {
    window.close();
  };

  return (
    <Container>
      <Header>
        <h1>Close Tab Demo</h1>
        <Button variant="contained" onClick={handleCloseTab}>Close Tab</Button>
      </Header>
    </Container>
  );
}

export default App;
