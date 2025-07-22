import React from "react";
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow";
import styles from "../../styles/landingpage/WhyChooseSection.module.scss";
import GsapFadeIn from "../animations/GsapFadeIn";

import emer from "@/public/assets/landingpage/emergency.png";
import medal from "@/public/assets/landingpage/medal.png";
import patient from "@/public/assets/landingpage/patient.webp";
import communication from "@/public/assets/landingpage/communication.png";
import robotic from "@/public/assets/landingpage/robotic.png";

import { FaClock, FaMedal, FaRobot, FaHeart, FaComments } from "react-icons/fa";

const WhyChooseSection = () => {
  const reasons = [
    {
      id: "reason-1",
      title: "24/7 Emergency Support",
      icon: <FaClock color="#0066ff" size={20} />,
      description:
        "Round-the-clock orthopedic emergency care when you need it most",
      imageUrl: emer,
    },
    {
      id: "reason-2",
      title: "Gold Medalist Surgeon",
      icon: <FaMedal color="#ffbf00" size={20} />,
      description:
        "Award-winning expertise with global training and recognition",
      imageUrl: medal,
    },
    {
      id: "reason-3",
      title: "Robotic Surgery",
      icon: <FaRobot color="#00bcd4" size={20} />,
      description:
        "Advanced robotic and minimally invasive surgical techniques",
      imageUrl: robotic,
    },
    {
      id: "reason-4",
      title: "Patient-First Care",
      icon: <FaHeart color="#ff4d4d" size={20} />,
      description: "Personalized treatment plans tailored to your unique needs",
      imageUrl: patient,
    },
    {
      id: "reason-5",
      title: "Transparent Communication",
      icon: <FaComments color="#8e44ad" size={20} />,
      description:
        "Honest, clear communication throughout your treatment journey",
      imageUrl: communication,
    },
  ];

  return (
    <section className={styles.industryExpertise}>
      <div className={styles.backgroundGrid}></div>

      <div className={styles.container}>
        <GsapFadeIn effect="slide-up" duration={1} delay={0.2}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Why Choose <span className="gradientText">Dr. Bhanu?</span>
            </h2>
          </div>
        </GsapFadeIn>

        <GsapFadeIn effect="fade" duration={1.2} delay={0.4}>
          <div className={styles.slideshowContainer}>
            <HoverSlider className="min-h-[200px] flex items-center justify-center">
              <div className="w-full">
                <div className={styles.slideshowContent}>
                  {/* Titles with Icons */}
                  <div className={styles.industryTitles}>
                    {reasons.map((reason, index) => (
                      <div
                        key={reason.title}
                        className={`group flex justify-center items-center gap-2`}
                      >
                        <p>{reason.icon}</p>
                        <TextStaggerHover
                          index={index}
                          className={styles.industryTitle}
                          text={reason.title}
                          icon={reason.icon}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Image Slideshow */}
                  <div className={styles.imageContainer}>
                    <HoverSliderImageWrap className={styles.imageWrapper}>
                      {reasons.map((reason, index) => (
                        <div key={reason.id} className="relative">
                          <HoverSliderImage
                            index={index}
                            imageUrl={reason.imageUrl.src || reason.imageUrl}
                            src={reason.imageUrl.src || reason.imageUrl}
                            alt={reason.title}
                            className={styles.industryImage}
                            loading="eager"
                            decoding="async"
                          />
                        </div>
                      ))}
                    </HoverSliderImageWrap>
                  </div>
                </div>
              </div>
            </HoverSlider>
          </div>
        </GsapFadeIn>
      </div>
    </section>
  );
};

export default WhyChooseSection;
