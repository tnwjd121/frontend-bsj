import React from 'react'
import '../css/like.css';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';

export default function Like() {
  type Genre = string;
  const genres: Genre[] = [
    '액션', 'RPG', '어드벤처', '파티', '전략',
    '음악', '스포츠', '아케이드', '격투', '퍼즐',
    '레이싱', '시뮬레이션', '슈팅', '보드', '실용',
    '트레이닝', '학습', '기타'
  ]

  const renderListItems = () => {
    const rankings = [
      { id: 1, image: '이미지', gameName: '게임명', stars: '별점', recommendations: '추천수' },
      { id: 2, image: '이미지', gameName: '게임명', stars: '별점', recommendations: '추천수' },
      { id: 3, image: '이미지', gameName: '게임명', stars: '별점', recommendations: '추천수' },
      { id: 4, image: '이미지', gameName: '게임명', stars: '별점', recommendations: '추천수' },
      { id: 5, image: '이미지', gameName: '게임명', stars: '별점', recommendations: '추천수' },
      { id: 6, image: '이미지', gameName: '게임명', stars: '별점', recommendations: '추천수' },
      { id: 7, image: '이미지', gameName: '게임명', stars: '별점', recommendations: '추천수' },
      { id: 8, image: '이미지', gameName: '게임명', stars: '별점', recommendations: '추천수' },
      { id: 9, image: '이미지', gameName: '게임명', stars: '별점', recommendations: '추천수' },
      { id: 10, image: '이미지', gameName: '게임명', stars: '별점', recommendations: '추천수' },
    ];

    return rankings.map((item) => (
      <li key={item.id}>
        <div className='list-item'>
          <div className='list-left'>
            <div>{item.id}</div>
            <div>{item.image}</div>
            <div>{item.gameName}</div>
          </div>
          <div className='list-right'>
            <div>{item.stars}</div>
            <div>{item.recommendations}</div>
          </div>
        </div>
      </li>
    ));
  };

  return (
    <>
    <div className='filter-color'>
      <div className='filter-container'>
        <div className='filter-console-title'>
            <span>콘솔</span>
          </div>
          <div className='filter-console'>
          <ul>
            <li className='border-separator'>닌텐도 스위치</li>
            <li className='border-separator'>PS4</li>
            <li className='border-separator'>PS5</li>
            <li className='border-separator'>Xbox</li>
            <li >기타</li>
          </ul>
        </div>
          <div className='filter-type-title'>
          <span>장르</span>
          </div>
          <div className='filter-type'>
          <ul>
            {genres.map((genre:Genre, index: number)=> (
              
              <li key={index} className={index === 5 || index === 11 ||index === 17 ? '' : 'border-separator'}>{genre}</li>
            ))}
          </ul>
        </div>
      </div>
      </div>
      <div className='main-container'>
        <div className="main-title">
          <div>
            <h2>위시리스트[#,###개]</h2>
          </div>
        </div>
        <div className='main-list'>
          <ul>{renderListItems()}</ul>
        </div>
        <div className='button'>
          <button><VscTriangleLeft /></button>
          <button><VscTriangleRight /></button>
        </div>
      </div>
    </>
  )
}
