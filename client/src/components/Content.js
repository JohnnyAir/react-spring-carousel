import React from "react";
import styled from "styled-components";

const SlideContentWrapper = styled.div`
  text-align: ${({ position }) => position || "center"};
  /*width: 50%;*/
  h4 {
    font-size: 25px;
  }
  p {
    font-size: 15px;
  }
`;

const ContentText = props => {
  const { style, header, children, description, ...otherProps } = props;

  return (
    <SlideContentWrapper {...otherProps} style={{ ...style }}>
      <div>
        <h4> {header} </h4>
        <p> {children || description} </p>
      </div>
    </SlideContentWrapper>
  );
};

export { ContentText };
