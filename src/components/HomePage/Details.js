import React from "react";
import { Container } from "semantic-ui-react";

function Details() {
  return (
    <Container
      textAlign="center"
      text
      style={{ maxWidth: "60%", overflow: "auto", align: "center" }}
    >
      <span className="txt">
        Upload your Data and get it labeled for your Machine Learning training
        model!
      </span>
    </Container>
  );
}

export default Details;
