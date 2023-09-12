import { Star, Work } from '@mui/icons-material';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Box, Typography } from '@mui/material';
import styles from './Home.module.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { portfolioInfo } from './portfolioData';

export const Experience = () => {
  return (
    <div>
      <Box className={styles.box} id="experience">
        <Fade left>
          <Typography variant='h6'>
            EXPERIENCE
          </Typography>
        </Fade>
        <Fade left>
          <Typography variant='h2'>
            WORK EXPERIENCE
          </Typography>
        </Fade>
        <div >
          {portfolioInfo?.experience?.map((el, index) => {
            return (
              <div key={index} >
                <Typography variant='h3' fontWeight={700} fontSize={18} style={{ marginTop: '20px' }}>
                  {el.name}
                </Typography>
                {el.jobResponsibilies?.map(item => (
                  <Typography variant='h4' fontWeight={600}>{item.name}</Typography>
                )
                )}
                <Timeline className={`${styles.marginTopBottom} ${styles.marginLeft}`}>
                  {el.jobResponsibilies?.map(item => item.details?.map((el, index) => {
                    return (
                      <div key={index}>
                        <TimelineItem className={styles.root} style={{ minHeight: '40px !important' }}>
                          <TimelineSeparator style={{ height: '30px !important' }}>
                            {/* <div className={styles.hexagon}>
                          </div> */}
                            <Work style={{ color: '#4C99F0', fontSize: 12 }} />
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>
                            <div
                              style={{ marginTop: '-8px' }}
                            >
                              <Typography variant='h4' style={{paddingBottom:'10px'}}>
                                {el}
                              </Typography>
                            </div>
                          </TimelineContent>
                        </TimelineItem>
                      </div>
                    )
                  }))}
                  <TimelineDot sx={{ margin: 0, fontSize: 12 }} />
                </Timeline>
                <div style={{ marginTop: '20px' }}>
                  {el.technicalExperiences?.map((item, index) => (
                    <Typography variant='h4' fontWeight={600} key={index}>{item.name}</Typography>
                  )
                  )}
                  <List className={styles.marginLeft}>
                    {el.technicalExperiences?.map(item => item.details?.map((el, index) => {
                      return (
                        <ListItem style={{ textDecoration: 'none', color: '#000', cursor: 'default',padding:0 }} key={index}>
                          <ListItemIcon style={{ minWidth: '30px' }}>
                            <Star style={{ color: '#4C99F0', fontSize: 12 }} />
                          </ ListItemIcon>
                          <ListItemText >
                            <Typography variant='h4' >
                              {el}
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      )
                    }))}
                  </List>
                </div>
              </div>
            )
          })
          }
        </div>
      </Box>
    </div>
  )
}
