import { inView, scale } from "motion";
import { useEffect, useState } from "react";
import bgImage from "../../assets/hero.png";
import paris from "../../assets/Images/Paris.jpg";
import tokyo from "../../assets/Images/Tokyo.jpg";
import dubai from "../../assets/Images/Dubai.png";
import maldive from "../../assets/Images/Maldives.jpg";
import santorini from "../../assets/Images/Santorini.jpg";
import swiss from "../../assets/Images/Swiss.jpg";
import curved from "../../assets/Images/VectorCurved.jpg";
import glass from "../../assets/Vector/vector3.png";
import card from "../../assets/Vector/vector.png";
import seat from "../../assets/Vector/vector2.png";
import craft from "../../assets/Images/InteriorPlane.png";
import "./Landing.css";
import Button from "../../Components/Button/Button";
import { motion, stagger } from "motion/react";
import SearchFlight from "../../Components/SearchFight/Searchflight";
import heroVideo from "../../assets/bgVideo.mp4";
import { Link } from "react-router-dom";
import { MdArrowUpward } from "react-icons/md";
function Landing() {
  const [top, setTop] = useState(false);

  // motion
  const heroTextContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3, delayChildren: 1 } },
  };
  const heroText = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeInOut" },
  };

  const textContainer = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };
  const gridContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3, delayChildren: 0.4 } },
  };
  const gridItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };
  // motion

  const onBacktoTop = () => {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.log(error``);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY > 1000);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="landing-container">
        <div className="hero-container">
          <motion.div
            className="img-wrap-hero"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img src={bgImage} alt="" />
          </motion.div>
          <div className="video-wrp">
            <video autoPlay muted loop playsInline className="video">
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
          <motion.div
            className="hero-text-wrp"
            variants={heroTextContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              style={{ fontSize: "16px", fontWeight: "600" }}
              variants={heroText}
            >
              PRIVATE AVIATION, REIMAGINED
            </motion.p>
            <motion.h1 variants={heroText}>
              FLY BEYOND <br />
              ORDINARY
            </motion.h1>
            <motion.p
              style={{ letterSpacing: "2px", fontSize: "16px" }}
              variants={heroText}
            >
              A private airline built for the hours between midnight and morning
              — where the cabin <br />
              dissolves into sky, and every seat faces the sunrise.
            </motion.p>
            <motion.div className="cta-wrp" variants={heroText}>
              <button className="CTA-btn">BOOK YOUR JOURNEY</button>
              <Button>EXPLORE CABIN</Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="top-destinations">
          <SearchFlight />
          <motion.div
            className="bgBlur"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
          ></motion.div>
          <motion.div
            className="text-destination-wrp"
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>ESCAPES</p>
            <h1>
              Where the sky leads <br />
              next
            </h1>
            <p style={{ fontWeight: 500, color: "black" }}>
              Six routes, chosen for the light. Every cabin turns toward the
              window when we arrive.
            </p>
          </motion.div>
          <motion.div
            className="grid-wrap"
            variants={gridContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="grid-box box1" variants={gridItem}>
              <div className="label-wrp-grid">
                <h1>PARIS</h1>
                <p>The city exhales gold at dusk.</p>
                <p>CDG8H 15M NONSTOP</p>
              </div>
              <div className="grid-bg">
                <img src={paris} alt="" />
              </div>
              <div className="icon-wrap-grid"></div>
            </motion.div>
            <motion.div className="grid-box box2" variants={gridItem}>
              <div className="label-wrp-grid">
                <h1>TOKYO</h1>
                <p>Neon quiets into paper light</p>
                <p>CDG8H 15M NONSTOP</p>
              </div>
              <div className="grid-bg">
                <img src={tokyo} alt="" />
              </div>
            </motion.div>
            <motion.div className="grid-box box3" variants={gridItem}>
              <div className="label-wrp-grid">
                <h1>DUBAI</h1>
                <p>The city exhales gold at dusk.</p>
                <p>CDG8H 15M NONSTOP</p>
              </div>
              <div className="grid-bg">
                <img src="src\assets\Images\Dubai.png" alt="" />
              </div>
            </motion.div>
            <motion.div className="grid-box box4" variants={gridItem}>
              <div className="label-wrp-grid">
                <h1>MALDIVES</h1>
                <p>The city exhales gold at dusk.</p>
                <p>CDG8H 15M NONSTOP</p>
              </div>
              <div className="grid-bg">
                <img src={maldive} alt="" />
              </div>
            </motion.div>
            <motion.div className="grid-box box5" variants={gridItem}>
              <div className="label-wrp-grid">
                <h1>SANTORINI</h1>
                <p>Whitewash and volcanic blue.</p>
                <p>CDG8H 15M NONSTOP</p>
              </div>
              <div className="grid-bg">
                <img src={santorini} alt="" />
              </div>
            </motion.div>
            <motion.div className="grid-box box6" variants={gridItem}>
              <div className="label-wrp-grid">
                <h1>SWISS</h1>
                <p>The city exhales gold at dusk.</p>
                <p>CDG8H 15M NONSTOP</p>
              </div>
              <div className="grid-bg">
                <img src={swiss} alt="" />
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="service-container">
          <motion.div
            className="text-service-wrp"
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>ONBOARD</p>
            <h1>Every detail, considered</h1>
            <p style={{ fontWeight: 500, color: "black" }}>
              Nothing about the experience is incidental. Each service exists to
              remove one more reason to notice you're airborne.
            </p>
          </motion.div>
          <img src={curved} alt="" className="vector" />
          <motion.div
            className="service-grid-wrap"
            variants={gridContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="services-grid-box" variants={gridItem}>
              <div className="service-wrp">
                <img src={seat} alt="" className="vectorImg" />
                <h1>Private Lounges</h1>
                <p>
                  Depart from stillness. Dedicated suites, showers, and <br />
                  quiet rooms waiting at every hub.
                </p>
              </div>
            </motion.div>
            <motion.div className="services-grid-box" variants={gridItem}>
              <div className="service-wrp">
                <img src={glass} alt="" className="vectorImg" />
                <h1>First Class Dining</h1>
                <p>
                  Seasonal menus built with three-starred chefs, plated <br />
                  course by course, at any hour you choose.
                </p>
              </div>
            </motion.div>
            <motion.div className="services-grid-box" variants={gridItem}>
              <div className="service-wrp">
                {" "}
                <img src={card} alt="" className="vectorImg" />
                <h1>Luxury Cabins</h1>
                <p>
                  Fully enclosed suites with lie-flat beds, dressed in <br />
                  Italian linen and closed with a private door.
                </p>
              </div>
            </motion.div>
            <motion.div className="services-grid-box" variants={gridItem}>
              <div className="service-wrp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-wifi"
                  viewBox="0 0 16 16"
                  color="#936273"
                >
                  <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.44 12.44 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.52.52 0 0 0 .668.05A11.45 11.45 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049" />
                  <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.46 9.46 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065m-2.183 2.183c.226-.226.185-.605-.1-.75A6.5 6.5 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.5 5.5 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091zM9.06 12.44c.196-.196.198-.52-.04-.66A2 2 0 0 0 8 11.5a2 2 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
                </svg>
                <h1>Sky WiFi</h1>
                <p>
                  Gate-to-gate connectivity fast enough to <br />
                  stream, work, or simply forget you're airborne.
                </p>
              </div>
            </motion.div>
            <motion.div className="services-grid-box" variants={gridItem}>
              <div className="service-wrp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                  color="#936273"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
                <h1>Priority Boarding</h1>
                <p>
                  Step aboard first, without the line, the wait, or <br />
                  the queue at the gate.
                </p>
              </div>
            </motion.div>
            <motion.div className="services-grid-box" variants={gridItem}>
              <div className="service-wrp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-globe2"
                  viewBox="0 0 16 16"
                  color="#936273"
                >
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                </svg>
                <h1>Global Connectivity</h1>
                <p>
                  One reservation, every leg — 180 destinations <br /> connected
                  through a single private network.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="craftman-ship-container"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="img-wrp-lg" variants={gridItem}>
            <img src={craft} alt="" />
          </motion.div>
          <motion.div className="text-wrap-craft" variants={gridItem}>
            <p>Craftsmanship</p>
            <h1>
              The cabin, considered <br /> like a room
            </h1>
            <p>
              Every suite is closed with its own door, upholstered in
              hand-finished leather, and lit to soften as the <br /> outside sky
              does. There is no overhead bin to negotiate, no aisle to share —
              only the seat, the window, <br /> and the hours ahead. <br />
              Service follows without asking twice. A single crew member is
              assigned to every four guests, trained to <br /> remember how you
              take your coffee before you've asked for it the second time.
            </p>
            <div className="overall">
              <div className="sec-wrp">
                <h1>82″</h1>
                <span>SEAT PICTH</span>
              </div>
              <div className="sec-wrp">
                <h1>1:4</h1>
                <span>CREW TO GUEST</span>
              </div>
              <div className="sec-wrp">
                <h1>180</h1>
                <span>DESTINATIONS</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div className="testimonials">
          <motion.div
            className="testimonial-text-wrap"
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>JOURNEYS</p>
            <h1>
              Told by the people who flew <br />
              them
            </h1>
          </motion.div>
          <motion.div
            className="testimonial-card-wrp"
            variants={gridContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="testimonial-card" variants={gridItem}>
              <span>"</span>
              <p>
                {" "}
                The cabin lights shift with the sky outside. <br /> I've never
                landed feeling less tired.
              </p>
              <p>
                <b>J. Whitfield</b>
                <br />
                Quarterly Flyer
              </p>
            </motion.div>
            <motion.div className="testimonial-card" variants={gridItem}>
              <span>"</span>
              <p>
                It's less like flying and more like being <br /> somewhere very
                quiet, very high up.
              </p>
              <p>
                <b>R. Adeyemi</b>
                <br />
                Member Since 2019
              </p>
            </motion.div>
            <motion.div className="testimonial-card" variants={gridItem}>
              <span>"</span>
              <p>
                I booked one seat for the view and stayed <br /> for everything
                else.
              </p>
              <p>
                <b>C. Moreau</b> <br />
                Private Client
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className="footer-container">
          <motion.div
            className="reserve-card"
            initial={{ opacity: 0, top: 0 }}
            whileInView={{ opacity: 1, top: "-5%" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>Limited Fare</p>
            <h1>The Sunrise Fare</h1>
            <p>
              Reserve before August and fly your first route in Aerlume One
              priced like Business <br /> — every seat still facing the window.
            </p>
            <Button btnClass="btn-gold">Reserve Your Fare</Button>
          </motion.div>
          <div className="footer-wrap">
            <div className="logo-sec">
              <img src="src\assets\logo-colored.png" alt="" />
              <p>
                A private airline built for the hours between <br />
                midnight and morning.
              </p>
              <div className="social-link-wrps">
                <div className="social-links">
                  <img
                    src="src\assets\Vector\insta-vector.png"
                    alt=""
                    className="vector-social"
                  />
                </div>
                <div className="social-links">
                  <img
                    src="src\assets\Vector\x-vector.png"
                    alt=""
                    className="vector-social"
                  />
                </div>
                <div className="social-links">
                  <img
                    src="src\assets\Vector\linked-vector.png"
                    alt=""
                    className="vector-social"
                  />
                </div>
              </div>
            </div>
            <div className="footer-links-wrap">
              <div className="footerlinks">
                <label htmlFor="">FLY</label>
                <Link className="link-footer">DESITINATIONS</Link>
                <Link className="link-footer">FLEET</Link>
                <Link className="link-footer">CABINS</Link>
                <Link className="link-footer">ROUTE MAP</Link>
              </div>
              <div className="footerlinks">
                <label htmlFor="">EXPERIENCES</label>
                <Link className="link-footer">LOUNGE</Link>
                <Link className="link-footer">DINING</Link>
                <Link className="link-footer">MEMBERSHIP</Link>
                <Link className="link-footer">GIFT CARD</Link>
              </div>
              <div className="footerlinks">
                <label htmlFor="">COMPANY</label>
                <Link className="link-footer">ABOUT AERLUME</Link>
                <Link className="link-footer">CAREER</Link>
                <Link className="link-footer">PRESS</Link>
                <Link className="link-footer">SUSTAINABILITY</Link>
              </div>
              <div className="footerlinks">
                <label htmlFor="">SUPPORT</label>
                <Link className="link-footer">MANAGE BOOKING</Link>
                <Link className="link-footer">CONTACT</Link>
                <Link className="link-footer">FAQS</Link>
                <Link className="link-footer">TRAVEL ADVISORIES</Link>
              </div>
            </div>
          </div>
        </div>
        {top && (
          <button className="back-to-top" onClick={onBacktoTop}>
            Back to <MdArrowUpward />
          </button>
        )}
      </div>
    </>
  );
}

export default Landing;
