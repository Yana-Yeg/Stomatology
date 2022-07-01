import Icons from "../images/sprite.svg";

const xrayList = [
  "one tooth - 30 PLN",
  "panoramic - 100 PLN",
  "side heads / cephalometric - 100 PLN",
  "orthodontic package pano + cefalo - 150 PLN",
];

const PricesXrayPage = () => {
  return (
    <div className="container">
      <h1 className="prices_title">X-ray / panoramic images</h1>
      <span className="prices_line"></span>
      <div>
        <ul className="prices_list">
          {xrayList.map((item) => (
            <li key={item.length} className="prices_listItem">
              <span>
                <svg className="prices_icon">
                  <use xlinkHref={`${Icons}#icon-pushpin`} />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="prices_disc">
        `These prices are indicative, not mandatory and are not an offer within
        the meaning of Art. 66 § 1 CC. The final cost is determined during a
        medical consultation and the creation of an individual treatment plan.`
      </p>
    </div>
  );
};

export default PricesXrayPage;
