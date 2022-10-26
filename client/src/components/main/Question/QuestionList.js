import React from "react";
import styled from "styled-components";
import Question from "./Question";


const QuestionListContainer = styled.div`

`;

const QuestionList = ({ questionList }) => {
  return (
    <QuestionListContainer>
      <ul>
        {questionList.map((el, idx) => {
          return (
            <li key={idx}>
              <Question question={el} />
            </li>
          );
        })}
      </ul>
    </QuestionListContainer>
  );
};

export default QuestionList;