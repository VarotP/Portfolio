import { Button, Container, AppBar, Toolbar, Typography } from '@mui/material'
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
            <Button style={{ backgroundColor: 'black', color: 'white' }}>Instagram</Button>
            <Button style={{ backgroundColor: 'black', color: 'white' }}>LinkedIn</Button>
            <Button style={{ backgroundColor: 'black', color: 'white' }}>Email</Button>
          </Container>
        </Toolbar>
      </AppBar>

      <Container>
        <Typography style={{fontFamily: 'Satoshi', fontSize: '48px'}}>Projects</Typography>
      </Container>
      
    </main>
  )
}
