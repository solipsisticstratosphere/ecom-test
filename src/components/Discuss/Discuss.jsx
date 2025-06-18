import React, { useState } from "react";
import styles from "./Discuss.module.css";
import IconPen from "./Pen.svg?react";
import Up from "./up.svg?react";
import Upwork from "./upwork.svg?react";
import Star from "./star.svg?react";
import Location from "./location.svg?react";

const Discuss = () => {
  const [touched, setTouched] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    storeLink: "",
    about: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

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

  const getError = (field) => {
    if (!submitted && !touched[field]) return false;
    if (field === "email") return !formData.email.includes("@");
    return !formData[field];
  };

  return (
    <div className={styles.discussSection}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
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
};

export default Discuss;
