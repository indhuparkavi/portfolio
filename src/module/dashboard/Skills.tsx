import { Box, Card, Grid, Typography } from '@mui/material';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import styles from './Home.module.css';
import { portfolioInfo } from './portfolioData';
import { Parallax } from 'react-parallax';


export const Skills = () => {

  return (
    <Box id="skills">
      <Box className={styles.box}>
        <Typography variant='h6'>
          <Fade left>
            MY SPECIALTY
          </Fade>
        </Typography>
        <Typography variant='h2'>
          <Fade left>
            MY SKILLS
          </Fade>
        </Typography>
        <Typography variant="h2" >
          Langauage
        </Typography>
        <Grid container>
          {portfolioInfo?.skills?.language.map((el, index) => {
            return (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <Fade bottom>
                  <Card className={styles.skillsCard}>
                    <Typography variant='subtitle2' >
                      {el?.name}
                    </Typography>
                    <img src={el?.url} alt="Logo" />
                  </Card>
                </Fade>
              </Grid>
            )
          })}
        </Grid>
        <Typography variant="h2">
          Library
        </Typography>
        <Grid container>
          {portfolioInfo?.skills?.library?.map((el, index) => {
            return (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <Fade bottom>
                  <Card className={styles.skillsCard}>
                    <Typography variant='subtitle2'>
                      {el?.name}
                    </Typography>
                    <img src={el?.url} alt="Logo" />
                  </Card>
                </Fade>
              </Grid>
            )
          })}
        </Grid>
        <Typography variant="h2">
          Tools
        </Typography>
        <Grid container>
          {portfolioInfo?.skills?.tools?.map((el, index) => {
            return (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <Fade bottom>
                  <Card className={styles.skillsCard}>
                    <Typography variant='subtitle2' >
                      {el?.name}
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {el?.list.map((item, index) => (
                        <div style={{ padding: '0 10%' }} key={index}>
                          <img src={item?.url} style={{ objectFit: 'cover' }} alt="Logo" />
                        </div>
                      ))
                      }
                    </div>
                  </Card>
                </Fade>
              </Grid>
            )
          })}
        </Grid>
      </Box>
      <div style={{ marginTop: 50, marginBottom: 50, minWidth: '320px' }}>
        <Parallax
          bgImage={require('../../assets/images/parallax.jpg')}
          strength={-300}
        >
          <Grid container style={{
            marginTop: '100px'
          }}>
            {portfolioInfo?.skills?.otherLibrary?.map((el, index) => {
              return (
                <Grid item xs={6} md={3} lg={1.5} style={{ textAlign: 'center' }} key={index}>
                  <img src={el} className={styles.library} alt="Logo" />
                </Grid>
              )
            })}
          </Grid>
          <div style={{ height: '100px' }} />
        </Parallax>
      </div>
    </Box>
  )
}



