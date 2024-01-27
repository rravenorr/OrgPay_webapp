import { useEffect } from "react";
import "./components.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
function First() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation.start({
        x: 5,
        opacity: 100,
        transition: { duration: 0.3 },
      });
    }
    if (!inView) {
      animation.start({
        x: -10,
        opacity: 0,
        transition: { duration: 0.3 },
      });
    }
  }, [inView]);
  return (
    <>
      <motion.div animate={animation}>
        <div className="firstCont">
          <section className="Fleft">
            <div ref={ref} className="intro">
              <h1
                style={{
                  fontFamily: ' "Acumin Pro", sans-serif',
                  color: "#F7F8F9",
                  fontSize: "2rem",
                  fontWeight: "700",
                  textAlign: "left",
                  lineHeight: "3rem",
                  marginTop: "-1%",
                  margin: "0px 10%",
                }}
              >
                Simplify Payments, Amplify Success.
              </h1>
              <p className="introdeet" style={{ margin: "7% 10%" }}>
                Experience the next evolution in payments with OrgPay. From
                secure transactions to unparalleled convenience, we're here to
                redefine the way you pay and get paid.
              </p>
            </div>
          </section>
          <section className="Fright"></section>
        </div>
      </motion.div>
    </>
  );
}

export default First;
