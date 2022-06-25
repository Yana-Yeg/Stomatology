import Big_tooth from "../../../images/big-tooth.jpeg";
import style from "./Prices.module.scss";

const Prices = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <p>General dentistry</p>
            <ul className={style.list}>
              <li>filling of light hardening - PLN 220-320</li>
              <li>
                large-scale reconstruction (after, but with a canal) - 270-370
                zlotys
              </li>
              <li>reconstruction with the use of fiberglass - 370 zlotys</li>
              <li>direct composite veneer - 350 zlotys</li>
              <li>therapeutic bandage - 160 zlotys</li>
              <li>overhead bleaching - 1000 zlotys</li>
              <li>
                whitening of dead teeth: the first visa - 180 zlotys, the next -
                120 zlotys
              </li>
            </ul>
            <p>
              anesthesia is included in the cost of procedures "These prices are
              indicative, optional and are not an offer within the meaning of
              the first part of Article 66 of the Civil Code. The final cost is
              determined during a medical consultation and an individual
              treatment plan.
            </p>
          </li>
        </ul>
      </div>
      <img src={Big_tooth} alt="" />
    </div>
  );
};

export default Prices;