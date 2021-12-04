import React, { Component } from 'react';
import './style.css';

export class Loader extends Component {
  render() {
    return (
      this.props.loading ?
      <div tabIndex="0" className="loader-overlay is-active is-full-page" aria-label="Loading">
        <div className="loader-background"></div>
        <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" width="64" height="64" stroke="red">
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
              <circle strokeOpacity=".25" cx="18" cy="18" r="18"/>
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="0.8s"
                  repeatCount="indefinite"/>
              </path>
            </g>
          </g>
        </svg>
      </div> : <div />
    )
  }
}

export default Loader;
