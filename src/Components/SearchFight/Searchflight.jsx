import "./Searchflight.css";
import Button from "../Button/Button";
import { motion } from "motion/react";
function SearchFlight() {
  const searchContainer = {
    hidden: { opacity: 0, top: 40 },
    visible: { opacity: 1, top: "-4%" },
    trasition: { duration: 1, ease: "easeInOut" },
  };
  return (
    <>
      <motion.div
        className="search-container"
        variants={searchContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="main-wrp-check">
          <label htmlFor="">FROM</label>
          <select name="origin" id="origin">
            <optgroup label="Kerala Airports">
              <option value="COK" className="options" selected>
                Cochin International Airport (COK)
              </option>
              <option value="TRV" className="options">
                Trivandrum International Airport (TRV)
              </option>
              <option value="CCJ" className="options">
                Calicut International Airport (CCJ)
              </option>
              <option value="CNN">Kannur International Airport (CNN)</option>
            </optgroup>
            <optgroup label="Major Indian Hubs" className="options">
              <option value="BLR">
                Bengaluru - Kempegowda International (BLR)
              </option>
              <option value="MAA">Chennai International Airport (MAA)</option>
              <option value="BOM">
                Mumbai - Chhatrapati Shivaji Maharaj (BOM)
              </option>
              <option value="DEL">
                Delhi - Indira Gandhi International (DEL)
              </option>
            </optgroup>
          </select>
        </div>
        <div className="main-wrp-check">
          <label htmlFor="">TO</label>
          <select name="destination" id="destination">
            <optgroup label="Popular Domestic">
              <option value="BLR">Bengaluru (BLR)</option>
              <option value="MAA">Chennai (MAA)</option>
              <option value="BOM">Mumbai (BOM)</option>
              <option value="DEL">Delhi (DEL)</option>
              <option value="GOI">Goa (GOI)</option>
            </optgroup>
            <optgroup label="Middle East (Gulf Hubs)">
              <option value="DXB">Dubai International (DXB)</option>
              <option value="DOH">Doha - Hamad International (DOH)</option>
              <option value="AUH">Abu Dhabi International (AUH)</option>
              <option value="MCT">Muscat International (MCT)</option>
              <option value="JED">Jeddah (JED)</option>
            </optgroup>
            <optgroup label="Southeast Asia & International">
              <option value="SIN">Singapore - Changi (SIN)</option>
              <option value="KUL">Kuala Lumpur (KUL)</option>
              <option value="BKK">Bangkok - Suvarnabhumi (BKK)</option>
              <option value="LHR">London Heathrow (LHR)</option>
            </optgroup>
          </select>
        </div>
        <div className="main-wrp-check">
          <label htmlFor="">DEPART</label>
          <input type="date" name="" id="" />
        </div>
        <div className="main-wrp-check">
          <label htmlFor="">GUEST</label>
          <select name="" id="">
            <option value="1">1 Guest</option>
            <option value="2">2 Guest</option>
            <option value="3">3 Guest</option>
            <option value="4">4 Guest</option>
          </select>
        </div>
        <div className="main-wrp-check">
          <Button btnClass="btn-gold">CHECK FLIGHT</Button>
        </div>
      </motion.div>
    </>
  );
}

export default SearchFlight;
