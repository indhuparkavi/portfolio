import { Box, Card, Grid, Typography } from '@mui/material';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import styles from './Home.module.css';
import { portfolioInfo } from './portfolioData';

export const About = () => {
    return (
        <Box className={styles.box} id="about">
            <Typography variant='h6'>
                <Fade left>
                    ABOUT
                </Fade>
            </Typography>
            <Typography variant='h2'>
                <Fade left>
                    WHO AM I?
                </Fade>
            </Typography>
            <Typography variant='h3' mt={4} mb={4}>
                <b style={{ color: 'black' }}>
                    Hi I'm {portfolioInfo.name}.</b> {portfolioInfo?.about?.description}
            </Typography>
            <Grid container>
                {portfolioInfo?.about?.skills?.map((el, ind) => {
                    return (
                        <Grid item xs={12} md={6} lg={3} key={ind}>
                            <Fade right>
                                <Card className={ind === 0 ? styles.skillsCard1 : (ind === 1 ? styles.skillsCard2 : (ind === 2 ? styles.skillsCard3 : styles.skillsCard4))}>
                                    {el?.icon}
                                    <Typography variant='subtitle2'>
                                        {el?.name}
                                    </Typography>
                                </Card>
                            </Fade>
                        </Grid>
                    )
                })}
            </Grid>
            <Fade bottom>
                <Card className={styles.projects}>
                    <Typography variant='h5' m={0} p={0}>
                        I am happy to know you that +{portfolioInfo?.about?.project} projects done sucessfully!
                    </Typography>
                </Card>
            </Fade>
        </Box>
    )
}

