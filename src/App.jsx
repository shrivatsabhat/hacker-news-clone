import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Posts from "./pages/Posts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/top" />} />

          <Route path="/:type" element={<Posts />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
