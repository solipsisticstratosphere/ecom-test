import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import styles from "./Badges.module.css";

import CrownIcon from "../../assets/icons/Crown.svg?react";
import StarsIcon from "../../assets/icons/Stars.svg?react";
import ShopifyIcon from "../../assets/icons/Shopify.svg?react";
import UpIcon from "../../assets/icons/Upwork_Icon.svg?react";
import WreathIcon from "../../assets/icons/Wreath.svg?react";

const BadgesSwiper = () => {
  const badges = [
    {
      icon: CrownIcon,
      title: "Top Rated",
      subtitle: "Plus",
    },
    {
      icon: StarsIcon,
      title: "1461 reviewed",
      subtitle: "company",
    },
    {
      icon: ShopifyIcon,
      title: "Shopify partners",
      subtitle: "Agency",
    },
    {
      icon: UpIcon,
      title: "100% Job Success",
      subtitle: "on Upwork",
    },
  ];

  return (
    <div className={styles.container}>
      <Swiper
        modules={[FreeMode]}
        spaceBetween={30}
        slidesPerView={"auto"}
        freeMode={true}
        grabCursor={true}
        className={styles.swiper}
        breakpoints={{
          320: {
            spaceBetween: 15,
          },
          768: {
            spaceBetween: 20,
          },
          1024: {
            spaceBetween: 30,
          },
        }}
      >
        {badges.map((badge, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.badge}>
              <div className={styles.badgeInner}>
                <div className={styles.iconWrapper}>
                  <WreathIcon className={styles.wreath} />

                  <badge.icon className={styles.icon} />
                </div>
                <div className={styles.textContent}>
                  <div className={styles.title}>{badge.title}</div>
                  <div className={styles.subtitle}>{badge.subtitle}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BadgesSwiper;
