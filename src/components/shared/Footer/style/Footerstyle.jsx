import React from "react";

const Footerstyle = () => {
  return (
    <style jsx>{`
      .footer {
        background-color: #beebc2;
        color: #ffffff;
        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .footer a {
        color: black;
        text-decoration: none;
        margin: 0.5rem;
      }
      .footer a:hover {
        color: #f95700;
        font-weight: bold;
      }
      .footer-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
      }
      .footer-logo {
        margin-bottom: 1rem;
      }
      .logo-img {
        width: 80px;
        height: auto;
      }
      .footer-text {
        text-align: center;
        margin-bottom: 1rem;
      }
      .footer-links,
      .condition {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }
      .divider {
        width: 100%;
        height: 1px;
        background: radial-gradient(
          50% 50% at 50% 50%,
          #32794f 0%,
          rgba(50, 121, 79, 0) 100%
        );
        margin: 1rem 0;
      }
      .footer-socials {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
      }
      .social-icon {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #ffffff;
        border-radius: 50%;
      }
      .footer-bottom {
        text-align: center;
        font-size: 0.875rem;
        color: #000000;
      }
      @media (min-width: 768px) {
        .footer-links,
        .condition {
          flex-direction: row;
        }
      }
    `}</style>
  );
};

export default Footerstyle;
