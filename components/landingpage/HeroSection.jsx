import React from 'react'
import './HeroSection.scss'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Main Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Empower your <span className="text-blue">body</span>, Embrace your journey.
          </h1>

          {/* Left Side Text */}
          <div className="hero-left">
            <p className="hero-subtext">Make healthy choices with Orthocure</p>
            <button className="chat-button">
              Chat <span className="arrow">↗</span>
            </button>
          </div>

          {/* Right Side Text */}
          <div className="hero-right">
            <p className="hero-subtext">Make an appointment with a doctor in an easy way</p>
            <button className="appointment-button">
              <span className="arrow">→</span>
            </button>
          </div>

          {/* Central 3D Figure */}
          <div className="hero-figure">
            <div className="figure-placeholder">
              {/* This would be replaced with actual 3D anatomical illustration */}
              <div className="running-figure"></div>
            </div>
          </div>
        </div>

        {/* Info Cards Section */}
        <div className="info-cards">
          {/* Left Card - Active Users & Doctors */}
          <div className="info-card users-card">
            <div className="card-header">
              <h3 className="card-title">2k+</h3>
              <p className="card-subtitle">ACTIVE USERS</p>
            </div>
            <div className="services-section">
              <h4 className="services-title">SERVICES</h4>
              <p className="services-description">
                Our expert team is dedicated to addressing your unique needs, from diagnosis to treatment and rehabilitation.
              </p>
              <button className="more-button">
                More <span className="arrow">↗</span>
              </button>
            </div>
            <div className="doctors-section">
              <div className="doctor-avatars">
                <div className="avatar avatar-1"></div>
                <div className="avatar avatar-2"></div>
                <div className="avatar avatar-3"></div>
              </div>
              <p className="doctors-count">550+ Doctors</p>
            </div>
          </div>

          {/* Middle Card - Treatments */}
          <div className="info-card treatments-card">
            <h3 className="card-title">TREATMENTS</h3>
            <p className="card-description">
              Discover a range of personalized orthopedic services designed to enhance your quality of life.
            </p>
          </div>

          {/* Right Card - Online Care */}
          <div className="info-card online-care-card">
            <div className="care-icon">
              <div className="icon-circles">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
              </div>
            </div>
            <h3 className="card-title">ONLINE CARE</h3>
            <p className="card-description">
              1-ON-1 appointments with specialist doctors for you
            </p>
            <button className="contact-button">
              Contact <span className="arrow">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
