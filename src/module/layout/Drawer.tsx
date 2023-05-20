import { Close } from "@mui/icons-material";
import { Box, List, ListItem, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { useState } from "react";
import { Link } from 'react-scroll';
import BG from '../../assets/images/bg.jpg';
import Profile from '../../assets/images/profile.jpg';
import styles from '../dashboard/Home.module.css';
import { drawer } from "../dashboard/portfolioData";

export default function DrawerList({ setMobileOpen }: any) {
  const [style, setStyle] = useState(0)

  function onClick(index: number) {
    setStyle(index);
    setMobileOpen(false)
  }
  function handleClose() {
    setMobileOpen(false)
  }

  return (
    <List sx={{ backgroundImage: `url(${BG}) !important`, backgroundSize: 'cover', height: '100vh' }}>
      <Box sx={{ display: { sm: 'none' }, float: 'right', paddingRight: '10px' }}>
        {/* <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClose}
          style={{  }}
        > */}
        <Close onClick={handleClose} />
        {/* </motion.div> */}
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
              <Link to={list?.scroll} spy={true} smooth={true} onClick={() => onClick(index)}>
                <Typography variant='h4' className={style === index ? (styles.blue) : (styles.black)}>
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
      </ListItem>
    </List >
  )
}