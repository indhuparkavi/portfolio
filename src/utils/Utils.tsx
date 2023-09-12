import { cyan, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: cyan[800],
      contrastText: '#000',
    },
    secondary: {
      main: "#4C99F0",
      light: 'rgb(76,143,203)',
      contrastText: '#444',
    },
    info: {
      main: 'rgb(142, 203, 76)',
    },
    warning: {
      main: 'rgb(207, 142, 39)',
    },
    error: {
      main: 'rgb(203,101,76)',
    },
    background: {
      default: '#F2F3F7',
    }
  },
  typography: {
    fontSize: 12,
    h1: {
      fontSize: 50,
      color: '#fff',
    },
    h5: {
      fontSize: 30,
      color: '#000',
      margin: '40px 30px',
      [`@media query and screen(max-width: 768px)`]: {
        fontSize: 10,
      },
    },
    h2: {
      fontSize: 20,
      paddingTop: 20,
      paddingBottom: 20,
      fontWeight: 800,
      letterSpacing: 5,
      color: '#444'
    },
    h3: {
      fontSize: 15,
      lineHeight: 1.9,
      color: grey[600],
    },
    h4: {
      fontSize: 17,
      lineHeight:'30px'
    },
    h6: {
      fontSize: 10,
      color: grey[500],
      letterSpacing: 5,
    },
    body1: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    body2: {
      fontSize: 13,
      letterSpacing: 3,
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: 13,
    }
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        root: {
          color: '#000',
          backgroundColor: '#F2F3F7',
          minHeight: '100%'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: cyan[500],
          color: 'white',
          width: '50%',
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#000'
        }
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          color: '#fff',
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          margin: 20,
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          margin: 'auto',
          width: 180,
          height: 180
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 8,
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          color: grey[700],
          // ":hover": {
          //   color: '#4C99F0',
          //   textDecoration: 'underline',
          // }
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: '#F2F3F7'
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          margin: 0,
          justifyContent: 'left',
          alignItems: 'left'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          marginBottom: 10,
          heigh: 20,
          padding: 0,
          fontSize: 13
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        h5: {
          padding: '10px',
          [`@media query and screen(max-width: 1500px)`]: {
            fontSize: '8px',
          },
        },
      },
    },
  },

});

























