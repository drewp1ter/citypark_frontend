import React from 'react'

import * as images from './images'

export default () =>
  <div className="light">
    <div className="breadcrumbs">
      <a href="http://cityparkvip.ru/">Главная</a>
      <span>&gt;</span>
      <span style={{
        textDecoration: "underline",
        margin: "0 10px"
      }}>
        Ресторан и летнее кафе
      </span>
    </div>
    <h1>Ресторан и летнее кафе</h1>
    <h2>
      <span style={{
        fontSize: "1.17em",
        lineHeight: "1.5em",
        fontWeight: "normal"
      }}>Комфортный зал </span>
      <a style={{
        fontSize: "1.17em",
        lineHeight: "1.5em",
        fontWeight: "normal"
      }}
        href="rest/restaurant.html">
        ресторана
      </a>
      <span style={{
        fontSize: "1.17em",
        lineHeight: "1.5em",
        fontWeight: "normal"
      }}
      > с самым&nbsp;современным музыкальным оборудованием. </span>
    </h2>
    <p className="justifyleft">
      <span style={{lineHeight: "1.5em"}}>
        &nbsp; &nbsp;
        <img
          src={images.cityPark1}
          alt="City_Park"
          width="450"
          height="300"
        />
        &nbsp;
        <img
          src={images.cityPark2}
          alt="City_Park"
          width="450"
          height="300"
        />
      </span>
    </p>
    <p className="justifyleft">
      <span style={{lineHeight: "1.5em"}}>
        Вы приятно проведете время в компании друзей на уютных диванах под&nbsp;сияющим звездным небом.&nbsp;
        <br/>
      </span>
      <span style={{lineHeight: "1.5em"}}>
        Здесь в любое время суток царит&nbsp;романтическая вечерняя атмосфера&nbsp;City Park.
      </span>
    </p>
    <p className="justifyleft">
      Настоящая джазовая и классическая музыка, chill-out и танцевальные направления.
    </p>
    <h3 className="justifyleft">
      Уютное <a href="rest/kafe.html">летнее кафе</a>
      , где вы всегда&nbsp;можете укрыться от городского зноя в&nbsp;прохладной тени или уединиться в застекленной охлаждаемой террасе.
    </h3>
    <p className="justifyleft">
      <img
        src={images.cafePanorama}
        alt="Letnee_kafe_panorama"
        width="771"
        height="300"
      />
    </p>
    <p className="justifyleft">&nbsp;</p>
    <p className="justifyleft">
      <img
        src={images.cafeTerrasa}
        alt="letnee_kafe_terrasa"
        width="450"
        height="300"
      />
      &nbsp; &nbsp;
      <br/>
      Насладитесь <a href="rest/menu/">восхитительными блюдами</a> европейской и японской кухни от&nbsp;
      первоклассных поваров, а также приятными прохладительными напитками из&nbsp;широкого ассортимента бара.
      <br/>
      Через большие окна террасы в холодное время года вы можете наслаждаться великолепным пейзажем городского парка.
      <span style={{lineHeight: "1.5em"}}>&nbsp;</span>
    </p>
  </div>