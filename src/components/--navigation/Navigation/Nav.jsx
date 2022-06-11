import { Outlet } from "react-router-dom";
import CustomeLink from "../CustomeLink/CustomeLink";
import style from "./Nav.module.css";
import tooth from "../../../images/icon-tooth.png";
// import Icons from "../../../images/sprite.svg";

const Nav = () => {
  return (
    <>
      <header className={style.flex}>
        <div className={style.flex}>
          <a href="" className={style.link_logo}>
            <img src={tooth} alt="" className={style.header_tooth} />
            <p className={style.text_logo}>Your dantist</p>
          </a>
        </div>
        <span className={style.line}></span>
        <div className={style.link_wrapper}>
          <CustomeLink to="/">Home</CustomeLink>
          <CustomeLink to="/posts">Posts</CustomeLink>
          <CustomeLink to="/about">About</CustomeLink>
        </div>
      </header>

      <main className={style.container}>
        <Outlet />
      </main>

      <footer className={style.container_footer}>
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
