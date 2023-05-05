import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import axios from 'axios'
import { Container, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './Home.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const Home = () => {
    const [dogs, setDogs] = useState([]);

    const getDogs = () =>{
        axios
            .get('https://dog.ceo/api/breeds/image/random/12')
            .then((res) => setDogs(res.data.message))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getDogs();
    }, []);


  return (
    <div>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Navbar/>
            <Container maxWidth='xl'>
                <Grid container>
                {dogs.map((dog) => (
                    <Grid item xs={3}>
                        <img id='image' src={`${dog}`}/>
                    </Grid>
                ))}
                </Grid>
            </Container>
        </ThemeProvider>
    </div>
  )
}

export default Home