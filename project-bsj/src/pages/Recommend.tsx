import React from 'react'
import '../css/recommend.css';

export default function Recommend() {
  return (
    <>
      <div className='filter-container'>
        <div className='filter-console'>
          <span>콘솔</span>
          <ul>
            <li className='border-separator'>닌텐도 스위치</li>
            <li className='border-separator'>PS4</li>
            <li className='border-separator'>PS5</li>
            <li className='border-separator'>Xbox</li>
            <li >기타</li>
          </ul>
        </div>
        <div className='filter-type'>
          <span>장르</span>
          <ul>
            <li className='border-separator'>액션</li>
            <li className='border-separator'>RPG</li>
            <li className='border-separator'>어드벤처</li>
            <li className='border-separator'>파티</li>
            <li className='border-separator'>전략</li>
            <li className='border-separator'>음악</li>
            <li className='border-separator'>스포츠</li>
            <li className='border-separator'>아케이드</li>
            <li className='border-separator'>격투</li>
            <li className='border-separator'>퍼즐</li>
            <li className='border-separator'>레이싱</li>
            <li className='border-separator'>시뮬레이션</li>
            <li className='border-separator'>슈팅</li>
            <li className='border-separator'>보드</li>
            <li className='border-separator'>기타</li>
            <li className='border-separator'>트레이닝</li>
            <li className='border-separator'>학습</li>
            <li className='border-separator'>실용</li>
            <li className='border-separator'>커뮤니케이션</li>
          </ul>
        </div>
      </div>
    </>
  )
}
