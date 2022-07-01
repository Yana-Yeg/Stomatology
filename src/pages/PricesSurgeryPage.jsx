import Icons from "../images/sprite.svg";

const surgeryList = [
  "surgical consultation - 200 PLN",
  "tooth extraction - 300-400 PLN",
  "difficult tooth removal (root separation) - 400-500 PLN",
  "surgical removal of the tooth (with the manufacture of a flap, suturing) - 500-700 PLN",
  "Surgical removal of a wisdom tooth - 400-800 PLN",
  "surgical removal of the retinal tooth 650-1000 PLN",
  "suture-surgical bandage - 100 PLN",
  "incision of the abscess - 200 PLN",
  "enucleation of the cyst - 400-1000 PLN",
  "hemisection - 300 PLN",
  "surgical closure of the orosinus fistula 300-500 PLN",
  "lifting of the maxillary sinus - 3000 PLN",
  "bone reconstruction (preparation for bone replacement) 2000-2500 PLN",
  "pocket cutting - 200 PLN",
  "removal of the focus on the oral mucosa (including histopathological examination) 200-500 PLN",
  "resection of 1-3 teeth - 700 PLN",
  "tooth resection 4-7 600-1000 PLN",
  "bridle trimming - 300 PLN",
  "surgical lengthening of the crown (1 tooth) - 250-300 PLN",
  "implant placement (the price includes the opening of the implant after the integration period) - 3600 PLN",
];

const PricesSurgeryPage = () => {
  return (
    <div className="container">
      <h1 className="prices_title">Surgery / implantology</h1>
      <span className="prices_line"></span>
      <div>
        <ul className="prices_list">
          {surgeryList.map((item) => (
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
        Anesthesia is included in the cost of procedures. `These prices are
        indicative, optional and are not an offer within the meaning of the
        first part of Article 66 of the Civil Code. The final cost is determined
        during a medical consultation and an individual treatment plan.`
      </p>
    </div>
  );
};

export default PricesSurgeryPage;
