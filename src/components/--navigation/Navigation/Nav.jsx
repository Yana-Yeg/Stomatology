import { Outlet } from "react-router-dom";
import CustomeLink from "../CustomeLink/CustomeLink";
import style from "./Nav.module.css";
import tooth from "../../../images/icon-tooth.png";
// import Icons from "../../../images/sprite.svg";

const Nav = () => {
  return (
    <>
      <header>
        <CustomeLink to="/">Home</CustomeLink>
        <CustomeLink to="/posts">Posts</CustomeLink>
        <CustomeLink to="/about">About</CustomeLink>
      </header>

      <main className={style.container}>
        <Outlet />
      </main>

      <footer className={style.container}>
        <div>
          {/* <div className={style.field}></div> */}
          <img src={tooth} alt="" className={style.tooth} />
          <p>&copy; 2022 | My project | Developed by Yana Yegorina</p>
        </div>
      </footer>
    </>
  );
};

export default Nav;
