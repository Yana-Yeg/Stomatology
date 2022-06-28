import { useState } from "react";
import style from "./Prices.module.scss";
import Icons from "../../../images/sprite.svg";

const ListItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlerClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li className={style.parentListItem}>
      <p onClick={() => handlerClick()} className={style.title}>
        {props.title}
        <span>
          <svg className={style.iconClose}>
            <use xlinkHref={`${Icons}#icon-arrow`} />
          </svg>
        </span>
      </p>
      <div className={`${style.innerList} ${isOpen ? style.open : ""}`}>
        <ul>
          {props.list.map((item) => (
            <li key={item.length} style={{ display: "block" }}>
              <span>
                <svg className={style.icon}>
                  <use xlinkHref={`${Icons}#icon-pushpin`} />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p>{props.message}</p>
      </div>
    </li>
  );
};

export default ListItem;
