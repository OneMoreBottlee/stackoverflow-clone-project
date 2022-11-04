import React, { useEffect, useState } from 'react';

import { Link, NavLink, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import UserImgLink from '../../assets/img/user_porfile.png';
import { loginIdstorige, setuserEditstate } from '../../atoms/atom';
import { useAxios } from '../../util/useAxios';
import * as S from './../../style/auth/UserPage.style';
import UserInfo from './UserInfo';
import { useNavigate, useParams } from 'react-router-dom';
import { isLoginState } from '../../atoms/atom';
import { useRecoilState } from 'recoil';
import { timeCal } from '../../pages/Question';

const UserPage = () => {
  // userName = '홍길동';
  // createDay = '5';
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const loginId = useRecoilValue(loginIdstorige);
  const navigate = useNavigate();

  const [userEditData, setUserEditData] = useRecoilState(setuserEditstate);

  const { response, loading, error } = useAxios({
    method: 'GET',
    url: `api/users/${loginId}`,
    withCredentials: true,
  });
  let userName, createDay, message;
  useEffect(() => {
    if (response) {
      createDay = timeCal(response.user.createdAt);
      userName = response.user.username;
      message = response.user.message ? response.user.message : ' ';
      console.log('userpage usernam. aboutme', userName, message);
      setUserEditData({
        userName,
        message,
        createDay,
      });
    }
  }, [response]);

  const {
    response: response2,
    error: error2,
    clickFetchFunc,
  } = useAxios(
    {
      method: 'GET',
      url: `api/users/${loginId}`,
      withCredentials: true,
    },
    false
  );

  const logoutHandler = () => {
    console.log('로그아웃 버튼 누름');
    clickFetchFunc({
      method: 'POST',
      url: '/auth/logout',
      headers: {
        'Content-Type': `application/json`,
      },
      withCredentials: true,
      data: { 'user-id': 123 },
    });
    setIsLogin(false);
  };

  useEffect(() => {
    response && console.log('로그인후  응답은', response);
    error && console.log('로그인후  에러는', error);
    response2 && console.log('로그아웃  응답은', response2);
    error2 && console.log('로그아웃  에러는', error2);
    if (response) {
      setIsLogin(true);
      // navigate(-1);
    }
    if (response2) {
      setIsLogin(false);
      navigate(-1);
    }
  }, [response, error, response2, error2]);
  // console.log('유저 아이디', loginId);
  // response && console.log('리스폰스', response, response.user)
  // error && console.log('에러', error.message, error)
  return (
    <S.UserPageContainer>
      {response ? (
        <S.UserNameCard>
          <S.UserImg src={UserImgLink}></S.UserImg>
          <S.UserNameWrap>
            <S.UserName>{response.user.username}</S.UserName>
            <S.SignDay>
              <svg
                aria-hidden='true'
                className='svg-icon iconCake'
                width='18'
                height='18'
                viewBox='0 0 18 18'
              >
                <path d='M9 4.5a1.5 1.5 0 0 0 1.28-2.27L9 0 7.72 2.23c-.14.22-.22.48-.22.77 0 .83.68 1.5 1.5 1.5Zm3.45 7.5-.8-.81-.81.8c-.98.98-2.69.98-3.67 0l-.8-.8-.82.8c-.49.49-1.14.76-1.83.76-.55 0-1.3-.17-1.72-.46V15c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-2.7c-.42.28-1.17.45-1.72.45-.69 0-1.34-.27-1.83-.76Zm1.3-5H10V5H8v2H4.25C3 7 2 8 2 9.25v.9c0 .81.91 1.47 1.72 1.47.39 0 .77-.14 1.03-.42l1.61-1.6 1.6 1.6a1.5 1.5 0 0 0 2.08 0l1.6-1.6 1.6 1.6c.28.28.64.43 1.03.43.81 0 1.73-.67 1.73-1.48v-.9C16 8.01 15 7 13.75 7Z'></path>
              </svg>
              Member for {userEditData.createDay}
            </S.SignDay>
          </S.UserNameWrap>
          <S.ButtonWarp>
            <S.Button>
              <svg
                aria-hidden='true'
                className='svg-icon iconPencil'
                width='18'
                height='18'
                viewBox='0 0 18 18'
              >
                <path d='m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0ZM2 13.13l8.5-8.5 2.88 2.88-8.5 8.5H2v-2.88Z'></path>
              </svg>
              Edit profile
            </S.Button>
            {/* <S.Button onClick={logoutHandler} className='logout'> */}
            <S.Button onClick={logoutHandler} className='logout'>
              Log out
            </S.Button>
          </S.ButtonWarp>
        </S.UserNameCard>
      ) : (
        error.message
      )}

      <S.ProfileTab>
        <S.ProfileBtn>
          <NavLink to='/user/profile'>Profile</NavLink>
        </S.ProfileBtn>
        <S.ProfileBtn>
          <NavLink to='/user/setting'>Settng</NavLink>
        </S.ProfileBtn>
        <Outlet />
      </S.ProfileTab>
    </S.UserPageContainer>
  );
};

export default UserPage;
