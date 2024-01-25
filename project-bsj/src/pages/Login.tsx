import React, { ChangeEvent, useState } from 'react'
import '../css/login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:5000';

export default function Login() {

  interface LoginData {
    email: string,
    password: string
  }

  const [loginData, SetLoginData] = useState<LoginData>({
    email: '',
    password: ''
  })

  const handChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {id, value} = e.target;
    SetLoginData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleClick = async () => {
    try {
      // 로그인 시도
      const response = await axios.get(`${API_URL}/users?email=${loginData.email}&password=${loginData.password}`);

      // 로그인 성공 여부 확인
      if (response.data.length > 0) {
          // 해당 사이트로 가게 만들기
      } else {
        alert('로그인 실패하였습니다.')
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
    }
  }


  return (
    <>
      <div className='login-box'>
        <h2 className='login-title'>Login</h2>
        <label>
          <input type="text" id="email" placeholder='Email' onChange={handChange}/>
        </label>
        <label>
          <input type="password" id="password" placeholder='Password' onChange={handChange}/>
        </label>
        <button className='login-button' onClick={handleClick}>Login</button>
      </div>
    </>

  )
}
