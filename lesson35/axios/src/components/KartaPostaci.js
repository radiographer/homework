import React from "react";
import styled from "styled-components";

const Card = styled.div`
  /* background-color: ${({ theme }) => theme.mainColor}; */
`;

const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Paragraph = styled.p`
  color: ${({ index }) => (index % 2 ? "blue" : "green")};
  /* color: ${(props) => {
    console.log(props);
    return props.index % 2 ? "blue" : "green";
  }}; */
`;

// const EnhancedParagraph = styled(Paragraph)`
//   font-size: 40px;
// `;

function KartaPostaci({ name, image, species, index }) {
  return (
    <Card data-name={name}>
      <img src={image} alt={name} />
      <div className="container">
        <Title>{name}</Title>
        <Paragraph index={index}>{species}</Paragraph>
        {/* <EnhancedParagraph index={index}>{species}</EnhancedParagraph> */}
      </div>
    </Card>
  );
}

export default KartaPostaci;
