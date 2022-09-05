import { GlobalStyles } from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme";

import routes from "./routes";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Navbar />
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
        </Routes>
        {/* <div className="App">Hello World!!!</div> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
