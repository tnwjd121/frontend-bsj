import React, { ChangeEvent, useState } from 'react'
import '../css/login.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const API_URL = 'http://localhost:5000';

interface LoginData {
  email: string,
  password: string
}

export default function Login() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: ''
  })

  const handChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {id, value} = e.target;
    setLoginData((prevData) => ({
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
        setCookie('token', true, { path: '/' });
          alert('로그인 성공')
      } else {
        alert('로그인 실패하였습니다.')
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
    }
  }

  const handleLogout = () => {
    removeCookie('token', { path: '/' });
  };


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
