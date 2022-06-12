import { Outlet } from "react-router-dom";
import CustomeLink from "../CustomeLink/CustomeLink";
import style from "./Nav.module.css";
import tooth from "../../../images/icon-tooth.png";
// import Icons from "../../../images/sprite.svg";

const Nav = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className={style.flex}>
            <div className={style.flex}>
              <a href="" className={style.link_logo}>
                <img src={tooth} alt="" className={style.header_tooth} />
                <p className={style.text_logo}>Your dantist</p>
              </a>
            </div>
            <div className={style.link_wrapper}>
              <CustomeLink to="/">Home</CustomeLink>
              <CustomeLink to="/posts">Posts</CustomeLink>
              <CustomeLink to="/about">About</CustomeLink>
            </div>
          </div>
        </div>
      </header>

      <main className={style.container}>
        <Outlet />
      </main>

      <footer className={style.container_footer}>
        <div className={style.footer_wrapper}>
          {/* <img src={tooth} alt="" className={style.tooth} /> */}
          <p>&copy; 2022 | My project | Developed by Yana Yegorina</p>
        </div>
      </footer>
    </>
  );
};

export default Nav;
