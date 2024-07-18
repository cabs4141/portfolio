import React from "react";
import "./tech.css";

const TechStack = () => {
  return (
    <div>
      <div className="card">
        <div className="card__border"></div>
        <div className="card_title__container">
          <p className="card_paragraph">Tech stack that I often use</p>
          <span className="card_title">MERN Stack</span>
        </div>
        <hr className="line" />
        <ul className="card__list">
          <li className="card__list_item">
            <span className="check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
              </svg>
            </span>
            <span className="list_text">My SQL</span>
          </li>
          <li className="card__list_item">
            <span className="check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
              </svg>
            </span>
            <span className="list_text">Express JS</span>
          </li>
          <li className="card__list_item">
            <span className="check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
              </svg>
            </span>
            <span className="list_text">React JS</span>
          </li>
          <li className="card__list_item">
            <span className="check">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
                <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path>
              </svg>
            </span>
            <span className="list_text">Node JS</span>
          </li>
          <div className="mb-0 xl:mb-3"></div>
        </ul>
      </div>
    </div>
  );
};

export default TechStack;
