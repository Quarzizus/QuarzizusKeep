import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login } from "../pages/auth";
import { lazy, Suspense } from "react";
import { ContextProvider } from "../context/ContextProvider";

const Home = lazy(() => import("../pages/home"));
const App = (): JSX.Element => {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <BrowserRouter>
          <ContextProvider>
            <Routes>
              <Route index element={<Login />} />
              <Route path="home" element={<Home />} />
            </Routes>
          </ContextProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export { App };
