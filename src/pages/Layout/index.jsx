import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import Header from "../../organism/Header";

const Layout = (props) => {
  return (
    <main>
      {/* A "layout route" is a good place to put markup you want to
      share across all the pages on your site, like navigation. */}
      <Header />

      {/* An <Outlet> renders whatever child route is currently active,
      so you can think about this <Outlet> as a placeholder for
      the child routes we defined above. */}
      <Outlet />
    </main>
  );
};

export default Layout;
