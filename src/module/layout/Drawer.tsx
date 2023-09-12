import { Close, Download } from "@mui/icons-material";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-scroll';
import BG from '../../assets/images/bg.jpg';
import Profile from '../../assets/images/profile.jpg';
import styles from '../dashboard/Home.module.css';
import { drawer } from "../dashboard/portfolioData";
// @ts-ignore
import Resume from '../../assets/IndhuResume.pdf';

export default function DrawerList({ setMobileOpen }: any) {

  function onClick(index: number) {
    setMobileOpen(false)
  }
  function handleClose() {
    setMobileOpen(false)
  }

  return (
    <List sx={{ backgroundImage: `url(${BG}) !important`, backgroundSize: 'cover', height: '100vh' }}>
      <Box sx={{ display: { sm: 'none' }, float: 'right', paddingRight: '10px' }}>
        <Close onClick={handleClose} />
      </Box>
      <Avatar style={{ marginTop: 10, width: '150px', height: '150px' }} alt="avatar" src={Profile} />
      <Box style={{ textAlign: 'center', marginTop: '10px' }}>
        <Typography variant="h4">
          B.Indhu Parkavi
        </Typography>
        <Typography component="span" color="secondary" variant="h4">
          React JS Developer
        </Typography>
      </Box>
      {
        drawer.map((list, index) => {
          return (
            <ListItem key={index}>
              <Link to={list?.scroll} spy={true} smooth={true} onClick={() => onClick(index)} activeClass={styles.blue}>
                <Typography variant='h4'>
                  {list?.name}
                </Typography>
              </Link>
            </ListItem>
          )
        })
      }
      <ListItem style={{ textAlign: 'center' }}>
        <Typography style={{ fontSize: 13 }}>
          <i>parkaviindhu90@gmail.com</i>
          <br />
          8807742115
        </Typography>
        <br />
        <br />
      </ListItem>
      <ListItem >
        <div className={`${styles.button}`} style={{ width: '150px' }}>
          <Button type='submit' className={styles.buttonTheme} style={{ width: '150px' }} onClick={handleClose}> 
            <a href={Resume} download style={{ textDecoration: 'none', width: '100%' }}>
              Resume <Download style={{ marginBottom: '-8px' }} />
            </a>
          </Button>
        </div>
      </ListItem>
    </List >
  )
}