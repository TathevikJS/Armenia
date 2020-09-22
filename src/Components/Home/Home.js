import React from 'react';
import Auth from './Auth/Auth';
import About from './About/About';
import NewsFeed from './NewsFeed/NewsFeed';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './theme';
import Background from '../../images/home-bg.jpg';
import './Home.css'


const Home = () => {
    return (
        <div className='Home' style={{backgroundImage: "url(" + Background +")"}}>
            <div className="container">
                <About />
                <ThemeProvider theme={theme}>
                    <Auth />
                </ThemeProvider>
            </div>
            <NewsFeed />
        </div>
    );
}

export default Home;