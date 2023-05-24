// @ts-ignore
import { Typography } from "@mui/material";
// @ts-ignore
import Fade from 'react-reveal/Fade';
import styles from './Home.module.css';
import { portfolioInfo } from "./portfolioData";

export default function Home() {
  return (
    <div className={styles.home} id="home" data-section>
      <div className={styles.portfolioheader}>
        <Fade left>
          <Typography variant="h1" className={styles.portfolioheaderText}>
            {portfolioInfo.name}
            <br />
            {portfolioInfo.designation}
          </Typography>
        </Fade>
      </div>
    </div>
  )
}
