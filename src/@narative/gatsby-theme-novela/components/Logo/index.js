import React from 'react';
import styled from "@emotion/styled";

// import mediaqueries from "@styles/media";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
const Logo = ({ fill }) => {
  return (
    <LogoContainer fill={fill}>
      Thrivin.
    </LogoContainer>
  );
}

export default Logo;

const lightStyles = `
  color: black;
  text-shadow: 0px 16px 6px #00000026;
`;

const darkStyles = `
  color: white;
  text-shadow: 0px 16px 6px #ffffff14;
`;

const LogoContainer = styled.div`
  font-size: 3rem;
  font-weight: 600;
  ${props => props.fill === '#000' ? lightStyles : darkStyles }
`;
