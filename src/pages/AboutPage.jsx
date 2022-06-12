import Contacts from "../components/--about/Contacts/Contacts";
import Form from "../components/--about/Form/Form";

const AboutPage = () => {
  return (
    <div className="container">
      <div className="aboutpage_wrapper">
        <Form />
        <Contacts />
      </div>
    </div>
  );
};

export default AboutPage;
