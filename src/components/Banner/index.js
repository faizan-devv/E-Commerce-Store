import React from "react";
import styles from "./Banner.module.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Banner = () => {
  return (
    <OwlCarousel
      items={1}
      className="owl-theme"
      loop
      autoplay
      nav
      margin={3}
      dots={false}
      animateOut="fadeOut"
    >
      <div className={`${styles.itemOne}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.bannerText}>
                <h6>Summer Collection</h6>
                <h2>MEN'S WEAR Collections 2021</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <button className="primary-btn">
                  Shop now <span className="arrow_right"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.itemTwo} ${styles.itemOne}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.bannerText}>
                <h6>Winter Collection</h6>
                <h2>women's wear Collections 2030</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <button className="primary-btn">
                  Shop now <span className="arrow_right"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default Banner;
