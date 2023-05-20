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
          <Typography variant='h2' mb={2}>
            WORK EXPERIENCE
          </Typography>
        </Fade>
      </Box>
      <div style={{ marginLeft: '30px' }}>
        {portfolioInfo?.experience?.map((el, index) => {
          return (
            <div key={index}>
              <Typography variant='h3' fontWeight={700} fontSize={18}>
                {el.name}
              </Typography>
              {el.jobResponsibilies?.map(item => (
                <Typography variant='h4'>{item.name}</Typography>
              )
              )}
              <Timeline >
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
                            <Typography variant='subtitle2'>
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
              <div>
                {el.technicalExperiences?.map((item, index) => (
                  <Typography variant='h4' key={index}>{item.name}</Typography>
                )
                )}
                <List style={{ margin: 0 }}>
                  {el.technicalExperiences?.map(item => item.details?.map((el, index) => {
                    return (
                      <ListItem style={{ textDecoration: 'none', color: '#000', cursor: 'default' }} key={index}>
                        <ListItemIcon style={{ minWidth: '30px' }}>
                          <Star style={{ color: '#4C99F0', fontSize: 12 }} />
                        </ ListItemIcon>
                        <ListItemText >
                          <Typography variant='subtitle2' >
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
    </div>
  )
}
