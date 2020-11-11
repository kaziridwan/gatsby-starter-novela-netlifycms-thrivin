import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <div>
      <svg width="115" height="23" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 23">
        <g id="Layer_2">
          <g id="Layer_1-2">
            <path
              d="M7.89,27.27v-20H.78V4.73h17V7.26H10.7v20Z"
              transform="translate(-0.78 -4.73)"
            />
            <path
              d="M36,27.27V17H23.59V27.27H20.78V4.73h2.81v9.75H36V4.73h2.81V27.27Z"
              transform="translate(-0.78 -4.73)"
            />
            <path
              d="M46,27.27H43.16V4.73h8.45a8.24,8.24,0,0,1,3.79.83,6.12,6.12,0,0,1,2.51,2.35,6.84,6.84,0,0,1,.89,3.54,6.85,6.85,0,0,1-1.21,4.07,6.15,6.15,0,0,1-3.32,2.39l5.21,9.36H56.19l-4.83-8.92H46Zm0-11.4h5.39a4.67,4.67,0,0,0,3.35-1.13,4.2,4.2,0,0,0,1.18-3.2,4.11,4.11,0,0,0-1.23-3.17,4.88,4.88,0,0,0-3.43-1.14H46Z"
              transform="translate(-0.78 -4.73)"
            />
            <path
              d="M62.33,27.27V4.73h2.81V27.27Z"
              transform="translate(-0.78 -4.73)"
            />
            <path
              d="M76,27.27,67.72,4.73h3l6.71,19.12h.09l6.7-19.12h3L78.81,27.27Z"
              transform="translate(-0.78 -4.73)"
            />
            <path
              fill="#7a8085"
              d="M89.7,27.27V4.73h2.82V27.27Z"
              transform="translate(-0.78 -4.73)"
            />
            <path
              fill="#7a8085"
              d="M96.89,27.27V4.73h2.73L112,22.43h.14V4.73h2.78V27.27h-2.73L99.81,9.63h-.14V27.27Z"
              transform="translate(-0.78 -4.73)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
