import { useState } from "react";
import style from "./Prices.module.scss";

const ListItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlerClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li className={style.parentListItem}>
      <p onClick={() => handlerClick()}>{props.title}</p>
      <div className={`${style.innerList} ${isOpen ? style.open : ""}`}>
        <ul>
          {props.list.map((item) => (
            <li key={item.length} style={{ display: "block" }}>
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
