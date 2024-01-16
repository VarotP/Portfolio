import { Button, Container } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Varot Pavaritpong's Portfolio</h1>
      <Container>
        <Button>Home</Button>
        <Button>Projects</Button>
        <Button>Blog</Button>
        <Button>Games</Button>
        <Button>Contact</Button>
      </Container>
    </main>
  )
}
