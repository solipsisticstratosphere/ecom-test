import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./ModalBookCall.module.css";
import CloseIcon from "../../assets/icons/CloseIcon.svg?react";
import IconPen from "../../assets/icons/Pen_Footer.svg?react";
import Up from "../../assets/icons/Up.svg?react";
import Star from "../../assets/icons/Star.svg?react";
import Upwork from "../../assets/icons/Upwork.svg?react";
import Location from "../../assets/icons/Location.svg?react";
import bookCallImg from "../../assets/book_call.png";

const ModalBookCall = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleIndustrySelect = (industry) => {
    setSelectedIndustry(industry);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      industry: selectedIndustry,
      email: email,
      timestamp: new Date().toISOString(),
    };

    console.log("Form submitted:", formData);

    // Опционально: очистить форму после отправки
    setSelectedIndustry("");
    setEmail("");

    // Опционально: закрыть модальное окно
    onClose();
  };

  const handleDemoCall = () => {
    console.log("Demo call requested:", {
      action: "book_demo_call",
      timestamp: new Date().toISOString(),
    });
  };

  if (!isOpen) return null;

  const industries = [
    "Clothing",
    "Cosmetics",
    "B2B",
    "Electronics",
    "Other sectors",
  ];

  const modal = (
    <div className={styles.overlay}>
      <div ref={modalRef} className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <CloseIcon />
        </button>

        <div className={styles.content}>
          <div className={styles.leftSection}>
            <h2 className={styles.title}>
              Ready to discuss
              <br />
              your project with us?
            </h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.industrySection}>
                <h3 className={styles.sectionTitle}>Choose your industry</h3>
                <div className={styles.industryTags}>
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      type="button"
                      className={`${styles.tag} ${
                        selectedIndustry === industry ? styles.selected : ""
                      }`}
                      onClick={() => handleIndustrySelect(industry)}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.contactSection}>
                <h3 className={styles.sectionTitle}>Contact me back at</h3>
                <input
                  type="email"
                  placeholder="Your E-mail"
                  className={styles.emailInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className={styles.actionSection}>
                <button type="submit" className={styles.submitBtn}>
                  SEND A MESSAGE
                  <span className={styles.icon}>
                    <IconPen />
                  </span>
                </button>

                <div className={styles.orSection}>
                  <button
                    type="button"
                    className={styles.demoButton}
                    onClick={handleDemoCall}
                  >
                    <img
                      src={bookCallImg}
                      alt="BookCall"
                      className={styles.demoIcon}
                    />
                  </button>
                  <p className={styles.orText}>
                    Or you can{" "}
                    <span className={styles.demoText}>
                      Book a Free Demo Call
                    </span>{" "}
                    at convenient time
                  </p>
                </div>
              </div>
            </form>

            <div className={styles.privacySection}>
              <p className={styles.privacy}>
                By sending this form I confirm that I have read and accept the{" "}
                <a href="#">Privacy Policy</a>
              </p>
            </div>
          </div>
          <div className={styles.testimonialBox}>
            <div className={styles.folderTab}>
              <Up />
              <span className={styles.clientsSay}>
                <span>Our</span> clients say
              </span>
            </div>
            <div className={styles.testimonialContent}>
              <div className={styles.rating}>
                <Star /> 5.0 <Upwork />
              </div>
              <p className={styles.review}>
                "I had a positive experience working with Victor and his team.
                <span>
                  {" "}
                  They were always quick to respond and very professional in
                  their work. I would recommend them to others."
                </span>
              </p>
              <div className={styles.country}>
                <Location /> United Kingdom
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.body);
};

export default ModalBookCall;
