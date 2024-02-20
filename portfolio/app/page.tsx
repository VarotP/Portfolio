import { Button, Container, AppBar, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Typography style={{fontFamily: 'Satoshi', fontSize: '64px'}}>Varot Pavaritpong's Portfolio</Typography>
      <AppBar style={{backgroundColor: 'purple'}}>
        <Toolbar>
          <Container style={{ display: 'flex', justifyContent: 'flex-end', }}>
            <Button style={{ backgroundColor: 'black', color: 'white' }}>Projects</Button>
            <Button style={{ backgroundColor: 'black', color: 'white', marginLeft: '20px' }}>Blog</Button>
          </Container>
        
      
        </Toolbar>
      </AppBar>
      
    </main>
  )
}
