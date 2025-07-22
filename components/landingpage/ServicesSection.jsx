import React from 'react'
import styles from '../../styles/landingpage/ServicesSection.module.scss'

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Robotic Joint Replacement",
      description: "Precision surgeries with faster recovery",
      image: "https://images.unsplash.com/photo-1748407407936-2aeffd8428dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Robotic joint replacement surgery",
      features: ["AI-Assisted Surgery", "Minimal Scarring", "Quick Recovery"]
    },
    {
      id: 2,
      title: "Sports Injury Treatment",
      description: "Rapid rehabilitation and non-invasive care",
      image: "https://images.unsplash.com/photo-1558152557-25f8c38152c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3BvcnRzJTIwSW5qdXJ5JTIwVHJlYXRtZW50fGVufDB8MHwwfHx8Mg%3D%3D",
      alt: "Sports injury treatment and rehabilitation",
      features: ["Athletic Recovery", "Performance Optimization", "Injury Prevention"]
    },
    {
      id: 3,
      title: "Spine Care",
      description: "Conservative & surgical solutions",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29uc2VydmF0aXZlJTIwJTI2JTIwc3VyZ2ljYWwlMjBzb2x1dGlvbnN8ZW58MHwwfDB8fHwy",
      alt: "Spine care and treatment",
      features: ["Non-Surgical Options", "Advanced Procedures", "Pain Management"]
    },
    {
      id: 4,
      title: "Fracture & Trauma Management",
      description: "Emergency & complex trauma expertise",
      image: "https://images.unsplash.com/photo-1609113160023-4e31f3765fd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGNvbXBsZXglMjBwYWluJTIwZXhwZXJ0aXNlfGVufDB8MHwwfHx8Mg%3D%3D",
      alt: "Fracture and trauma management",
      features: ["24/7 Emergency Care", "Complex Trauma", "Rapid Response"]
    },
    {
      id: 5,
      title: "Arthroscopy",
      description: "Minimally invasive joint procedures",
      image: "https://images.unsplash.com/photo-1564725075388-cc8338732289?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fE1pbmltYWxseSUyMGludmFzaXZlJTIwam9pbnQlMjBwcm9jZWR1cmVzfGVufDB8MHwwfHx8Mg%3D%3D",
      alt: "Arthroscopic surgery procedure",
      features: ["Keyhole Surgery", "Faster Healing", "Reduced Pain"]
    },
    {
      id: 6,
      title: "Physiotherapy Support",
      description: "Full recovery with guided therapy",
      image: "https://images.unsplash.com/photo-1650044252595-cacd425982ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RnVsbCUyMHJlY292ZXJ5JTIwd2l0aCUyMGd1aWRlZCUyMHRoZXJhcHl8ZW58MHwwfDB8fHwy",
      alt: "Physiotherapy and rehabilitation",
      features: ["Personalized Plans", "Expert Guidance", "Complete Recovery"]
    }
  ]

  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>🏥</span>
            <span>Our Expertise</span>
          </div>
          <h2 className={styles.sectionTitle}>
            <span className={'gradientText'}>Services</span> Offered
          </h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive orthopedic care with cutting-edge technology and personalized treatment plans
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={styles.serviceCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardImageWrapper}>
                <div className={styles.cardImage}>
                  <img
                    src={service.image}
                    alt={service.alt}
                    className={styles.serviceImage}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>

                <div className={styles.serviceFeatures}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className={styles.featureItem}>
                      <div className={styles.featureIcon}>✓</div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Card Glow Effect */}
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCTA}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Start Your Recovery Journey?</h3>
            <p className={styles.ctaText}>
              Get personalized treatment from our expert orthopedic team
            </p>
          </div>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryCTA}>
              <span>Book Consultation</span>
              <svg className={styles.ctaIcon} viewBox="0 0 24 24" fill="none">
                <path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <button className={styles.secondaryCTA}>
              <svg className={styles.phoneIcon} viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>Call Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
      </div>
    </section>
  )
}

export default ServicesSection
