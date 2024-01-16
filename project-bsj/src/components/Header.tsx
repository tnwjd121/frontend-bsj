import React from 'react'
import { FaSearch } from "react-icons/fa";
import '../css/header.css';

export default function Header() {
  return (
    <>
      <div className='header1'>
        <div className='header1-left'>
          <div className='logo'>ESG</div>
        </div>
        <div className='header1-right'>
          <div>로그인</div>
          <div>회원가입</div>
          <div><input type="text"/></div>
          <div><FaSearch/></div>
        </div>
      </div>
      <div className='header2'>
        <div className='border-separator'>게임 등록</div>
        <div className='border-separator'>게임 추천</div>
        <div className='border-separator'>보유 목록</div>
        <div>찜 목록</div>
      </div>
    </>
  )
}
