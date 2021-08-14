import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./aboutStyle";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} alt="coding" />
      <HeaderContainer>
        <h1>
          About DevOps Engineer <span>Ahmet Tortumlu</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h1>I'm Ahmet.</h1>
        <h2>I’m currently working at DeepInfo as Devops Engineer.</h2>
        <h2>
          I've worked on different cloud service providers such as GCP, Digital Ocean and AWS Services. 
        </h2>
        <h2>
          <a href="mailto:ahmettortumlu25@gmail.com">Send email</a> :
          ahmettortumlu25@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
