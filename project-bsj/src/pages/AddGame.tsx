import React, { ChangeEvent, useState } from 'react'
import '../css/addGame.css';
import index from '.';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export default function AddGame() {

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
    img: string;
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
    playtime: '',
    img: ''
  })

  function encodeImageFileAsURL(element: HTMLInputElement, callback: (result: string) => void) {
    const file = element.files && element.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {id, value} = e.target;
    setGameData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleClick = async () => {
    try {
      const emptyFields = Object.entries(gameData)
        .filter(([key, value]) => !value.trim())
        .map(([key]) => key);
      if (emptyFields.length > 0) {
        alert(`${emptyFields.join(', ')}을(를) 입력하세요.`);
        return;
      }

      // 이미지 파일을 base64로 인코딩
      const imageInput = document.getElementById('img') as HTMLInputElement;
      let imageData = '';
      if (imageInput.files && imageInput.files[0]) {
        await new Promise<void>((resolve) => {
          encodeImageFileAsURL(imageInput, (result) => {
            imageData = result;
            resolve();
          });
        });
      }

      // 게임 데이터와 이미지 데이터를 합치기
      const gameDataWithImage: GameData = { ...gameData, img: imageData };

      // 목서버로 데이터 전송
      const response = await axios.post(`${API_URL}/game`, gameDataWithImage);

      // 응답 처리

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
              <input type="file" id="img" onChange={handleChange}/>
          </label>
          <button className='add-button' onClick={handleClick}>등록</button>
      </div>
    </div>
  )
}
