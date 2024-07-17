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
        height: Hug (27px) px;
        margin: 30px;
        justify: space-between;
        opacity: 0px;
      }
      .footer a:hover {
        color: blue;
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
      .condition {
        font-size: 10px;
        margin-bottom: 20px;
      }
      .divider {
        width: 1240px;
        height: 4px;
        top: 283px;
        left: 100px;
        gap: 0px;
        opacity: 0px;

        background: radial-gradient(
          50% 50% at 50% 50%,
          #32794f 0%,
          rgba(50, 121, 79, 0) 100%
        );
      }
      @media (min-width: 768px) {
        .footer-container {
          flex-direction: row;
          text-align: left;
        }
      }
      .footer-logo {
        margin-bottom: 1rem;
      }
      .footer-logo h1 {
      }
      .footer-links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      @media (min-width: 768px) {
        .footer-links {
          flex-direction: row;
        }
      }
    `}</style>
  );
};

export default Footerstyle;
