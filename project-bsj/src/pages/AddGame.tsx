import React from 'react'
import '../css/addGame.css';

export default function AddGame() {
  return (
    <div className='current-page-container'>
      <div className='addgame-container'>
        <h3 className='addgame-title'>게임 등록</h3>
          <label>
            <span>게임명</span>
            <input type="text" id='gameName' className='input-size' />
          </label>
          <label>
            <span>장르</span>
            <select id="type">
              <option>장르1</option>
              <option>장르2</option>
              <option>장르3</option>
            </select>
          </label>
          <label>
            <span>콘솔</span>
            <select id="console">
              <option>콘솔1</option>
              <option>콘솔2</option>
              <option>콘솔3</option>
            </select>
          </label>
          <label>
            <span>연령등급</span>
            <select id="rating">
              <option>전체이용가</option>
              <option>12세이용가</option>
              <option>15세이용가</option>
              <option>청소년이용불가</option>
            </select>
          </label>
          <label>
            <span>최소 인원수</span>
              <input type="number" id="headcount-low" />
          </label>
          <label>
            <span>최대 인원수</span>
            <input type="number" id="headcount-high" />
          </label>
          <label>
            <span>언어</span>
            <input type="text" id='language' placeholder='띄어쓰기 없이 콤마로 구분하여 입력 부탁드립니다. ex)한국어,일본어' className='input-size'/>
          </label>
          <label>
            <span>출시일</span>
            <input type="date" id='releasedate' />
          </label>
          <label>
            <span>가격</span>
            <input type="text" id='price' placeholder='숫자로 입력 부탁드립니다. ex)45,000' className='input-size'/>
          </label>
          <label>
            <span>평균 플레이 시간</span>
              <input type="number" id="playtime" className='input-size'/>
          </label>
          <label>
            <span>타이틀 이미지</span>
              <input type="file" id="image" />
          </label>
          <button className='add-button'>등록</button>
      </div>
    </div>
  )
}
