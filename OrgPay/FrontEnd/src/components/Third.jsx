import { useEffect } from "react";
import "./components.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
function Third() {
  const { ref: sec1, inView } = useInView();
  const { ref: sec2, inView: wew } = useInView();
  const { ref: sec3, inView: wew2 } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 10,
        opacity: 100,
      });
    }
    if (!inView) {
      animation.start({
        y: 100,
        opacity: 0,
      });
    }
  }, [inView]);
  useEffect(() => {
    if (wew) {
      animation2.start({
        y: 10,
        opacity: 100,
      });
    } else {
      animation2.start({
        y: 100,
        opacity: 0,
      });
    }
  }, [wew]);
  useEffect(() => {
    if (wew2) {
      animation3.start({
        y: 10,
        opacity: 100,
      });
    } else {
      animation3.start({
        y: 100,
        opacity: 0,
      });
    }
  }, [wew2]);
  return (
    <>
      <div id="Features" className="ThirdCont">
        <section>
          <section>
            <h2>We Provide the best process experience</h2>
          </section>

          <section style={{ marginTop: "10%" }}>
            <motion.section ref={sec1} animate={animation} className="bilog">
              <section>
                <div className="circleproc">
                  <h2>01</h2>
                </div>
                <div className="vl"></div>
              </section>
              <section>
                <h2>Authorization</h2>
                <p>
                  Authorization in the payment process involves verifying the
                  availability of funds or credit to ensure the legitimacy of a
                  transaction before proceeding with the fund transfer.
                </p>
              </section>
            </motion.section>
            <motion.section animate={animation2} ref={sec2} className="bilog">
              <section>
                <div className="circleproc">
                  <h2>02</h2>
                </div>
                <div className="vl"></div>
              </section>
              <section>
                <h2>Payment Processing</h2>
                <p>
                  The actual transfer or movement of funds between accounts,
                  often facilitated by payment processors or financial
                  institutions.
                </p>
              </section>
            </motion.section>
            <motion.section animate={animation3} ref={sec3} className="bilog">
              <section>
                <div className="circleproc">
                  <h2>03</h2>
                </div>
              </section>
              <section>
                <h2>Settlement</h2>
                <p>
                  The finalization of the payment, confirming that the funds
                  have been successfully transferred and updating relevant
                  records.
                </p>
              </section>
            </motion.section>
          </section>
        </section>
        <section className="leftimg"></section>
      </div>
    </>
  );
}

export default Third;
