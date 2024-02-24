import { Container, Typography, AppBar, Toolbar, Button, Box, Card } from '@mui/material';
import ProjectCard from './projectCard';


const Home = () => {
    return (
        <div>
          <Container sx={{display: 'inline-flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Container sx={{marginBlock: '256px'}}>
            <Typography style={{ fontFamily: 'Satoshi', fontSize: '64px' }}>Varot Pavaritpong</Typography>
            <Typography style={{ fontFamily: 'Satoshi', fontSize: '28px' }}>I code and make stuff</Typography>
            <Typography style={{ fontFamily: 'Satoshi', fontSize: '16px' }}>but also a UBC CS student</Typography>
          </Container>

          <Container>
            <Typography style={{ fontFamily: 'Satoshi', fontSize: '48px' }} gutterBottom>Projects</Typography>
              <Box sx={{ display: 'inline-flex', flexDirection: 'column', justifyContent: 'space-evenly', minHeight: '1000px'}}>
                <Box sx={{ display: 'inline-flex', justifyContent: 'space-evenly', minWidth: '1080px' }}>
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
                </Box>
                <Box sx={{ display: 'inline-flex', justifyContent: 'space-evenly', minWidth: '1080px'  }}>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                </Box>
                <Box sx={{ display: 'inline-flex', justifyContent: 'space-evenly', minWidth: '1080px'  }}>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                </Box>
              </Box>
            </Container>
          </Container>
         
          </div>
    );
};
export default Home;