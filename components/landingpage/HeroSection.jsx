import React from 'react'
import styles from '../../styles/landingpage/HeroSection.module.scss'

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>🏥</span>
              <span>Trusted Orthopedic Care</span>
            </div>

            <h1 className={styles.title}>
              Expert <span className={'gradientText'}>Orthopedic</span> Care
            </h1>
            <h1 className={styles.title}>For Your <span className={'gradientText'}>Active Life</span></h1>

            <p className={styles.subtitle}>
              Leading orthopedic specialist providing comprehensive bone, joint, and muscle care.
              From sports injuries to joint replacements, we help you get back to doing what you love.
            </p>

            {/* <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5000+</span>
                <span className={styles.statLabel}>Successful Surgeries</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Patient Satisfaction</span>
              </div>
            </div> */}

            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>
                <span>Book Consultation</span>
                <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className={styles.trustIndicators}>
              <div className={styles.trustItem}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Board Certified</span>
              </div>
              <div className={styles.trustItem}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Award Winning</span>
              </div>
              <div className={styles.trustItem}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>5-Star Rated</span>
              </div>
            </div>
          </div>

          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <div className={styles.mainImage}>
                <div className={styles.imagePlaceholder}>
                  <svg className={styles.doctorIcon} viewBox="0 0 24 24" fill="none">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Professional Orthopedic Doctor</span>
                </div>
              </div>

              <div className={styles.floatingCard1}>
                <div className={styles.cardIcon}>⚡</div>
                <div className={styles.cardContent}>
                  <span className={styles.cardTitle}>Quick Recovery</span>
                  <span className={styles.cardDesc}>Advanced techniques</span>
                </div>
              </div>

              <div className={styles.floatingCard2}>
                <div className={styles.cardIcon}>🎯</div>
                <div className={styles.cardContent}>
                  <span className={styles.cardTitle}>Precision Care</span>
                  <span className={styles.cardDesc}>Minimally invasive</span>
                </div>
              </div>

              <div className={styles.floatingCard3}>
                <div className={styles.cardIcon}>💪</div>
                <div className={styles.cardContent}>
                  <span className={styles.cardTitle}>Strength Focus</span>
                  <span className={styles.cardDesc}>Full rehabilitation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.backgroundElements}>
          <div className={styles.gradientOrb1}></div>
          <div className={styles.gradientOrb2}></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
