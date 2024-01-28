import React from 'react'
import { FaSearch } from "react-icons/fa";
import '../css/header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();


  return (
    <>
      <div className='header1'>
        <div className='header1-left'>
          <div className='logo' onClick={() => navigate('/')}>ESG</div>
        </div>
        <div className='header1-right'>
          <div onClick={() => navigate('/Login')}>로그인</div>
          <div onClick={() => navigate('/Join')}>회원가입</div>
          <div><input type="text"/></div>
          <div><FaSearch/></div>
        </div>
      </div>
    </>
  )
}
