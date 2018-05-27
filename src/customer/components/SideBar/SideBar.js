import React from 'react'
import { Link } from 'react-router-dom'

import { Delivery, NewsItem, News, RestaurantContacts,
   RoomsCatalog, HotelContacts } from 'components'

import RestaurantAndCafe from 'features/RestaurantAndCafe'
import Hotel from 'features/Hotel'

const DISPLAY_TYPE = "side"

export default () => {
  const { RESTAURANT, CAFE } = RestaurantAndCafe.links
  const { HOTEL_MAIN } = Hotel.links
  return (
    <div className="column">
      <div className="header">
        <div className="h_img">
          <div className="h_column">
            <div className="leaf">
              <Link to="/" id="logo" />
              <div className="slogan">
                <Link to={RESTAURANT.url} style={{borderBottom: "1px solid #46312a"}}>
                  {RESTAURANT.title}
                </Link>
                <Link
                  to={CAFE.url}
                  style={{
                    borderBottom: "1px solid #46312a",
                    borderTop: "1px solid #ffe5d0"
                  }}
                >
                {CAFE.title}
                </Link>
                <Link to={HOTEL_MAIN.url} style={{borderTop: "1px solid #ffe5d0"}}>
                  {HOTEL_MAIN.title}
                </Link>
              </div>
              <div className="h_title">
                <div className="h_title_bg" style={{backgroundPosition: "left"}}>
                  <div className="r_grad" style={{height: "75px"}}>
                    <div className="h_title_right"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="partbody">
        <div className="shade">
          <RestaurantContacts displayType={DISPLAY_TYPE}/>
          <Delivery displayType={DISPLAY_TYPE}/>
          <News displayType={DISPLAY_TYPE}>
            <NewsItem
              displayType={DISPLAY_TYPE}
              bannerUrl="/images/promo.jpg"
              date="09.04.2018"
              title="Конкурс селфи от City Park в Instagram"
              link="vdc"
            />
          </News>
          <RoomsCatalog displayType={DISPLAY_TYPE} />
          <HotelContacts displayType={DISPLAY_TYPE}/>
        </div>
      </div>

    </div>
  )
}
