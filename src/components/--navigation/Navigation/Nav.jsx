import { Outlet } from "react-router-dom";
import CustomeLink from "../CustomeLink/CustomeLink";
import style from "./Nav.module.scss";
import tooth from "../../../images/icon-tooth.png";
import Icons from "../../../images/sprite.svg";
import { useState } from "react";
import NavMob from "./NavMob";

const Nav = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

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
            {/* className={style.Section1 + " " + style.Section2} */}

            <button
              type="button"
              onClick={() => toggleModal()}
              className={style.btn_menu}
            >
              <svg className={style.icon_menu} width={32} height={32}>
                <use xlinkHref={`${Icons}#icon-Burger`} />
              </svg>
            </button>

            {isOpenModal && (
              <div className={style.link_panel}>
                <NavMob isOpenModal={isOpenModal} handleClose={toggleModal} />
              </div>
            )}
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
