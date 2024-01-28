import React, { ChangeEvent, useState } from 'react'
import '../css/join.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000';

export default function Join() {

  const navigate = useNavigate();
  
  interface JoinData {
    email: string;
    password: string;
    passwordConfirm: string
    name: string;
    nickName: string;
    gender: string;
    birth: string;
    phoneNumber: string;
  }
  const [joinData, setJoinData] = useState<JoinData>({
    email: '',
    password:'',
    passwordConfirm: '',
    name: '',
    nickName: '',
    gender: '',
    birth: '',
    phoneNumber:''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setJoinData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleClick = async () => {
    try {
      // 입력창 전부 입력 안하면 회원가입 안되게 하기
      const emptyFields = Object.entries(joinData)
      .filter(([key, value]) => !value.trim())
      .map(([key]) => key);
      
      if (emptyFields.length > 0) {
        alert(`${emptyFields.join(', ')}을(를) 입력하세요.`);
        return;
      }

      // 비밀번호 검증
      if (joinData.password !== joinData.passwordConfirm) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        return;
      }
      // 이메일 주소 같을 경우 로그인 불가
      const existingUser = await axios.get(`${API_URL}/users?email=${joinData.email}`);
      if (existingUser.data.length > 0) {
        alert('이미 등록된 아이디입니다.');
        return;
      }
      const { passwordConfirm, ...dataWithoutPasswordConfirm } = joinData;
      const response = await axios.post(`${API_URL}/users`, dataWithoutPasswordConfirm)
      navigate('/')
    }catch (error) {
      console.error('가입 중 오류 발생:', error)
    }
  }

  return (
    <>
      <div className='join-box'>
        <h2 className='join-title'>회원가입</h2>
        <div className='join-container'>
          <div className='join-container-left'>
          <label>
            <span>아이디(이메일)</span>
            <input type="text" id="email" placeholder='이메일 주소를 입력하세요' onChange={handleChange} />
          </label>
          <label>
            <span>비밀번호</span>
            <input type="password" id="password" placeholder='비밀번호를 입력하세요' onChange={handleChange}/>
          </label>
          <label>
            <span>비밀번호 확인</span>
            <input type="password" id="passwordConfirm" placeholder='비밀번호를 재입력하세요'onChange={handleChange}/>
          </label>
          <label>
            <span>이름</span>
            <input type="text" id="name" placeholder='이름을 입력하세요' onChange={handleChange}/>
          </label>
          </div>
          <div className='join-container-right'>
          <label>
            <span>닉네임</span>
            <input type="text" id="nickName" placeholder='닉네임을 입력하세요' onChange={handleChange}/>
          </label>
          <label>
            <span>성별</span>
            <select id="gender" onChange={handleChange}>
              <option>남성</option>
              <option>여성</option>
            </select>
          </label>
          <label>
            <span>생년월일</span>
            <input type="date" id='birth' onChange={handleChange}/>
          </label>
          <label>
            <span>전화번호</span>
            <input type="text" id="phoneNumber" placeholder='휴대폰번호 입력("-"제외 11자리입력)' onChange={handleChange}/>
          </label>
          </div>
        </div>
        <button className='join-button' onClick={handleClick}>Join</button>
      </div>
    </>

  )
}
