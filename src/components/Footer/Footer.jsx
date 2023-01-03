import "./Footer.css";

const Footer = () => {
  return (
    <footer class="text-center mt-5 text-light  border-top  border-secondary pt-4">
      <p>
        &copy; Copyright <span className="fw-bold text-light ">React-Portfolio</span>.
        All Rights Reserved
      </p>
      <p>
        Designed by{" "}
        <a
          href="https://github.com/A-Monsef"
          rel="noopener noreferrer"
          target="_blank"
          className="footer_name d-inline fw-bolder"
        >
          {" "}
          Monsef Amzaouri
        </a>
      </p>
    </footer>
  );
};
export default Footer;
