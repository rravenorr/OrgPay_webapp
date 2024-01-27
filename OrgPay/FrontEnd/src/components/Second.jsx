import { useEffect } from "react";
import "./components.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { BiBadgeCheck } from "react-icons/bi";
import { BsShieldLock } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";
function Second() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation.start({
        y: 5,
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
      <motion.div className="secondCont" animate={animation}>
        <section className="servCont">
          <div id="Ourservices" className="line"></div>
          <p className="serv">Benifits you get when using our services</p>
        </section>
        <section className="ourserv">
          <div>
            <section>
              <BiBadgeCheck
                style={{
                  width: "100%",
                  height: "50px",
                  marginTop: "20%",
                  color: "#818182",
                }}
              />
            </section>
            <section ref={ref}>
              <h2>Convenience</h2>
              <p>
                streamlined transactions, offering users effortless and
                efficient ways to manage their finances.
              </p>
            </section>
          </div>
          <div>
            <section>
              <BsShieldLock
                style={{
                  width: "100%",
                  height: "45px",
                  marginTop: "20%",
                  color: "#818182",
                }}
              />
            </section>
            <section>
              <h2>Secure</h2>
              <p>
                Secure payment methods employ advanced encryption, shielding
                users' financial data from unauthorized access and fraud.
              </p>
            </section>
          </div>
          <div>
            <section>
              <BsBookmarkCheck
                style={{
                  width: "100%",
                  height: "45px",
                  marginTop: "20%",
                  color: "#818182",
                }}
              />
            </section>
            <section>
              <h2>Easy to Access</h2>
              <p>
                Easy to access provide users with effortless and immediate means
                to conduct transactions, enhancing overall convenience.
              </p>
            </section>
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default Second;
