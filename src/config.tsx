
import _ from 'lodash'

import { titleDataSource } from './Title/data'
import { searchBarDataSource } from './SearchBar/data'
import { swiperDataSource } from './Swiper/data'
import { videoDataSource } from './Video/data'
import { gridDataSource } from './Grid/data'
import { goodsGridDataSource } from './GoodsGrid/data'
import { goodsThreeDataSource } from './GoodsThree/data'
import { couponDataSource } from './Coupon/data'
import { textareaDataSource } from './Textarea/data'
import { inputDataSource } from './Input/data'
import { titlelineDataSource } from './Titleline/data'
import { spacelineDataSource } from './SpaceLine/data'
import { tabBarDataSource } from './TabBar/data'
import { tabsDataSource } from './Tabs/data'
import { htmlPageDataSource } from './Html/data'
import { imageDataSource } from './Image/data'
import { containerDataSource } from './Container/data'
import { mapDataSource } from './Map/data'
import { cartBuyDataSource } from './CartBuy/data';
import { cartAddDataSource } from './CartAdd/data'
import { cartGoodDataSource } from './CartGood/data'
import { buttonDataSource } from './Button/data'
import { listDataSource } from './List/data'
import { imagePickerDataSource } from './ImagePicker/data'
import { loginAvatarDataSource } from './LoginAvatar/data'
import { noticebarDataSource } from './Noticebar/data'
import { contactDataSource } from './Contact/data'
import { locationSwitchDataSource } from './LocationSwitch/data'
import { loadMoreDataSource } from './LoadMore/data'
import { cartListDataSource } from './CartList/data'
import { goodSkuDataSource } from './GoodSku/data'
import {
  h1DataSource,
  h2DataSource,
  h3DataSource,
  pDataSource,
  infoDataSource,
  imgDataSource,
} from './Article/data'

import { transformDataSource } from './renderData';

export interface IComponent {
  // type?: 'children' | 'YYUI'
  name: string
  text: string
  icon: string
  data: any
}

export const componentsData = [
  {
    label: '表格类',
    components: [
      {
        name: 'YYButton',
        text: '按钮',
        icon: '',
        data: transformDataSource(buttonDataSource)
      },
      {
        name: 'YYInput',
        text: '输入框',
        icon: '',
        data: transformDataSource(inputDataSource)
      },
      {
        name: 'YYTextarea',
        text: '多行输入框',
        icon: '',
        data: transformDataSource(textareaDataSource)
      },
      {
        name: 'YYSearchBar',
        text: '搜索框',
        icon: '',
        data: transformDataSource(searchBarDataSource)
      },
      {
        name: 'YYList',
        text: '列表',
        icon: '',
        data: transformDataSource(listDataSource)
      },
      {
        name: 'YYImagePicker',
        text: '图片选择器',
        icon: '',
        data: transformDataSource(imagePickerDataSource)
      }
    ]
  },
  {
    label: '图文类',
    components: [
      {
        name: 'YYTitle',
        text: '标题',
        icon: '',
        data: transformDataSource(titleDataSource)
      },
      {
        name: 'YYTitleline',
        text: '标题线',
        icon: '',
        data: transformDataSource(titlelineDataSource)
      },
      {
        name: 'YYNoticebar',
        text: '通告栏',
        icon: '',
        data: transformDataSource(noticebarDataSource)
      },
      {
        name: 'YYLoginAvatar',
        text: '登录头像',
        icon: '',
        data: transformDataSource(loginAvatarDataSource)
      },
      {
        name: 'YYSpaceline',
        text: '占位线',
        icon: '',
        data: transformDataSource(spacelineDataSource)
      },
      {
        name: 'YYImage',
        text: '图片',
        icon: '',
        data: transformDataSource(imageDataSource)
      },
      {
        name: 'YYCoupon',
        text: '优惠券',
        icon: '',
        data: transformDataSource(couponDataSource)
      },
      {
        name: 'YYSwiper',
        text: '轮播图',
        icon: '',
        data: transformDataSource(swiperDataSource)
      },
      {
        name: 'YYVideo',
        text: '视频',
        icon: '',
        data: transformDataSource(videoDataSource)
      },
      {
        name: 'YYHtml',
        text: '富文本',
        icon: '',
        data: transformDataSource(htmlPageDataSource)
      },
      {
        name: 'YYMap',
        text: '地图',
        icon: '',
        data: transformDataSource(mapDataSource)
      }
    ],
  }, {
    label: '商品类',
    components: [
      {
        name: 'YYTabBar',
        text: '标签栏',
        icon: '',
        data: transformDataSource(tabBarDataSource)
      },
      {
        name: 'YYGrid',
        text: '栅格布局',
        icon: '',
        data: transformDataSource(gridDataSource)
      },
      {
        name: 'YYGoodsThree',
        text: '三栏商品',
        icon: '',
        data: transformDataSource(goodsThreeDataSource)
      },
      {
        name: 'YYCartGood',
        text: '单个商品',
        icon: '',
        data: transformDataSource(cartGoodDataSource)
      },
      {
        name: 'YYCartBuy',
        text: '加购按钮',
        icon: '',
        data: transformDataSource(cartBuyDataSource)
      },
      {
        name: 'YYCartAdd',
        text: '添加按钮',
        icon: '',
        data: transformDataSource(cartAddDataSource)
      },
      {
        name: 'YYCartList',
        text: '购物车列表',
        icon: '',
        data: transformDataSource(cartListDataSource)
      },
      {
        name: 'YYGoodSku',
        text: '商品SKU',
        icon: '',
        data: transformDataSource(goodSkuDataSource)
      }
    ]
  }, {
    label: '容器',
    components: [
      {
        name: 'YYContainer',
        text: '容器',
        icon: '',
        data: transformDataSource(containerDataSource)
      },
    ]
  }, {
    label: '服务类',
    components: [
      {
        name: 'YYContact',
        text: '联系',
        icon: '',
        data: transformDataSource(contactDataSource)
      },
      {
        name: 'YYLocationSwitch',
        text: '切换店铺',
        icon: '',
        data: transformDataSource(locationSwitchDataSource)
      },
    ]
  }, {
    label: '数据请求',
    components: [
      {
        name: 'YYTabs',
        text: '标签页',
        icon: '',
        data: transformDataSource(tabsDataSource)
      },
      {
        name: 'YYGoodsGrid',
        text: '商品栅格',
        icon: '',
        data: transformDataSource(goodsGridDataSource)
      },
      {
        name: 'YYLoadMore',
        text: '加载更多',
        icon: '',
        data: transformDataSource(loadMoreDataSource)
      },
    ]
  },
  {
    label: '文章',
    components: [
      {
        name: 'YYH1',
        text: 'H1',
        icon: '',
        data: transformDataSource(h1DataSource)
      },
      {
        name: 'YYH2',
        text: 'H2',
        icon: '',
        data: transformDataSource(h2DataSource)
      },
      {
        name: 'YYH3',
        text: 'H3',
        icon: '',
        data: transformDataSource(h3DataSource)
      },
      {
        name: 'YYP',
        text: 'P',
        icon: '',
        data: transformDataSource(pDataSource)
      },
      {
        name: 'YYInfo',
        text: 'Info',
        icon: '',
        data: transformDataSource(infoDataSource)
      },
      {
        name: 'YYImg',
        text: 'Img',
        icon: '',
        data: transformDataSource(imgDataSource)
      },
    ]
  }
]
