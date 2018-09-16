import React from "react";

export default css`
  .header {
    background-color: #3490dc;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: flex;
    padding: 0.5rem;
  }

  @media (min-width: 992px) {
    .header {
      margin-top: 1rem;
    }
  }

  .header__title {
    margin-left: 0.5rem;
    margin-top: 0.25rem;
  }

  .homepage-title {
    font-size: 20px;
    left: 0.3rem;
    position: relative;
    top: -0.1rem;
  }
`;
