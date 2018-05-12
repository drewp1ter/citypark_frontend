import React from 'react'

import { SocShare } from 'components'
import * as images from './images'

export default () =>
  <div className="light">
    <div className="breadcrumbs">
      <a href="http://cityparkvip.ru/">Главная</a>
      <span>&gt;</span><a href="rest/">Ресторан и летнее кафе</a>
      <span>&gt;</span><span style={{textDecoration: "underline", margin: "0 10px"}}>
        Летнее кафе
      </span>
    </div>
    <SocShare
      link="http://cityparkvip.ru/rest/kafe.html"
      title="РГК «City Park» - Летнее кафе"
      image="http://cityparkvip.ru/assets/images/restoran_i_kafe/2CAM5105 Panorama_obrez.jpg"
    />
    <h1>Летнее кафе</h1>
    <h2>
      <span style={{fontSize: "1.17em", fontWeight: "normal", lineHeight: "1.5em"}}>
        Уютное летнее кафе, где вы всегда&nbsp;можете укрыться от городского зноя в&nbsp;
        прохладной тени или уединиться в застекленной охлаждаемой террасе.
      </span>
    </h2>
    <p className="justifyleft">
      <img
        src={images.panoramaObrez}
        alt="Letnee_kafe_panorama"
        width="768"
        height="299"
      />
    </p>
    <p className="justifyleft">
      &nbsp;
    </p>
    <p className="justifyleft">
      <img
        src={images.photo1}
        alt="letnee_kafe_terrasa"
        width="380"
        height="253"
      />
      &nbsp; &nbsp;
      <img
        src={images.photo2}
        alt="terrasa_1"
        width="380"
        height="253"
      />
      <br/>
      В летнем кафе City Park вы насладитесь восхитительными блюдами европейской и японской кухни от&nbsp;
      первоклассных поваров, а также приятными прохладительными напитками из&nbsp;
      широкого ассортимента бара.
      <br/>
      Через большие окна террасы в холодное время года вы можете наслаждаться великолепным пейзажем городского парка.
    </p>
    <p className="justifyleft">
      <strong>
        <span>
          На всей территории РГК City Park доступен бесплатный&nbsp;
          Wi-fi&nbsp;
        </span>
      </strong>
    </p>
    <p className="justifyleft">
      <strong>
        &nbsp;
      </strong>
    </p>
    <h3 className="justifyleft">
      Забронировать столик или заказать доставку еды по Белореченску вы можете по телефону +7-918-311-97-91 или на сайте РГК City Park <a title="РГК City Park Белореченск. Доставка еды." href="http://cityparkvip.ru/">www.cityparkvip.ru</a> в разделе <a href="rest/menu/">"Меню"</a>
    </h3>
    <div className="room_gallery" style={{paddingTop: "30px"}}>
      <div className="gallery_title">Фотогалерея</div>
      <a href="/assets/lib/2015/08/08/2CAM6317_m.jpg" rel="group" className="gal_img">
  	    <img src="/assets/lib/resized/22/122x122.jpg" alt="/assets/lib/2015/08/08/2CAM6317_m.jpg"/>
      </a>
      <a href="/assets/lib/2015/08/08/2CAM6302_m.jpg" rel="group" className="gal_img">
  	    <img src="/assets/lib/resized/23/122x122.jpg" alt="/assets/lib/2015/08/08/2CAM6302_m.jpg"/>
      </a>
      <a href="/assets/lib/2015/08/08/2CAM6319_m.jpg" rel="group" className="gal_img">
  	    <img src="/assets/lib/resized/25/122x122.jpg" alt="/assets/lib/2015/08/08/2CAM6319_m.jpg"/>
      </a><a href="/assets/lib/2015/08/08/2CAM6300_m.jpg" rel="group" className="gal_img">
  	    <img src="/assets/lib/resized/26/122x122.jpg" alt="/assets/lib/2015/08/08/2CAM6300_m.jpg"/>
      </a>
      <a href="/assets/lib/2015/08/08/2CAM6320_m.jpg" rel="group" className="gal_img">
  	    <img src="/assets/lib/resized/27/122x122.jpg" alt="/assets/lib/2015/08/08/2CAM6320_m.jpg"/>
      </a>
      <a href="/assets/lib/2015/08/08/2CAM6308_m.jpg" rel="group" className="gal_img">
  	    <img src="/assets/lib/resized/28/122x122.jpg" alt="/assets/lib/2015/08/08/2CAM6308_m.jpg"/>
      </a>
    </div>
    <a href="http://cityparkvip.ru/assets/tour/kafe.html" target="_blank" className="tur_btn" style={{top: "80px", right: "30px"}}></a>
  </div>
