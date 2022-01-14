import React, { useState } from "react";
import styled from "styled-components";
import { usersTestimonial } from "./../data/testimonials";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState(usersTestimonial[0]);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  setTimeout(() => {
    setTestimonial(usersTestimonial[testimonialIndex]);
    setTestimonialIndex(testimonialIndex + 1);
  }, 10000);

  return (
    <TestimonialWrapper>
      <div class="testimonial-container">
        <div class="progress-bar"></div>
        <div class="fas fa-quote-right fa-quote"></div>
        <div class="fas fa-quote-left fa-quote"></div>
        <p class="testimonial">{testimonial.text}</p>
        <div class="user">
          <img
            src={testimonial.photo}
            alt="customer-image"
            class="user-image"
          />
          <div class="user-details">
            <h4 class="username">{testimonial.name}</h4>
            <p class="role">{testimonial.position}</p>
          </div>
        </div>
      </div>
    </TestimonialWrapper>
  );
};

const TestimonialWrapper = styled.div`
  .testimonial-container {
    background-color: #476ce4;
    color: #fff;
    border-radius: 15px;
    margin: 20px auto;
    padding: 50px 80px;
    max-width: 768px;
    position: relative;
  }

  .fa-quote {
    color: rgba(255, 255, 255, 0.3);
    font-size: 28px;
    position: absolute;
    top: 70px;
  }

  .fa-quote-right {
    left: 40px;
  }

  .fa-quote-left {
    right: 40px;
  }

  .testimonial {
    line-height: 28px;
    text-align: justify;
  }

  .user {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user .user-image {
    border-radius: 50%;
    height: 75px;
    width: 75px;
    object-fit: cover;
  }

  .user .user-details {
    margin-left: 10px;
  }

  .user .username {
    margin: 0;
  }

  .user .role {
    font-weight: normal;
    margin: 10px 0;
  }

  .progress-bar {
    background-color: #fff;
    height: 4px;
    width: 100%;
    animation: grow 10s linear infinite;
    transform-origin: left;
  }

  @keyframes grow {
    0% {
      transform: scaleX(0);
    }
  }

  @media (max-width: 768px) {
    .testimonial-container {
      padding: 20px 30px;
    }

    .fa-quote {
      display: none;
    }
  }
`;

export default Testimonial;
