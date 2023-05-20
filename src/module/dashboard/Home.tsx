// @ts-ignore
import { Typography } from "@mui/material";
// @ts-ignore
import Fade from 'react-reveal/Fade';
import styles from './Home.module.css';
import { portfolioInfo } from "./portfolioData";

export default function Home() {
  return (
    <div className={styles.portfolioheader} id="home">
      <div className={styles.home}>
        <Fade left>
          <Typography variant="h1">
            {portfolioInfo.name}
            <br />
            {portfolioInfo.designation}
          </Typography>
        </Fade>
      </div>
    </div>
  )
}
