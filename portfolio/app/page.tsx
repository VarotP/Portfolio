import { Button, Container, AppBar, Toolbar, Typography, Card, Box } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container>
      <Typography style={{fontFamily: 'Satoshi', fontSize: '64px'}}>Varot Pavaritpong</Typography>
      <Typography style={{fontFamily: 'Satoshi', fontSize: '28px'}}>I code and make stuff</Typography>
      <Typography style={{fontFamily: 'Satoshi', fontSize: '16px'}}>but also a UBC CS student</Typography>
      </Container>
      
      <AppBar style={{backgroundColor: 'purple'}}>
        <Toolbar>
          <Container style={{ display: 'flex', justifyContent: 'flex-end', }}>
            <Button style={{ backgroundColor: 'black', color: 'white', marginLeft: '20px' }}>Blog</Button>
            <Button style={{ backgroundColor: 'black', color: 'white' }} href='https://www.instagram.com/val12.ig/'>Instagram</Button>
            <Button style={{ backgroundColor: 'black', color: 'white' }} href='https://www.linkedin.com/in/varot-pavaritpong/'>LinkedIn</Button>
            <Button style={{ backgroundColor: 'black', color: 'white' }} href = 'https://github.com/VarotP'>GitHub</Button>
          </Container>
        </Toolbar>
      </AppBar>

      <Container>
        <Typography style={{fontFamily: 'Satoshi', fontSize: '48px'}}>Projects</Typography>
        <Box sx={{display: 'inline-flex', flexDirection: 'column'}}>
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
      
    </main>
  )
}
