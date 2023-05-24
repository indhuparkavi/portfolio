import { Box, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import styles from './Home.module.css';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { portfolioInfo } from './portfolioData';



export const Education = () => {
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box className={styles.box} id="education" mt={'80px'}>
      <Fade left>
        <Typography variant="h6">
          EDUCATION
        </Typography>
      </Fade>
      <Fade left>
        <Typography variant='h2'>
          EDUCATION
        </Typography>
      </Fade>
      <div style={{ marginTop: '20px' }}>
        {portfolioInfo?.education.map((el, index) => {
          return (
            <Accordion expanded={expanded === index} onChange={handleChange(index)} key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography variant='subtitle1' color='#000' className={styles.education}>
                  {el?.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ backgroundColor: '#F2F3F7' }}
              >
                <Typography variant='subtitle1' className={styles.education}>
                  {el?.institution}
                </Typography>
                <Typography variant='h3' className={styles.education}>
                  {el?.loctaion}
                </Typography>
                <Typography variant='h3' className={styles.education}>
                  Scored:  {el?.score}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </div>
    </Box>
  )
}
