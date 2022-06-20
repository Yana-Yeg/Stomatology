import CustomeLink from "../../CustomeLink/CustomeLink";
import style from "./Header.module.scss";
import tooth from "../../../../images/icon-tooth.png";
import Icons from "../../../../images/sprite.svg";
import { useState } from "react";
import NavMob from "../NavMob";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };
  const [value, setValue] = useState("");

  function chengeSelect(e) {
    setValue(e.target.value);
  }

  return (
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
            {/* <CustomeLink to="/posts"> */}
            {/* Posts */}
            <select value={value} onChange={chengeSelect}>
              <option>Posts</option>
              <option>
                <CustomeLink to="/new1">New1</CustomeLink>
              </option>
              <option>
                <CustomeLink to="/new2">New2</CustomeLink>
              </option>
              <option>
                <CustomeLink to="/new3">New3</CustomeLink>
              </option>
              <option>
                <CustomeLink to="/new4">New4</CustomeLink>
              </option>
            </select>
            {/* </CustomeLink> */}
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
  );
};

export default Header;
