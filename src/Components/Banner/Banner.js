import { makeStyles } from 'tss-react/mui'
import { Container } from '@mui/system';
import React from 'react'
import { Typography } from '@mui/material';
import Carousel from './Carousel';

const useStyles = makeStyles()(() => ({
    banner: {
        backgroundImage: "url(./bg_img1.jpg)",
        width: "100vw"
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around"
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    }
}))

const Banner = () => {

    const { classes } = useStyles();

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography variant="h2"
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat"
                        }}>
                        Crypto Tracker
                    </Typography>

                    <Typography variant="subtitle2"
                        style={{
                            color: "darkgrey",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat"
                        }}>
                        Get all the info regarding your all favourite Crypto Coins
                    </Typography>
                </div>
                <Carousel />
            </Container>
        </div>
    )
}

export default Banner