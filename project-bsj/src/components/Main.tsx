import React, { useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';
import '../css/main.css';

export default function Main() {
  const [number, setNumber] = useState<number>(0);

  const renderListItems = () => {
    const rankings = [
      { id: 1, image: '이미지1', gameName: '게임명1', stars: '별점1', recommendations: '추천수1' },
      { id: 2, image: '이미지2', gameName: '게임명2', stars: '별점2', recommendations: '추천수2' },
      { id: 3, image: '이미지3', gameName: '게임명3', stars: '별점3', recommendations: '추천수3' },
      { id: 4, image: '이미지4', gameName: '게임명4', stars: '별점4', recommendations: '추천수4' },
      { id: 5, image: '이미지5', gameName: '게임명5', stars: '별점5', recommendations: '추천수5' },
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
      <div className='ranking-container'>
        <div className="ranking-title">
          <div>
            <h2>랭킹</h2>
          </div>
          <div className='filter'>
            <div><TiArrowSortedDown />PS4</div>
            <div><TiArrowSortedDown />추천순</div>
          </div>
        </div>
        <div className='ranking-list'>
          <ul>{renderListItems()}</ul>
        </div>
      </div>
    </>
  );
}
