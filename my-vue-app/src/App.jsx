import { useState } from 'react';
import { Container, Typography, AppBar, Toolbar, Button, Box, Card } from '@mui/material';
import { Home, Blog} from './pages/'
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [isHomePage, setIsHomePage] = useState(true);

  const handleBlogClick = () => {
    setIsHomePage(false); // Set isHomePage to false when blog button is clicked
  };

  const handleHomeClick = () => {
    setIsHomePage(true); // Set isHomePage to true when home button is clicked
  };

  return (
    <div>
      {/* Render home page or blog page based on state */}
      <div>
      <AppBar style={{ backgroundColor: 'purple' }}>
        <Toolbar>
          <Container style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div>
              {isHomePage ? (
                <Button style={{ backgroundColor: 'black', color: 'white'}} onClick={handleBlogClick}>Blog</Button>
              ) : (
                <Button style={{ backgroundColor: 'black', color: 'white', marginLeft: '20px'}} onClick={handleHomeClick}>Home</Button>
              )}
            </div>
            <Button style={{ backgroundColor: 'black', color: 'white' }} href='https://www.instagram.com/val12.ig/'>Instagram</Button>
            <Button style={{ backgroundColor: 'black', color: 'white' }} href='https://www.linkedin.com/in/varot-pavaritpong/'>LinkedIn</Button>
            <Button style={{ backgroundColor: 'black', color: 'white' }} href='https://github.com/VarotP'>GitHub</Button>
          </Container>
        </Toolbar>
      </AppBar>
      
      </div>
      {isHomePage ? (
        <Home/>
      ) : (
        <Blog/>
      )}
    </div>
  );
}

export default App;
