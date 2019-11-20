import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NetworkErrorBoundary } from "rest-hooks";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, useTheme } from "@urkellabs/ucl";

// Screens
import Home from "screens/Home";

// Components
import ContentContainer from "components/layout/ContentContainer";
// import Footer from "components/layout/Footer";
import Navigation from "components/layout/Navigation";

// Internationalization
import "../i18n/i18n";

function App() {
  const [theme] = useTheme();
  return (
    <NetworkErrorBoundary>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Router>
            <Navigation />
            <ContentContainer>
              <Switch>
                <Route path="/" exact component={Home} />
              </Switch>
            </ContentContainer>
            {/* <Footer /> */}
          </Router>
        </>
      </ThemeProvider>
    </NetworkErrorBoundary>
  );
}

export default App;
