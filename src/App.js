import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./api/store";
import { sagaMiddleware } from "./api/store";
import rootSaga from "./api/rootSaga";
import Box from "./components/Box";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Footer from "./components/Footer/Footer";
// import "./App.css";

sagaMiddleware.run(rootSaga);

let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Box>
          <Router>
            <Header />
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </Router>
        </Box>
        <Footer />
      </PersistGate>
    </Provider>
  );
}

export default App;
