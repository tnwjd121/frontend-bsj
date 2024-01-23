import React from 'react'
import '../css/search.css';

export default function Search() {

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
      <div className='main-container'>
        <div className="main-title">
          <div>
            <h2>검색 결과[#,###개]</h2>
          </div>
        </div>
        <div className='main-list'>
          <ul>{renderListItems()}</ul>
        </div>
      </div>
    </>
  )
}
