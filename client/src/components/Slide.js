import React, { Component } from "react";
import styled from "styled-components";

const StyledSlide = styled.div`
  display: flex;
  margin-top: 24px;
  align-items: ${({ position }) => position || "center"};
  margin-bottom: 30px;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  text-align: ${({ position }) => position || "center"};
  width: 50%;
  h4 {
    font-size: 25px;
  }
  p {
    font-size: 15px;
  }
`;

const SlideImage = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({ zIndex }) => zIndex || "-2"};
  background-color: ${({ style }) => style || "#18a3a7"};
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ url }) => url});
`;

const Ovelay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${({ opacity }) => opacity || "0.5"};
  z-index: ${({ zIndex }) => zIndex || "-1"};
  position: absolute;
  background-color: ${({ bgColor }) => bgColor || "#000"};
`;

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  render() {
    const { image, overlay, style, content, ...otherProps } = this.props;

    return (
      <StyledSlide {...otherProps} style={{ ...style }}>
        {content}
        <SlideImage {...image} />
        <Ovelay {...overlay} />
      </StyledSlide>
    );
  }
}

export default Slide;
