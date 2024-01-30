import React, { ChangeEvent, useState } from 'react'
import '../css/addGame.css';
import index from '.';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export default function AddGame() {
  const [imageBlob, setImageBlob] = useState<Blob | null>(null);
  const navigate = useNavigate();

  interface GameData {
    gameName: string;
    genre: string;
    console: string;
    rating: string;
    headcountLow: string;
    headcountHigh: string;
    language: string;
    releasedate: string;
    price: string;
    playtime: string;
    img?: Blob | undefined;
  }

  const [gameData, setGameData] = useState<GameData>({
    gameName: '',
    genre: '',
    console: '',
    rating: '',
    headcountLow: '',
    headcountHigh: '',
    language: '',
    releasedate: '',
    price: '',
    playtime: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {id, value} = e.target;
    setGameData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imageInput = e.target as HTMLInputElement;
    const selectedFile = imageInput.files?.[0];

    if (selectedFile) {
      const blob = new Blob([selectedFile]);
      setImageBlob(blob);
    }
  };
  const handleClick = async () => {
    try {
      const emptyFields = Object.entries(gameData)
        .filter(([key, value]) => !value || (typeof value === 'string' && !value.trim()))
        .map(([key]) => key);

      if (emptyFields.length > 0) {
        alert(`${emptyFields.join(', ')}을(를) 입력하세요.`);
        return;
      }

      // 이미지 Blob을 게임 데이터에 추가
      setGameData((prevData) => ({
        ...prevData,
        img: imageBlob !== null ? imageBlob : undefined,  // null 대신 undefined 반환
      }));

      // 목서버로 데이터 전송 및 응답 받기
      const response = await axios.post(`${API_URL}/game`, gameData, {
        headers: {
          'Content-Type': 'application/json',  // 이미지를 Blob으로 보내므로 Content-Type 변경
        },
        transformResponse: [],  // 필요에 따라 다른 변환 함수를 추가
      });

      // 응답 처리
      console.log('게임 등록 성공:', response.data);

      // 성공적으로 등록되면 페이지를 이동하거나 다른 작업을 수행할 수 있습니다.
      // 예를 들어, 등록 후 목록 페이지로 이동
      // navigate('/game-list');
    } catch (error) {
      console.error('게임 등록 오류:', error);
    }
  };

  type Genre = string;
  const genres: Genre[] = [
    '액션', 'RPG', '어드벤처', '파티', '전략',
    '음악', '스포츠', '아케이드', '격투', '퍼즐',
    '레이싱', '시뮬레이션', '슈팅', '보드', '실용',
    '트레이닝', '학습', '기타'
  ]

  type Console = string;
  const consoles: Console[] = [
    '닌텐도스위치', 'PS4', 'PS5', 'Xbox', '기타'
  ]
  return (
    <div className='current-page-container'>
      <div className='addgame-container'>
        <h3 className='addgame-title'>게임 등록</h3>
          <label>
            <span>게임명</span>
            <input type="text" id='gameName' className='input-size' onChange={handleChange} />
          </label>
          <label>
            <span>장르</span>
            <select id="genre" onChange={handleChange}>
              {genres.map((genre, index) => (
                <option key={index}>{genre}</option>
              ))}
            </select>
          </label>
          <label>
            <span>콘솔</span>
            <select id="console" onChange={handleChange}>
              {consoles.map((console, index)=> (
                <option key={index}>{console}</option>
              ))}
            </select>
          </label>
          <label>
            <span>연령등급</span>
            <select id="rating" onChange={handleChange}>
              <option>전체이용가</option>
              <option>12세이용가</option>
              <option>15세이용가</option>
              <option>청소년이용불가</option>
            </select>
          </label>
          <label>
            <span>최소 인원수</span>
              <input type="number" id="headcountLow" onChange={handleChange}/>
          </label>
          <label>
            <span>최대 인원수</span>
            <input type="number" id="headcountHigh" onChange={handleChange}/>
          </label>
          <label>
            <span>언어</span>
            <input type="text" id='language' placeholder='띄어쓰기 없이 콤마로 구분하여 입력 부탁드립니다. ex)한국어,일본어' className='input-size' onChange={handleChange}/>
          </label>
          <label>
            <span>출시일</span>
            <input type="date" id='releasedate' onChange={handleChange}/>
          </label>
          <label>
            <span>가격</span>
            <input type="text" id='price' placeholder='숫자로 입력 부탁드립니다. ex)45,000' className='input-size' onChange={handleChange}/>
          </label>
          <label>
            <span>평균 플레이 시간</span>
              <input type="number" id="playtime" className='input-size' onChange={handleChange}/>
          </label>
          <label>
            <span>타이틀 이미지</span>
              <input type="file" id="img" onChange={handleImageChange}/>
          </label>
          <button className='add-button' onClick={handleClick}>등록</button>
      </div>
    </div>
  )
}
