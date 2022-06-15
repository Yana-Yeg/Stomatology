import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.container_footer}>
      <div className={style.footer_wrapper}>
        {/* <img src={tooth} alt="" className={style.tooth} /> */}
        <p>&copy; 2022 | My project | Developed by Yana Yegorina</p>
      </div>
    </footer>
  );
};

export default Footer;
