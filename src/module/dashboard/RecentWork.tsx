import { Box, Grid, Typography } from '@mui/material';
import styles from './Home.module.css';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { portfolioInfo } from './portfolioData';

export const Work = () => {
  return (
    <Box className={styles.box} id="work">
      <Typography variant="h6">
        <Fade left>
          WORK
        </Fade>
      </Typography>
      <Typography variant='h2'>
        <Fade left>
          RECENT WORK
        </Fade>
      </Typography>
      <Grid container style={{ marginTop: '20px' }}>
        {portfolioInfo?.work?.map((el, ind) => {
          return (
            <Grid item xs={12} md={4} lg={4} key={ind} m={0} p={0}>
              <div className={styles.card}>
                <div className={styles.folio1}>
                  <div className={styles.folio_text}>
                    <Typography variant='h4' ml={10} mt={0} color='#fff'>
                      {el?.app}
                    </Typography>
                    <Typography variant='subtitle1' ml={10} mt={0} style={{ fontWeight: 900 }}>
                      {el?.name}
                    </Typography>
                    <Typography variant='subtitle2' ml={10} mt={0}>
                      {el?.describe}
                    </Typography>
                  </div>
                  <div className={styles.folio_img}>
                    <img
                      src={el?.url}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};