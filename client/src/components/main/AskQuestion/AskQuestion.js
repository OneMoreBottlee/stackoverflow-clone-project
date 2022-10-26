import React from "react";
import styled from "styled-components";
import AskButton from "../Button/AskButton";


const AskQuestionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 12px;

  h1{
    font-size: 27px;
    margin: 0 12px 12px 0;
    flex-grow: 1;
  }

  div{
    width: 103px;
    height: 38px;
    background-color: #0A95FF;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius : 3px;
    font-size: 13px;
    margin-left: auto;
    margin-bottom: 12px;
  }
`;

const AskQuestion = () => {
  return (
    <AskQuestionContainer>
      <h1>All Questions</h1>
      <AskButton>Ask Question</AskButton>
    </AskQuestionContainer>
  );
};

export default AskQuestion;