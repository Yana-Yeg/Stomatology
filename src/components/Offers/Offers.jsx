import general from "../../images/offers/general.png";
import kids from "../../images/offers/kids.png";
import orto from "../../images/offers/orto.png";
import rent from "../../images/offers/rent.png";
import prot from "../../images/offers/prot.png";
import root from "../../images/offers/root.png";
import impl from "../../images/offers/impl.png";
import style from "./Offers.module.scss";

const Offers = () => {
  return (
    <div className="container">
      <h1>Our offer</h1>
      <ul>
        <li className={style.item}>
          <img
            src={general}
            className={style.img}
            width={60}
            height={60}
            alt=""
          />
          <div>
            <h2>General dentistry</h2>
            <p className={style.text}>
              For the manufacture of fillings, we use the most modern materials
              on the market.
            </p>
          </div>
        </li>
        <li className={style.item}>
          <img src={kids} className={style.img} alt="" />
          <div>
            <h2>Children's dentistry</h2>
            <p className={style.text}>
              Individual approach to small patients, patience, reward system. We
              focus on acquiring good habits that will pay off in the future.
            </p>
          </div>
        </li>
        <li className={style.item}>
          <img src={orto} className={style.img} width={60} height={60} alt="" />
          <div>
            <h2>Orthodontics</h2>
            <p className={style.text}>
              Experience at the Medical University allows us to help patients
              with severe malocclusion.
            </p>
          </div>
        </li>
        <li className={style.item}>
          <img src={rent} className={style.img} width={60} height={60} alt="" />
          <div>
            <h2>x-ray</h2>
            <p className={style.text}>
              Мы делаем 3 вида фотографий: панорамное фото всего зубного ряда,
              боковых головок и фото отдельных зубов.
            </p>
          </div>
        </li>
        <li className={style.item}>
          <img src={prot} className={style.img} width={60} height={60} alt="" />
          <div>
            <h2>Prosthetics</h2>
            <p className={style.text}>
              We offer many types of prosthetic work, from porcelain to
              all-ceramic. Collaboration with a dental technician allows you to
              achieve the perfect combination of colors. The best work is an
              invisible work, identical to the patient's own teeth.
            </p>
          </div>
        </li>
        <li className={style.item}>
          <img src={root} className={style.img} width={60} height={60} alt="" />
          <div>
            <h2>Endodontics / Root Canal Treatment</h2>
            <p className={style.text}>
              Working under magnification, using an endodontic micromotor,
              together with the precision and perseverance of our doctors, is
              the guarantee of the most accurate filling of the root canal
              system. On-site inspection with x-rays.
            </p>
          </div>
        </li>
        <li className={style.item}>
          <img src={impl} className={style.img} width={60} height={60} alt="" />
          <div>
            <h2>Surgery / Implantology</h2>
            <p className={style.text}>
              Выполняем все виды хирургических вмешательств с имплантатами.
              Многолетний опыт работы в отделении челюстно-лицевой хирургии,
              самоконтроль и твердая рука гарантируют безопасность процедуры.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Offers;
