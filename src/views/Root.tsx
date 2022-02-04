import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from '../components/organisms/NavBar/NavBar';
import MainBox from '../components/organisms/MainBox/MainBox';
import Services from '../components/organisms/Services/Services';
import Galery from '../components/organisms/Galery/Galery';
import Contact from '../components/organisms/Contact/Contact';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import { Wrapper } from './Root.style';

const Root: FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <MainBox />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route path="/galery">
              <Galery />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
