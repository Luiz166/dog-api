import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import axios from 'axios'
import { Box, Container, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './Home.css';
import TextField from '@mui/material/TextField';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const Home = () => {
  const [dogs, setDogs] = useState([]);
  const [numberOfImages, setNumberOfImages] = useState('');

  const handleChange = (e) => {
    setNumberOfImages(e.target.value);
    console.log(numberOfImages);
  }

  const getDogs = () => {
    axios
      .get(`https://dog.ceo/api/breeds/image/random/${numberOfImages}`)
      .then((res) => setDogs(res.data.message))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getDogs();
  }, [numberOfImages]);


  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <div className="container">

          <Box className="form"
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
            <TextField fullWidth label="Number of images, max: 50" id="inputImages" onChange={handleChange} />
          </Box>
          <Container maxWidth='xl'>
            <Grid container>
              {dogs.map((dog) => (
                <Grid item xs={3}>
                  <img id='image' src={`${dog}`} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Home