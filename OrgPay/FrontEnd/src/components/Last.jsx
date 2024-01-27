import { useEffect } from "react";
import "./components.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
function Last() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation.start({
        y: 10,
        opacity: 100,
        transition: { duration: 0.3 },
      });
    }
    if (!inView) {
      animation.start({
        y: 50,
        opacity: 0,
        transition: { duration: 0.3 },
      });
    }
  }, [inView]);
  return (
    <>
      <motion.div ref={ref} animate={animation} className="lastDiv">
        <section className="sub">
          <h2>Avail to get the latest version of our application </h2>
          <p>
            Avail now to experience the ease of managing your money anytime,
            anywhere, while enjoying a plethora of perks that make your
            financial journey truly rewarding.
          </p>
        </section>
        <section className="footer">
          <section className="fsec">
            <h1>OrgPay</h1>
            <p>
              Simplify your transactions, amplify your security – where seamless
              payments meet absolute trust
            </p>
          </section>
          <section className="tsec">
            <ul>
              <li href="#Ourservices">Our Services</li>
              <li href="#Features">Features</li>
            </ul>
          </section>

          <section className="ssec">
            <h1>Get in touch with us </h1>
            <ul className="listLogo">
              <li>
                <img
                  style={{ width: "40px", height: "40px" }}
                  src="../../public/icons8-discord.svg"
                  alt=""
                />
              </li>
              <li>
                <img
                  style={{ width: "35px", height: "40px" }}
                  src="../../public/icons8-facebook.svg"
                  alt=""
                />
              </li>
              <li>
                {" "}
                <img
                  style={{ width: "35px", height: "40px" }}
                  src="../../public/icons8-instagram.svg"
                  alt=""
                />
              </li>
              <li>
                {" "}
                <img
                  style={{ width: "35px", height: "40px" }}
                  src="../../public/icons8-twitter.svg"
                  alt=""
                />
              </li>
            </ul>
          </section>
        </section>
      </motion.div>
    </>
  );
}

export default Last;
