import { useState } from "react";
import Big_tooth from "../../../images/big-tooth.jpeg";
import GeneralDentistry from "./offer item/GeneralDentistry";
import Prevention from "./offer item/Prevention";
import style from "./Prices.module.scss";

const Prices = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={style.wrap}>
      <div>
        <ul>
          <li>
            <button className={style.btn} onClick={() => toggleModal()}>
              General dentistry
            </button>
            {isOpen && <GeneralDentistry style={style} />}
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
