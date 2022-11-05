import React from 'react';
import img from '../../../assets/img/userAvatar.jpeg';
import * as S from '../../../style/main/Question.style';
import TagButton from '../Button/TagButtion';
import { Link } from 'react-router-dom';
import { timeCal } from '../../../pages/Question';
import { Viewer } from '@toast-ui/react-editor';

const Question = ({ question }) => {

  return (
    <S.QuestionContainer>
      <S.StatContainer>
        <S.Votes>{`${question.voteCount} votes`}</S.Votes>
        {/* <S.Answers>{`${question.votes} answers`}</S.Answers> */}
        <S.Answers>answer</S.Answers>
        <S.Views>{`${question.viewCount} views`}</S.Views>
      </S.StatContainer>

      <S.ContentContainer>
        <S.Title>
          <Link to={`/questions/${question.questionId}`}>{question.title}</Link>
        </S.Title>
        <S.Content>  <Viewer initialValue={question.content} /></S.Content>
        {/*{question.content}</S.Content> */}
        <S.FooterContainer>
          {question.tagNames.map((el, idx) => (
            <TagButton key={idx}>{el}</TagButton>
          ))}

          <S.UserInfoContainer>
            <img src={img} alt='userImg' />
            <Link className='aTag' to={`/users/${question.user.userId}/profile`}>
              <div className='userName'>{question.user.username}</div>
            </Link>
            {/* <div className='askCount'>{question.askCount}</div> */}
            <div className='userTime'>
              {timeCal(question.createdAt)}
            </div>
          </S.UserInfoContainer>
        </S.FooterContainer>
      </S.ContentContainer>
    </S.QuestionContainer>
  );
};

export default Question;
