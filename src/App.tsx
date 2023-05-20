import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import Layout from './module/layout/Layout';
import { theme } from './utils/Utils';

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}