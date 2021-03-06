import { cartTitleDataSource, subTitleDataSource, titleDataSource } from './Title/data';
import { searchBarDataSource } from './SearchBar/data';
import { swiperDataSource } from './Swiper/data';
import { videoDataSource } from './Video/data';
import { audioDataSource } from './Audio/data';
import { gridDataSource, imgBgGridDataSource } from './Grid/data';
import { goodsGridDataSource, tabGoodsDataSource } from './GoodsGrid/data';
import { goodsThreeDataSource } from './GoodsThree/data';
import { goodsCardDataSource } from './GoodsCard/data';
import { couponDataSource } from './Coupon/data';
import { textareaDataSource } from './Textarea/data';
import { inputDataSource } from './Input/data';
import { titlelineDataSource } from './Titleline/data';
import { spacelineDataSource } from './SpaceLine/data';
import { tabBarDataSource } from './TabBar/data';
import { tabsDataSource } from './Tabs/data';
import { htmlPageDataSource } from './Html/data';
import { imageDataSource, imageListDataSource } from './Image/data';
import { containerDataSource } from './Container/data';
import { mapDataSource } from './Map/data';
import { cartBuyDataSource, cartSumBuyDataSource } from './CartBuy/data';
import { cartAddDataSource } from './CartAdd/data';
import { cartGoodDataSource } from './CartGood/data';
import { buttonDataSource } from './Button/data';
import { listDataSource } from './List/data';
import { imagePickerDataSource } from './ImagePicker/data';
import { loginAvatarDataSource, logoutDataSource } from './LoginAvatar/data';
import { noticebarDataSource } from './Noticebar/data';
import { contactDataSource } from './Contact/data';
import { locationSwitchDataSource } from './LocationSwitch/data';
import { loadMoreDataSource } from './LoadMore/data';
import { cartListDataSource } from './CartList/data';
import { goodSkuDataSource } from './GoodSku/data';
import { h1DataSource, h2DataSource, h3DataSource, pDataSource, infoDataSource, imgDataSource } from './Article/data';
import { transformDataSource } from './renderData';
import {
  shopItemDataSource,
  shopItemTopDataSource,
  shopListDataSource,
  shopWithGoodsItemDataSource,
  shopWithGoodsListDataSource,
} from './Shop/data';
import { wechatLoginDataSource } from './Wechat/data';
import { locationDataSource } from './Location/data';

export interface IComponent {
  // type?: 'children' | 'YYUI'
  name: string;
  text: string;
  icon: string;
  data: any;
}

export const componentsData = [
  {
    label: '?????????',
    components: [
      {
        name: 'YYButton',
        text: '??????',
        icon: 'https://file.yuanshengyoupin.com/files/button.png',
        data: transformDataSource(buttonDataSource),
        children: [],
      },
      {
        name: 'YYSubmit',
        text: '??????',
        icon: 'https://file.yuanshengyoupin.com/files/button.png',
        data: transformDataSource(buttonDataSource),
        children: [],
      },
      {
        name: 'YYInput',
        text: '?????????',
        icon: '',
        data: transformDataSource(inputDataSource),
        children: [],
      },
      {
        name: 'YYTextarea',
        text: '???????????????',
        icon: '',
        data: transformDataSource(textareaDataSource),
        children: [],
      },
      {
        name: 'YYSearchBar',
        text: '?????????',
        icon: 'https://file.yuanshengyoupin.com/files/search.png',
        data: transformDataSource(searchBarDataSource),
        children: [],
      },
      {
        name: 'YYList',
        text: '??????',
        icon: 'https://file.yuanshengyoupin.com/files/List.png',
        data: transformDataSource(listDataSource),
        children: [],
      },
      {
        name: 'YYImagePicker',
        text: '???????????????',
        icon: '',
        data: transformDataSource(imagePickerDataSource),
        children: [],
      },
    ],
  },
  {
    label: '?????????',
    components: [
      {
        name: 'YYTitle',
        text: '??????',
        icon: 'https://file.yuanshengyoupin.com/files/titleSub.png',
        data: transformDataSource(titleDataSource),
        children: [],
      },
      {
        name: 'YYSubTitle',
        text: '??????&?????????',
        icon: 'https://file.yuanshengyoupin.com/files/titleSub.png',
        data: transformDataSource(subTitleDataSource),
        children: [],
      },
      {
        name: 'YYCartTitle',
        text: '?????????????????????',
        icon: 'https://file.yuanshengyoupin.com/files/titleSub.png',
        data: transformDataSource(cartTitleDataSource),
        children: [],
      },
      {
        name: 'YYTitleline',
        text: '?????????',
        icon: '',
        data: transformDataSource(titlelineDataSource),
        children: [],
      },
      {
        name: 'YYNoticebar',
        text: '?????????',
        icon: '',
        data: transformDataSource(noticebarDataSource),
        children: [],
      },
      {
        name: 'YYLoginAvatar',
        text: '????????????',
        icon: 'https://file.yuanshengyoupin.com/files/Login.png',
        data: transformDataSource(loginAvatarDataSource),
        children: [],
      },
      {
        name: 'YYLogout',
        text: '????????????',
        icon: '',
        data: transformDataSource(logoutDataSource),
        children: [],
      },
      {
        name: 'YYSpaceline',
        text: '?????????',
        icon: '',
        data: transformDataSource(spacelineDataSource),
        children: [],
      },
      {
        name: 'YYImage',
        text: '??????',
        icon: '',
        data: transformDataSource(imageDataSource),
        children: [],
      },
      {
        name: 'YYImageList',
        text: '????????????',
        icon: '',
        data: transformDataSource(imageListDataSource),
        children: [],
      },
      {
        name: 'YYCoupon',
        text: '?????????',
        icon: '',
        data: transformDataSource(couponDataSource),
        children: [],
      },
      {
        name: 'YYSwiper',
        text: '?????????',
        icon: 'https://file.yuanshengyoupin.com/files/banner.png',
        data: transformDataSource(swiperDataSource),
        children: [],
      },
      {
        name: 'YYVideo',
        text: '??????',
        icon: '',
        data: transformDataSource(videoDataSource),
        children: [],
      },
      {
        name: 'YYAudio',
        text: '??????',
        icon: '',
        data: transformDataSource(audioDataSource),
        children: [],
      },
      {
        name: 'YYHtml',
        text: '?????????',
        icon: '',
        data: transformDataSource(htmlPageDataSource),
        children: [],
      },
      {
        name: 'YYMap',
        text: '??????',
        icon: '',
        data: transformDataSource(mapDataSource),
        children: [],
      },
    ],
  },
  {
    label: '?????????',
    components: [
      {
        name: 'YYTabBar',
        text: '?????????',
        icon: '',
        data: transformDataSource(tabBarDataSource),
        children: [],
      },
      {
        name: 'YYTabs',
        text: '????????????',
        icon: 'https://file.yuanshengyoupin.com/files/Tabs.png',
        data: transformDataSource(tabsDataSource),
        children: [],
      },
      {
        name: 'YYGrid',
        text: '????????????',
        icon: 'https://file.yuanshengyoupin.com/files/Grid.png',
        data: transformDataSource(gridDataSource),
        children: [],
      },
      {
        name: 'YYImgBgGrid',
        text: '????????????',
        icon: 'https://file.yuanshengyoupin.com/files/Grid.png',
        data: transformDataSource(imgBgGridDataSource),
        children: [],
      },
      {
        name: 'YYGoodsThree',
        text: '????????????',
        icon: '',
        data: transformDataSource(goodsThreeDataSource),
        children: [],
      },
      {
        name: 'YYCartGood',
        text: '????????????',
        icon: '',
        data: transformDataSource(cartGoodDataSource),
        children: [],
      },
      {
        name: 'YYCartBuy',
        text: '????????????',
        icon: '',
        data: transformDataSource(cartBuyDataSource),
        children: [],
      },
      {
        name: 'YYCartSumBuy',
        text: '???????????????',
        icon: '',
        data: transformDataSource(cartSumBuyDataSource),
        children: [],
      },
      {
        name: 'YYCartAdd',
        text: '????????????',
        icon: '',
        data: transformDataSource(cartAddDataSource),
        children: [],
      },
      {
        name: 'YYCartList',
        text: '???????????????',
        icon: '',
        data: transformDataSource(cartListDataSource),
        children: [],
      },
      {
        name: 'YYGoodSku',
        text: '??????SKU',
        icon: '',
        data: transformDataSource(goodSkuDataSource),
        children: [],
      },
    ],
  },
  {
    label: '??????',
    components: [
      {
        name: 'YYContainer',
        text: '??????',
        icon: '',
        data: transformDataSource(containerDataSource),
        children: [],
      },
    ],
  },
  {
    label: '?????????',
    components: [
      {
        name: 'YYContact',
        text: '??????',
        icon: 'https://file.yuanshengyoupin.com/files/shop-banner.png',
        data: transformDataSource(contactDataSource),
        children: [],
      },
      {
        name: 'YYLocationSwitch',
        text: '????????????',
        icon: 'https://file.yuanshengyoupin.com/files/shop-address1.png',
        data: transformDataSource(locationSwitchDataSource),
        children: [],
      },
      {
        name: 'YYLocation',
        text: '??????',
        icon: 'https://file.yuanshengyoupin.com/files/shop-address1.png',
        data: transformDataSource(locationDataSource),
        children: [],
      },
    ],
  },
  {
    label: '????????????',
    components: [
      {
        name: 'YYLoadTabs',
        text: '?????????',
        icon: 'https://file.yuanshengyoupin.com/files/Tabs.png',
        data: transformDataSource(tabsDataSource),
        children: [],
      },
      {
        name: 'YYGoodsGrid',
        text: '????????????',
        icon: 'https://file.yuanshengyoupin.com/files/goodGrid.png',
        data: transformDataSource(goodsGridDataSource),
        children: [],
      },
      {
        name: 'YYGoodsCard',
        text: '????????????',
        icon: 'https://file.yuanshengyoupin.com/files/goodGrid.png',
        data: transformDataSource(goodsCardDataSource),
        children: [],
      },
      {
        name: 'YYLoadMoreGoodsGrid',
        text: '???????????????loadmore???',
        icon: 'https://file.yuanshengyoupin.com/files/goodGrid.png',
        data: transformDataSource(goodsGridDataSource),
        children: [],
      },
      {
        name: 'YYShopItem',
        text: '????????????',
        icon: '',
        data: transformDataSource(shopItemDataSource),
        children: [],
      },
      {
        name: 'YYShopList',
        text: '????????????',
        icon: '',
        data: transformDataSource(shopListDataSource),
        children: [],
      },
      {
        name: 'YYShopWithGoodsItem',
        text: '????????????2',
        icon: '',
        data: transformDataSource(shopWithGoodsItemDataSource),
        children: [],
      },
      {
        name: 'YYShopWithGoodsList',
        text: '????????????2',
        icon: '',
        data: transformDataSource(shopWithGoodsListDataSource),
        children: [],
      },
      {
        name: 'YYShopItemTop',
        text: '??????????????????',
        icon: '',
        data: transformDataSource(shopItemTopDataSource),
        children: [],
      },
      {
        name: 'YYTabGoods',
        text: '????????????',
        icom: '',
        data: transformDataSource(tabGoodsDataSource),
        children: [],
      },
      {
        name: 'YYLoadMore',
        text: '????????????',
        icon: 'https://file.yuanshengyoupin.com/files/seemore.png',
        data: transformDataSource(loadMoreDataSource),
        children: [],
      },
    ],
  },
  {
    label: '??????',
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
  {
    label: '??????',
    components: [
      {
        name: 'YYWechatLogin',
        text: 'Wechat Login',
        icon: '',
        data: transformDataSource(wechatLoginDataSource),
        children: [],
      },
    ],
  },
  // {
  //   label: '3D/Three.js',
  //   components: [
  //     {
  //       name: 'YYThreeGLB',
  //       text: 'Load GLB',
  //       icon: '',
  //       data: transformDataSource(threeGLBDataSource),
  //       children: [],
  //     },
  //   ],
  // },
  // {
  //   label: 'Voice',
  //   components: [
  //     {
  //       name: 'YYPlayVioce',
  //       text: 'PlayVoice',
  //       icon: '',
  //       data: transformDataSource({}),
  //       children: [],
  //     },
  //   ],
  // },
];
