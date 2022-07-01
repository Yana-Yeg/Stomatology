import CustomeLink from "../CustomeLink/CustomeLink";
import Icons from "../../../images/sprite.svg";
import style from "./NavMob.module.scss";

const NavMob = ({ isOpenModal, handleClose }) => {
  return (
    <div className={style.wrap}>
      <button type="button" onClick={handleClose} className={style.btn_close}>
        <svg className={style.icon_close} width="14" height="14">
          <use xlinkHref={`${Icons}#icon-close`} />
        </svg>
      </button>

      <div className={style.link_menu}>
        <ul>
          <li>
            <CustomeLink to="/">Home</CustomeLink>
          </li>
          <li>
            <CustomeLink to="/about">About</CustomeLink>
          </li>
          <li>
            <CustomeLink to="/offers">Offers</CustomeLink>
          </li>
          {/* <li>
            <CustomeLink to="/prices">Prices</CustomeLink>
          </li> */}
          <a className={style.parentListItem}>
            <p className={style.text}>Prices</p>
            <ul className={style.list}>
              <li className={style.innerList}>
                <CustomeLink to="/prices/general">General</CustomeLink>
              </li>
              <li className={style.innerList}>
                <CustomeLink to="/prices/prevention">Prevention</CustomeLink>
              </li>
              <li className={style.innerList}>
                <CustomeLink to="/prices/endodontics">Endodontics</CustomeLink>
              </li>
              <li className={style.innerList}>
                <CustomeLink to="/prices/orthodontics">
                  Orthodontics
                </CustomeLink>
              </li>
              <li className={style.innerList}>
                <CustomeLink to="/prices/surgery">Surgery</CustomeLink>
              </li>
              <li className={style.innerList}>
                <CustomeLink to="/prices/prosthetics">Prosthetics</CustomeLink>
              </li>
              <li className={style.innerList}>
                <CustomeLink to="/prices/children">Kid's dentistry</CustomeLink>
              </li>
              <li className={style.innerList}>
                <CustomeLink to="/prices/xray">X-ray</CustomeLink>
              </li>
            </ul>
          </a>
          <li>
            <CustomeLink to="/about">About</CustomeLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMob;
