import React, { useState } from "react";
import styles from "./Discuss.module.css";
import IconPen from "../../assets/icons/Pen_Footer.svg?react";
import Up from "../../assets/icons/Up.svg?react";
import Upwork from "../../assets/icons/Upwork.svg?react";
import Star from "../../assets/icons/Star.svg?react";
import Location from "../../assets/icons/Location.svg?react";

// головний компонент обговорення
const Discuss = () => {
  const [touched, setTouched] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    storeLink: "",
    about: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // зміна полів форми
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // фіксація торкання поля
  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  // відправка форми
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const isValid =
      formData.fullName &&
      formData.email.includes("@") &&
      formData.storeLink &&
      formData.about;
    if (isValid) {
      console.log("Form submitted", formData);
    }
  };

  // перевірка помилок
  const getError = (field) => {
    if (!submitted && !touched[field]) return false;
    if (field === "email") return !formData.email.includes("@");
    return !formData[field];
  };

  return (
    <div className={styles.discussSection}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* форма для обговорення проекту */}
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <h2 className={styles.title}>
              Ready to discuss your project with us?
            </h2>
            <div className={styles.inputs}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getError("fullName") ? styles.invalid : ""}
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail*"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getError("email") ? styles.invalid : ""}
              />
            </div>
            <input
              type="text"
              name="storeLink"
              placeholder="Link your store"
              value={formData.storeLink}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${styles.inputLink} ${
                getError("storeLink") ? styles.invalid : ""
              }`}
            />
            <textarea
              name="about"
              placeholder="About Project"
              value={formData.about}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getError("about") ? styles.invalid : ""}
            />
            <div className={styles.privacyBox}>
              <p className={styles.privacy}>
                By sending this form I confirm that I have read and accept the{" "}
                <a href="#">Privacy Policy</a>
              </p>
              <button type="submit" className={styles.submitBtn}>
                SEND A MESSAGE
                <span className={styles.icon}>
                  <IconPen />
                </span>
              </button>
            </div>
          </form>
          {/* блок з відгуком клієнта */}
          <div className={styles.testimonialBox}>
            <div className={styles.folderTab}>
              <Up />
              <h4 className={styles.clientsSay}>
                <span className={styles.clientsSaySpan}>Our</span> clients say
              </h4>
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
};

export default Discuss;
