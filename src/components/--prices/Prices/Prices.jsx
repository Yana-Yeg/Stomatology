import { useState } from "react";
import Big_tooth from "../../../images/big-tooth.jpeg";
import GeneralDentistry from "./offer item/GeneralDentistry";
import Prevention from "./offer item/Prevention";
import style from "./Prices.module.scss";

const Prices = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleModal = () => {
  //   setIsOpen((prev) => !prev);
  // };
  const open = (e) => {
    console.log("e.target :>> ", e.target);
    if (e.target.tagName === "BUTTON") {
      e.target.classList.toggle("checked");
    }
  };

  return (
    <div className={style.wrap}>
      <div>
        <ul>
          <li className={style.wrapper} onClick={(e) => open(e)}>
            {/* <button className={style.btn} onClick={() => toggleModal()}>
              General dentistry
            </button> */}
            <button className={style.button}>hfshb</button>

            <p className={style.desctiption}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              ipsam ipsum recusandae asperiores tempora iusto minus et optio
              eius, non dolores consequatur autem laborum quo eligendi! Cumque
              velit eaque veritatis!
            </p>
            {/* {isOpen && <GeneralDentistry style={style} />} */}
          </li>
          {/* <li>
            <button className={style.btn} onClick={() => toggleModal()}>
              Prevention
            </button>
            {isOpen && <Prevention style={style} />}
          </li> */}
        </ul>
      </div>
      <img src={Big_tooth} alt="" />
    </div>
  );
};

export default Prices;
