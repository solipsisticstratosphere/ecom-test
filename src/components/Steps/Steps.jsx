import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Steps.module.css";

import DottedEllipse from "../../assets/icons/Elipse.svg?react";
import PencilIcon from "../../assets/icons/Pen_Steps.svg?react";
import TickCalendar from "../../assets/icons/TickCalendar.svg?react";
import SettingsIcon from "../../assets/icons/Settings.svg?react";
import SearchIcon from "../../assets/icons/Search.svg?react";
import TrendingIcon from "../../assets/icons/Trending.svg?react";

// дані для кроків
const stepsData = [
  {
    week: 1,
    title: "Onboarding",
    icon: <PencilIcon className={styles.icon} />,
    ellipseClass: styles.ellipse1,
    iconMarginBottom: "175px",
    mobileIconMarginBottom: "60px",
    mobileGlowClass: styles.mobileGlow1,
    tasks: ["Briefing", "Debriefing", "Account access", "Project system setup"],
  },
  {
    week: 2,
    title: "Explore",
    icon: <SearchIcon className={`${styles.icon} ${styles.iconSearch}`} />,
    ellipseClass: styles.ellipse2,
    iconMarginBottom: "30px",
    mobileIconMarginBottom: "10px",
    mobileGlowClass: styles.mobileGlow2,
    tasks: [
      "Unit economics",
      "Website audit",
      "Advertising audit",
      "Competitor analysis",
      "Strategy development",
    ],
  },
  {
    week: 3,
    title: "Setup",
    icon: <SettingsIcon className={styles.icon} />,
    ellipseClass: styles.ellipse3,
    iconMarginBottom: "90px",
    mobileIconMarginBottom: "60px",
    mobileGlowClass: styles.mobileGlow3,
    tasks: [
      "Tracking setup",
      "Merchant setup",
      "Ad content creation",
      "Campaigns setup",
    ],
  },
  {
    week: 4,
    title: "Grow",
    icon: <TrendingIcon className={`${styles.icon} ${styles.iconTrending}`} />,
    ellipseClass: styles.ellipse4,
    iconMarginBottom: "150px",
    mobileIconMarginBottom: "110px",
    mobileGlowClass: styles.mobileGlow4,
    tasks: ["Reporting setup", "Actionable insights", "Results optimization"],
  },
];

// головний компонент кроків
const Steps = () => {
  let globalIndex = 1;

  return (
    // секція кроків
    <div className={styles.stepsSection}>
      {/* десктопна версія кроків */}
      <div className={`${styles.container} ${styles.desktopContainer}`}>
        {stepsData.map((step) => (
          <div className={styles.column} key={step.week}>
            <div className={styles.columnContent}>
              <div className={styles.header}>
                <span className={styles.weekInfo}>
                  [{step.week}] WEEK{" "}
                  <TickCalendar className={styles.tickCalendar} />
                </span>
                <h2 className={styles.title}>{step.title}</h2>
              </div>
              <div
                className={styles.iconContainer}
                style={{ marginBottom: step.iconMarginBottom }}
              >
                <div className={styles.iconWrapper}>{step.icon}</div>
                <DottedEllipse
                  className={`${styles.ellipse} ${step.ellipseClass}`}
                />
              </div>
              <ul className={styles.taskList}>
                {step.tasks.map((task, i) => (
                  <li className={styles.taskItem} key={i}>
                    <span className={styles.taskNumber}>{globalIndex++}</span>
                    <span className={styles.taskText}>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* мобільна версія кроків */}
      <div className={`${styles.container} ${styles.mobileContainer}`}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={60}
          slidesPerView={"auto"}
          centeredSlides={false}
          pagination={{
            clickable: true,
            bulletClass: styles.swiperBullet,
            bulletActiveClass: styles.swiperBulletActive,
          }}
          className={styles.swiper}
        >
          {stepsData.map((step) => {
            // підрахунок глобального індексу для мобільної версії
            let stepGlobalIndex = 1;
            for (let i = 0; i < step.week - 1; i++) {
              stepGlobalIndex += stepsData[i].tasks.length;
            }
            return (
              <SwiperSlide key={step.week} className={styles.swiperSlideMobile}>
                <div className={styles.mobileColumn}>
                  <div className={styles.columnContent}>
                    <div className={styles.header}>
                      <span className={styles.weekInfo}>
                        [{step.week}] WEEK{" "}
                        <TickCalendar className={styles.tickCalendar} />
                      </span>
                      <h2 className={styles.title}>{step.title}</h2>
                    </div>
                    <div
                      className={styles.iconContainer}
                      style={{ marginBottom: step.mobileIconMarginBottom }}
                    >
                      <div className={styles.iconWrapper}>{step.icon}</div>
                      <div
                        className={`${styles.glow} ${step.mobileGlowClass}`}
                      />
                      <DottedEllipse
                        className={`${styles.ellipse} ${step.ellipseClass}`}
                      />
                    </div>
                    <ul className={styles.taskList}>
                      {step.tasks.map((task, i) => (
                        <li className={styles.taskItem} key={i}>
                          <span className={styles.taskNumber}>
                            {stepGlobalIndex++}
                          </span>
                          <span className={styles.taskText}>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Steps;
