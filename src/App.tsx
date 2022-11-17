import React from 'react';
import { GlobalStyles } from './styles/global';
import AppRoutes from './routes/app.routes';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
