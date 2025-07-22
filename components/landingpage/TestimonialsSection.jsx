import React from 'react'
import styles from '../../styles/landingpage/TestimonialsSection.module.scss'

const TestimonialsSection = () => {
  const testimonials = [
  {
    name: "Rahul Reddy",
    handle: "ACL Reconstruction - Hyderabad",
    avatar: "https://images.unsplash.com/photo-1668370614791-0d00961d8ca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aHlkZXJhYmFkJTIwcHJvZmlsZSUyMHBob3Rvc3xlbnwwfDB8MHx8fDI%3D",
    text: "I injured my knee playing cricket. Dr. Bhanu performed an ACL reconstruction with robotic assistance. Within weeks, I was back on my feet. Truly grateful for the amazing care!"
  },
  {
    name: "Meena Kumari",
    handle: "Hip Replacement - Gachibowli",
    avatar: "https://images.unsplash.com/photo-1603774058622-b549d9278b59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxoeWRlcmFiYWQlMjBwcm9maWxlJTIwcGhvdG9zfGVufDB8MHwwfHx8Mg%3D%3D",
    text: "The pain in my hip was unbearable until I visited Dr. Bhanu’s clinic. His robotic surgery and the recovery plan helped me walk without support in less than 2 months."
  },
  {
    name: "Syed Imran",
    handle: "Emergency Fracture Care - Old City",
    avatar: "https://images.unsplash.com/photo-1745426358430-7d88183c1b90?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "After a bike accident at midnight, I was rushed to Dr. Bhanu's emergency team. They managed my complex leg fracture with such speed and professionalism. Hyderabad is lucky to have him."
  },
  {
    name: "Pooja Agarwal",
    handle: "Spine Surgery - Banjara Hills",
    avatar: "https://images.unsplash.com/photo-1639325722373-deb657d37510?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8",
    text: "Years of back pain vanished after the spinal surgery done by Dr. Bhanu. His team guided me every step of the way. I highly recommend his clinic to anyone in Hyderabad."
  },
  {
    name: "Kiran Kumar",
    handle: "Sports Injury - Jubilee Hills",
    avatar: "https://images.unsplash.com/photo-1733816967057-fa8264a53f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ2fHxoeWRlcmFiYWQlMjBwcm9maWxlJTIwcGhvdG9zfGVufDB8MHwwfHx8Mg%3D%3D",
    text: "As a footballer, my ankle injury was scary. But Dr. Bhanu’s approach to sports medicine was top-class. I’m back on the ground thanks to him!"
  },
  {
    name: "Ayesha Fatima",
    handle: "Robotic Knee Surgery - Tolichowki",
    avatar: "https://images.unsplash.com/photo-1581509019622-9e29733e3044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGh5ZGVyYWJhZCUyMHByb2ZpbGUlMjBwaG90b3N8ZW58MHwwfDB8fHwy",
    text: "The robotic knee replacement surgery was smoother than I expected. My recovery was fast and pain-free. I'm so glad I found Dr. Bhanu’s clinic in Hyderabad."
  },
  {
    name: "Venkatesh Naidu",
    handle: "Joint Replacement - Kukatpally",
    avatar: "https://images.unsplash.com/photo-1727312413229-3c4b6605afdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGh5ZGVyYWJhZCUyMHByb2ZpbGUlMjBwaG90b3N8ZW58MHwwfDB8fHwy",
    text: "At 62, I was scared of surgery. But Dr. Bhanu’s experience and calm nature made me confident. Today, I walk 2km daily — pain-free!"
  },
  {
    name: "Shruti Ramesh",
    handle: "Physiotherapy - Madhapur",
    avatar: "https://images.unsplash.com/photo-1732829099315-473d738e523f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxoeWRlcmFiYWQlMjBwcm9maWxlJTIwcGhvdG9zfGVufDB8MHwwfHx8Mg%3D%3D",
    text: "The post-op physiotherapy care was top-notch. The team created a plan tailored just for me. I felt supported every day of my recovery journey."
  },
  {
  name: "Sana Parveen",
  handle: "Orthopedic Trauma - Charminar",
  avatar: "https://images.unsplash.com/photo-1701365676249-9d7ab5022dec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHlkZXJhYmFkJTIwcHJvZmlsZSUyMHBob3Rvc3xlbnwwfDB8MHx8fDI%3D",
  text: "After falling from stairs, my wrist was badly injured. Dr. Bhanu’s orthopedic trauma team handled it perfectly. I was treated with care and compassion throughout."
},
{
  name: "Ravi Teja",
  handle: "Meniscus Repair - Ameerpet",
  avatar: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=150&h=150&fit=crop&crop=face",
  text: "Got my meniscus tear repaired through arthroscopy. The surgery was quick and recovery was well-managed by Dr. Bhanu’s physiotherapy unit. Superb experience."
},
{
  name: "Jyoti Deshmukh",
  handle: "Frozen Shoulder Relief - Begumpet",
  avatar: "https://images.unsplash.com/photo-1739429945494-1d27f2ba95f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
  text: "I was struggling with a frozen shoulder for months. Thanks to Dr. Bhanu’s personalized treatment plan, I’m pain-free and active again!"
},
{
  name: "Imtiaz Ali",
  handle: "Pediatric Ortho - Mehdipatnam",
  avatar: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=150&h=150&fit=crop&crop=face",
  text: "My 8-year-old son had a bone deformity corrected at this clinic. The pediatric ortho care was excellent, and the environment was friendly for kids."
},
{
  name: "Lakshmi Narayana",
  handle: "Accident Recovery - LB Nagar",
  avatar: "https://images.unsplash.com/photo-1608230951221-f88ddbcfebb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGh5ZGVyYWJhZCUyMHByb2ZpbGUlMjBwaG90b3N8ZW58MHwwfDB8fHwy",
  text: "After a road accident, I had multiple fractures. Dr. Bhanu and his team took complete charge. Their systematic care and surgical skills are unmatched."
},
{
  name: "Tanya Reddy",
  handle: "Osteoarthritis Treatment - Secunderabad",
  avatar: "https://images.unsplash.com/photo-1729101146067-4432849b7029?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
  text: "Dr. Bhanu’s clinic helped me manage my knee osteoarthritis without surgery. Their approach is ethical, practical, and deeply patient-focused."
}
];


  // Create multiple sets for continuous scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section className={styles.testimonialsSection} id="testimonials">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            What Our <span className="gradientText">Patients Say</span>
          </h2>
          <p className={styles.sectionDescription}>
            Real stories from real patients who have experienced exceptional orthopedic care with Dr. Bhanu
          </p>
        </div>

        {/* Marquee Container */}
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.avatar}>
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>{testimonial.name}</h4>
                    <p className={styles.authorHandle}>{testimonial.handle}</p>
                  </div>
                </div>
                <p className={styles.testimonialText}>
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>

          {/* Fade Gradients */}
          <div className={styles.fadeLeft}></div>
          <div className={styles.fadeRight}></div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
