import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Steps.module.css";

import DottedEllipse from "./Elipse.svg?react";
import PencilIcon from "./Pen.svg?react";
import TickCalendar from "./TickCalendar.svg?react";
import SettingsIcon from "./Settings.svg?react";
import SearchIcon from "./Search.svg?react";
import TrendingIcon from "./Trending.svg?react";

const stepsData = [
  {
    week: 1,
    title: "Onboarding",
    icon: <PencilIcon className={styles.icon} />,
    ellipseClass: styles.ellipse1,
    iconMarginBottom: "175px",
    mobileIconMarginBottom: "60px",
    tasks: ["Briefing", "Debriefing", "Account access", "Project system setup"],
  },
  {
    week: 2,
    title: "Explore",
    icon: <SearchIcon className={`${styles.icon} ${styles.iconSearch}`} />,
    ellipseClass: styles.ellipse2,
    iconMarginBottom: "30px",
    mobileIconMarginBottom: "10px",
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
    tasks: ["Reporting setup", "Actionable insights", "Results optimization"],
  },
];

const Steps = () => {
  let globalIndex = 1;

  return (
    <div className={styles.stepsSection}>
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

      <div className={`${styles.container} ${styles.mobileContainer}`}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={60}
          slidesPerView={"auto"}
          centeredSlides={true}
          pagination={{
            clickable: true,
            bulletClass: styles.swiperBullet,
            bulletActiveClass: styles.swiperBulletActive,
          }}
          className={styles.swiper}
        >
          {stepsData.map((step) => {
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
