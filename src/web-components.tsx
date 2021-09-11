import React from 'react';
import { YYTitle } from './Title';
import { YYSwiper } from './Swiper';

import ReactWebComponent from 'react-web-component';

ReactWebComponent.create(<YYTitle title='demo' />, 'web-title');
ReactWebComponent.create(<YYSwiper vertical={false} items={[]} />, 'web-swiper');