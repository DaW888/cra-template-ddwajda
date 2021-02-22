import React from 'react';
import Main from './Views/Main/Main';
import GlobalStyles from './Style/Global/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { light } from './CONSTS/THEMES';

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  );
};

export default App;
