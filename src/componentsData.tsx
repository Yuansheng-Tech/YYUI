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
import { loginAvatarDataSource } from './LoginAvatar/data';
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
    label: '表格类',
    components: [
      {
        name: 'YYButton',
        text: '按钮',
        icon: 'https://file.yuanshengyoupin.com/files/button.png',
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
        icon: 'https://file.yuanshengyoupin.com/files/search.png',
        data: transformDataSource(searchBarDataSource),
        children: [],
      },
      {
        name: 'YYList',
        text: '列表',
        icon: 'https://file.yuanshengyoupin.com/files/List.png',
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
        icon: 'https://file.yuanshengyoupin.com/files/titleSub.png',
        data: transformDataSource(titleDataSource),
        children: [],
      },
      {
        name: 'YYSubTitle',
        text: '标题&副标题',
        icon: 'https://file.yuanshengyoupin.com/files/titleSub.png',
        data: transformDataSource(subTitleDataSource),
        children: [],
      },
      {
        name: 'YYCartTitle',
        text: '购物车店铺标题',
        icon: 'https://file.yuanshengyoupin.com/files/titleSub.png',
        data: transformDataSource(cartTitleDataSource),
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
        icon: 'https://file.yuanshengyoupin.com/files/Login.png',
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
        name: 'YYImageList',
        text: '图片列表',
        icon: '',
        data: transformDataSource(imageListDataSource),
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
        icon: 'https://file.yuanshengyoupin.com/files/banner.png',
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
        name: 'YYAudio',
        text: '音频',
        icon: '',
        data: transformDataSource(audioDataSource),
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
        name: 'YYTabs',
        text: '标签页面',
        icon: 'https://file.yuanshengyoupin.com/files/Tabs.png',
        data: transformDataSource(tabsDataSource),
        children: [],
      },
      {
        name: 'YYGrid',
        text: '栅格布局',
        icon: 'https://file.yuanshengyoupin.com/files/Grid.png',
        data: transformDataSource(gridDataSource),
        children: [],
      },
      {
        name: 'YYImgBgGrid',
        text: '背景栅格',
        icon: 'https://file.yuanshengyoupin.com/files/Grid.png',
        data: transformDataSource(imgBgGridDataSource),
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
        name: 'YYCartSumBuy',
        text: '购物车结算',
        icon: '',
        data: transformDataSource(cartSumBuyDataSource),
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
        icon: 'https://file.yuanshengyoupin.com/files/shop-banner.png',
        data: transformDataSource(contactDataSource),
        children: [],
      },
      {
        name: 'YYLocationSwitch',
        text: '切换店铺',
        icon: 'https://file.yuanshengyoupin.com/files/shop-address1.png',
        data: transformDataSource(locationSwitchDataSource),
        children: [],
      },
      {
        name: 'YYLocation',
        text: '定位',
        icon: 'https://file.yuanshengyoupin.com/files/shop-address1.png',
        data: transformDataSource(locationDataSource),
        children: [],
      },
    ],
  },
  {
    label: '数据请求',
    components: [
      {
        name: 'YYLoadTabs',
        text: '标签页',
        icon: 'https://file.yuanshengyoupin.com/files/Tabs.png',
        data: transformDataSource(tabsDataSource),
        children: [],
      },
      {
        name: 'YYGoodsGrid',
        text: '商品栅格',
        icon: 'https://file.yuanshengyoupin.com/files/goodGrid.png',
        data: transformDataSource(goodsGridDataSource),
        children: [],
      },
      {
        name: 'YYGoodsCard',
        text: '商品卡片',
        icon: 'https://file.yuanshengyoupin.com/files/goodGrid.png',
        data: transformDataSource(goodsCardDataSource),
        children: [],
      },
      {
        name: 'YYLoadMoreGoodsGrid',
        text: '商品栅格（loadmore）',
        icon: 'https://file.yuanshengyoupin.com/files/goodGrid.png',
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
        name: 'YYShopWithGoodsItem',
        text: '单个店铺2',
        icon: '',
        data: transformDataSource(shopWithGoodsItemDataSource),
        children: [],
      },
      {
        name: 'YYShopWithGoodsList',
        text: '店铺列表2',
        icon: '',
        data: transformDataSource(shopWithGoodsListDataSource),
        children: [],
      },
      {
        name: 'YYShopItemTop',
        text: '店铺详情头部',
        icon: '',
        data: transformDataSource(shopItemTopDataSource),
        children: [],
      },
      {
        name: 'YYTabGoods',
        text: '分类商品',
        icom: '',
        data: transformDataSource(tabGoodsDataSource),
        children: [],
      },
      {
        name: 'YYLoadMore',
        text: '加载更多',
        icon: 'https://file.yuanshengyoupin.com/files/seemore.png',
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
  {
    label: '页面',
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
