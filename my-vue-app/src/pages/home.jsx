import { Container, Typography, AppBar, Toolbar, Button, Box, Card } from '@mui/material';


const Home = () => {
    return (
        <div>
      <Container>
        <Typography style={{ fontFamily: 'Satoshi', fontSize: '64px' }}>Varot Pavaritpong</Typography>
        <Typography style={{ fontFamily: 'Satoshi', fontSize: '28px' }}>I code and make stuff</Typography>
        <Typography style={{ fontFamily: 'Satoshi', fontSize: '16px' }}>but also a UBC CS student</Typography>
      </Container>

      

      <Container>
        <Typography style={{ fontFamily: 'Satoshi', fontSize: '48px' }}>Projects</Typography>
        <Box sx={{ display: 'inline-flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'inline-flex' }}>
            <Card>Card1</Card>
            <Card>Card2</Card>
            <Card>Card3</Card>
          </Box>
          <Box sx={{ display: 'inline-flex' }}>
            <Card>Card4</Card>
            <Card>Card5</Card>
            <Card>Card6</Card>
          </Box>
          <Box sx={{ display: 'inline-flex' }}>
            <Card>Card7</Card>
            <Card>Card8</Card>
            <Card>Card9</Card>
          </Box>
        </Box>
      </Container>
    </div>
    );
};
export default Home;