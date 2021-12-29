import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login } from "../pages/auth";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/home"));
const App = (): JSX.Element => {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export { App };
