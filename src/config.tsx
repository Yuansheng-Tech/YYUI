import _ from 'lodash';

import { titleDataSource } from './Title/data';
import { searchBarDataSource } from './SearchBar/data';
import { swiperDataSource } from './Swiper/data';
import { videoDataSource } from './Video/data';
import { gridDataSource } from './Grid/data';
import { goodsGridDataSource } from './GoodsGrid/data';
import { goodsThreeDataSource } from './GoodsThree/data';
import { couponDataSource } from './Coupon/data';
import { textareaDataSource } from './Textarea/data';
import { inputDataSource } from './Input/data';
import { titlelineDataSource } from './Titleline/data';
import { spacelineDataSource } from './SpaceLine/data';
import { tabBarDataSource } from './TabBar/data';
import { tabsDataSource } from './Tabs/data';
import { htmlPageDataSource } from './Html/data';
import { imageDataSource } from './Image/data';
import { containerDataSource } from './Container/data';
import { mapDataSource } from './Map/data';
import { cartBuyDataSource } from './CartBuy/data';
import { cartAddDataSource } from './CartAdd/data';
import { cartGoodDataSource } from './CartGood/data';
import { buttonDataSource } from './Button/data';
import { listDataSource } from './List/data';
import { imagePickerDataSource } from './ImagePicker/data';
import { loginAvatarDataSource } from './LoginAvatar/data';
import { noticebarDataSource } from './Noticebar/data';
import { contactDataSource } from './Contact/data';
import { locationSwitchDataSource } from './LocationSwitch/data';
import { loadMoreDataSource } from './LoadMore/data';
import { cartListDataSource } from './CartList/data';
import { goodSkuDataSource } from './GoodSku/data';
import { h1DataSource, h2DataSource, h3DataSource, pDataSource, infoDataSource, imgDataSource } from './Article/data';

import { transformDataSource } from './renderData';
// import { iOSCardDataSource } from './IOSCard/data'
import { shopItemDataSource, shopListDataSource } from './Shop/data';

export interface IComponent {
  // type?: 'children' | 'YYUI'
  name: string;
  text: string;
  icon: string;
  data: any;
}

export const componentsData = [
  {
    label: '表格类',
    components: [
      {
        name: 'YYButton',
        text: '按钮',
        icon: 'http://file.yuansheng.com/static/memo/files/button.png',
        data: transformDataSource(buttonDataSource),
        children: [],
      },
      {
        name: 'YYInput',
        text: '输入框',
        icon: '',
        data: transformDataSource(inputDataSource),
        children: [],
      },
      {
        name: 'YYTextarea',
        text: '多行输入框',
        icon: '',
        data: transformDataSource(textareaDataSource),
        children: [],
      },
      {
        name: 'YYSearchBar',
        text: '搜索框',
        icon: 'http://file.yuansheng.com/static/memo/files/search.png',
        data: transformDataSource(searchBarDataSource),
        children: [],
      },
      {
        name: 'YYList',
        text: '列表',
        icon: 'http://file.yuansheng.com/static/memo/files/List.png',
        data: transformDataSource(listDataSource),
        children: [],
      },
      {
        name: 'YYImagePicker',
        text: '图片选择器',
        icon: '',
        data: transformDataSource(imagePickerDataSource),
        children: [],
      },
    ],
  },
  {
    label: '图文类',
    components: [
      {
        name: 'YYTitle',
        text: '标题',
        icon: 'http://file.yuansheng.com/static/memo/files/titleSub.png',
        data: transformDataSource(titleDataSource),
        children: [],
      },
      {
        name: 'YYTitleline',
        text: '标题线',
        icon: '',
        data: transformDataSource(titlelineDataSource),
        children: [],
      },
      {
        name: 'YYNoticebar',
        text: '通告栏',
        icon: '',
        data: transformDataSource(noticebarDataSource),
        children: [],
      },
      {
        name: 'YYLoginAvatar',
        text: '登录头像',
        icon: 'http://file.yuansheng.com/static/memo/files/Login.png',
        data: transformDataSource(loginAvatarDataSource),
        children: [],
      },
      {
        name: 'YYSpaceline',
        text: '占位线',
        icon: '',
        data: transformDataSource(spacelineDataSource),
        children: [],
      },
      {
        name: 'YYImage',
        text: '图片',
        icon: '',
        data: transformDataSource(imageDataSource),
        children: [],
      },
      {
        name: 'YYCoupon',
        text: '优惠券',
        icon: '',
        data: transformDataSource(couponDataSource),
        children: [],
      },
      {
        name: 'YYSwiper',
        text: '轮播图',
        icon: 'http://file.yuansheng.com/static/memo/files/banner.png',
        data: transformDataSource(swiperDataSource),
        children: [],
      },
      {
        name: 'YYVideo',
        text: '视频',
        icon: '',
        data: transformDataSource(videoDataSource),
        children: [],
      },
      {
        name: 'YYHtml',
        text: '富文本',
        icon: '',
        data: transformDataSource(htmlPageDataSource),
        children: [],
      },
      {
        name: 'YYMap',
        text: '地图',
        icon: '',
        data: transformDataSource(mapDataSource),
        children: [],
      },
    ],
  },
  {
    label: '商品类',
    components: [
      {
        name: 'YYTabBar',
        text: '标签栏',
        icon: '',
        data: transformDataSource(tabBarDataSource),
        children: [],
      },
      {
        name: 'YYGrid',
        text: '栅格布局',
        icon: 'http://file.yuansheng.com/static/memo/files/Grid.png',
        data: transformDataSource(gridDataSource),
        children: [],
      },
      {
        name: 'YYGoodsThree',
        text: '三栏商品',
        icon: '',
        data: transformDataSource(goodsThreeDataSource),
        children: [],
      },
      {
        name: 'YYCartGood',
        text: '单个商品',
        icon: '',
        data: transformDataSource(cartGoodDataSource),
        children: [],
      },
      {
        name: 'YYCartBuy',
        text: '加购按钮',
        icon: '',
        data: transformDataSource(cartBuyDataSource),
        children: [],
      },
      {
        name: 'YYCartAdd',
        text: '添加按钮',
        icon: '',
        data: transformDataSource(cartAddDataSource),
        children: [],
      },
      {
        name: 'YYCartList',
        text: '购物车列表',
        icon: '',
        data: transformDataSource(cartListDataSource),
        children: [],
      },
      {
        name: 'YYGoodSku',
        text: '商品SKU',
        icon: '',
        data: transformDataSource(goodSkuDataSource),
        children: [],
      },
    ],
  },
  {
    label: '容器',
    components: [
      {
        name: 'YYContainer',
        text: '容器',
        icon: '',
        data: transformDataSource(containerDataSource),
        children: [],
      },
    ],
  },
  {
    label: '服务类',
    components: [
      {
        name: 'YYContact',
        text: '联系',
        icon: 'http://file.yuansheng.com/static/memo/files/shop-banner.png',
        data: transformDataSource(contactDataSource),
        children: [],
      },
      {
        name: 'YYLocationSwitch',
        text: '切换店铺',
        icon: 'http://file.yuansheng.com/static/memo/files/shop-address1.png',
        data: transformDataSource(locationSwitchDataSource),
        children: [],
      },
    ],
  },
  {
    label: '数据请求',
    components: [
      {
        name: 'YYTabs',
        text: '标签页',
        icon: 'http://file.yuansheng.com/static/memo/files/Tabs.png',
        data: transformDataSource(tabsDataSource),
        children: [],
      },
      {
        name: 'YYGoodsGrid',
        text: '商品栅格',
        icon: 'http://file.yuansheng.com/static/memo/files/goodGrid.png',
        data: transformDataSource(goodsGridDataSource),
        children: [],
      },
      {
        name: 'YYShopItem',
        text: '单个店铺',
        icon: '',
        data: transformDataSource(shopItemDataSource),
        children: [],
      },
      {
        name: 'YYShopList',
        text: '店铺列表',
        icon: '',
        data: transformDataSource(shopListDataSource),
        children: [],
      },
      {
        name: 'YYLoadMore',
        text: '加载更多',
        icon: 'http://file.yuansheng.com/static/memo/files/seemore.png',
        data: transformDataSource(loadMoreDataSource),
        children: [],
      },
    ],
  },
  {
    label: '文章',
    components: [
      {
        name: 'YYH1',
        text: 'H1',
        icon: '',
        data: transformDataSource(h1DataSource),
        children: [],
      },
      {
        name: 'YYH2',
        text: 'H2',
        icon: '',
        data: transformDataSource(h2DataSource),
        children: [],
      },
      {
        name: 'YYH3',
        text: 'H3',
        icon: '',
        data: transformDataSource(h3DataSource),
        children: [],
      },
      {
        name: 'YYP',
        text: 'P',
        icon: '',
        data: transformDataSource(pDataSource),
        children: [],
      },
      {
        name: 'YYInfo',
        text: 'Info',
        icon: '',
        data: transformDataSource(infoDataSource),
        children: [],
      },
      {
        name: 'YYImg',
        text: 'Img',
        icon: '',
        data: transformDataSource(imgDataSource),
        children: [],
      },
      // {
      //   name: 'YYIOSCard',
      //   text: 'IOSCard',
      //   icon: '',
      //   data: transformDataSource(iOSCardDataSource)
      // },
    ],
  },
];
