import React from 'react';
import styled from 'styled-components';
import AnswerEditEditor from './AnswerEditEditor';
import AnswerEditFooter from './AnswerEditFooter';
import { useRecoilState } from 'recoil';
import { editAnswerState } from '../../atoms/atom';

const AnswerEditBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 20px;
  flex-basis: 800px;
  background-color: white;
  max-width: 800px;
  & h1 {
    font-size: 15px;
    margin-bottom: 6px;
    font-weight: 550;
  }

  & p {
    color: hsl(210, 8%, 35%);
    font-size: 13px;
    margin-bottom: 7px;
  }

  & input {
    width: 100%;
    margin-bottom: 10px;
    padding: 8px 10px;
  }

  & .tagInput-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    > ol {
      display: flex;
    }
  }

  & .tag-container {
    display: flex;
    color: #39739d;
    background-color: #e1ecf4;
    padding: 4.8px 6px;
    margin: 2px;
    gap: 5px;
    border-radius: 3px;
  }

  & .tag-name {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #39739d;
    font-size: 12px;
    white-space: nowrap;
  }

  & .tagInput-button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;

    color: #39739d;
    background-color: #e1ecf4;
    border: none;
  }

  & .tag-input {
    margin-bottom: 0px;
  }
`;

const AnswerEditBody = () => {
  return (
    <AnswerEditBodyContainer>
      <div className='footer-container'>
        <p>Your edit will be placed in a queue until it is peer reviewed.</p>
        <p>
          We welcome edits that make the post easier to understand and more
          valuable for readers. Because community members review edits, please
          try to make the post substantially better than how you found it, for
          example, by fixing grammar or adding additional resources and
          hyperlinks.
        </p>
      </div>
      <div className='body'>
        <h1>Body</h1>
        <p>
          Include all the information someone would need to answer your question
        </p>
        <AnswerEditEditor></AnswerEditEditor>
      </div>
      <AnswerEditFooter />
    </AnswerEditBodyContainer>
  );
};

export default AnswerEditBody;

//태그 입력창
//태그 내용 입력  -> 엔터 입력 -> 태그 버튼 생성 후 input 안에 들어가서 표시 -> 반복 ->
