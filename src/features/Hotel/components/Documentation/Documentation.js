import React from 'react'
import { Helmet } from 'react-helmet'

import { PhotoGallery, SocShare, Breadcrumbs } from 'components'
import { HOTEL_MAIN, DOCUMENTATION } from '../../links'
import * as images from './images'
import * as commonImages from 'images'
import { TITLE_PREFIX } from 'appConstants'
import { baseUrl } from 'utils'

export default () =>
  <div className="light">
    <Helmet title={TITLE_PREFIX + DOCUMENTATION.TITLE} />
    { Breadcrumbs({links:  [ HOTEL_MAIN, DOCUMENTATION ]}) }
    <SocShare
      link={baseUrl() + DOCUMENTATION.URL}
      title={TITLE_PREFIX + DOCUMENTATION.TITLE}
      image={baseUrl() + commonImages.sitePreview}
    />
    <p>Выписка из единого реестра объектов классификации в сфере туристической индустрии</p>
    <PhotoGallery
      items={[
        {
          thumb: images.report1t,
          image: images.report1
        },
        {
          thumb: images.report2t,
          image: images.report2
        }
      ]}
    />
  	<p>Политика ООО "Олимп" в отношении обработки персональных данных&nbsp;</p>
    <PhotoGallery
      items={[
        {
          thumb: images.t1,
          image: images.f1
        },
        {
          thumb: images.t2,
          image: images.f2
        },
        {
          thumb: images.t3,
          image: images.f3
        },
        {
          thumb: images.t4,
          image: images.f4
        },
        {
          thumb: images.t5,
          image: images.f5
        },
        {
          thumb: images.t6,
          image: images.f6
        },
        {
          thumb: images.t7,
          image: images.f7
        },
        {
          thumb: images.t8,
          image: images.f8
        },
      ]}
    />
  </div>
