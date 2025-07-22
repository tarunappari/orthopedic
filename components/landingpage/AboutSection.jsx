import React from 'react'
import styles from '../../styles/landingpage/AboutSection.module.scss'

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>👨‍⚕️</span>
            <span>Meet Our Expert</span>
          </div>
          <h2 className={styles.sectionTitle}>
            About <span className={'gradientText'}>Dr. Bhanu</span>
          </h2>
        </div>

        <div className={styles.aboutContent}>
          {/* Left Side - Doctor Image & Stats */}
          <div className={styles.doctorSection}>
            <div className={styles.doctorImageWrapper}>
              <div className={styles.doctorImage}>
                <div className={styles.imagePlaceholder}>
                  <svg className={styles.doctorIcon} viewBox="0 0 24 24" fill="none">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Dr. Bhanu Pratap P</span>
                </div>
              </div>
              
              {/* Floating Achievement Cards */}
              <div className={styles.achievementCard1}>
                <div className={styles.cardIcon}>🏆</div>
                <div className={styles.cardContent}>
                  <span className={styles.cardTitle}>Gold Medalist</span>
                  <span className={styles.cardDesc}>Orthopedic Surgery</span>
                </div>
              </div>
              
              <div className={styles.achievementCard2}>
                <div className={styles.cardIcon}>🤖</div>
                <div className={styles.cardContent}>
                  <span className={styles.cardTitle}>Robotic Surgery</span>
                  <span className={styles.cardDesc}>Advanced Fellowship</span>
                </div>
              </div>
              
              <div className={styles.achievementCard3}>
                <div className={styles.cardIcon}>⚡</div>
                <div className={styles.cardContent}>
                  <span className={styles.cardTitle}>Trauma Care</span>
                  <span className={styles.cardDesc}>Specialized Training</span>
                </div>
              </div>
            </div>

            {/* Experience Stats */}
            <div className={styles.experienceStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>13+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5000+</span>
                <span className={styles.statLabel}>Successful Surgeries</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Patient Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={styles.contentSection}>
            <div className={styles.introContent}>
              <h3 className={styles.introTitle}>
                Excellence in <span className={'gradientText'}>Orthopedic Care</span>
              </h3>
              
              <p className={styles.introText}>
                Dr. Bhanu Pratap P is a gold medalist orthopedic surgeon with advanced fellowships 
                in robotic joint replacement and trauma care. With 13+ years of experience, his 
                approach combines precision, empathy, and modern innovation to ensure the best 
                outcomes for his patients.
              </p>

              {/* Specializations */}
              <div className={styles.specializations}>
                <h4 className={styles.specializationTitle}>Specializations</h4>
                <div className={styles.specializationGrid}>
                  <div className={styles.specializationItem}>
                    <div className={styles.specIcon}>🦴</div>
                    <span>Joint Replacement</span>
                  </div>
                  <div className={styles.specializationItem}>
                    <div className={styles.specIcon}>🤖</div>
                    <span>Robotic Surgery</span>
                  </div>
                  <div className={styles.specializationItem}>
                    <div className={styles.specIcon}>⚡</div>
                    <span>Trauma Care</span>
                  </div>
                  <div className={styles.specializationItem}>
                    <div className={styles.specIcon}>🏃‍♂️</div>
                    <span>Sports Medicine</span>
                  </div>
                </div>
              </div>

              {/* Mission Statement */}
              <div className={styles.missionStatement}>
                <div className={styles.missionIcon}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className={styles.missionContent}>
                  <h4 className={styles.missionTitle}>Our Mission</h4>
                  <p className={`${styles.missionText} gradientText`}>
                    "Restoring Mobility, Rebuilding Lives"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
