import styles from './Home.module.css';
import { Box, Card, Grid, Typography } from '@mui/material'
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
      <Typography variant='h2' mb={8}>
        <Fade left>
          RECENT WORK
        </Fade>
      </Typography>
      <Grid container>
        {portfolioInfo?.work?.map((el, ind) => {
          return (
            <Grid item xs={12} md={4} lg={4} key={ind}>
              <Card >
                <div className={styles.folio1}>
                  <div className={styles.folio_text}>
                    <Typography variant='subtitle1' ml={10} mt={0}>
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
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};