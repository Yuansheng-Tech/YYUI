import { ButtonProps } from '@tarojs/components';
import { IButtonProps } from './index';

export const buttonDataSource: IButtonProps & ButtonProps = {
  title: 'Button',
  margin: '10px',
  borderRadius: '30px',

  size: 'default',
  type: 'primary',
  plain: false,
  disabled: false,
  loading: false,
  // formType	"submit" | "reset"		否	用于 <form/> 组件，点击分别会触发 <form/> 组件的 submit/reset 事件
  // openType	"contact" | "contactShare" | "share" | "getRealnameAuthInfo" | "getAuthorize" | "getPhoneNumber" | "getUserInfo" | "lifestyle" | "launchApp" | "openSetting" | "feedback"		否	微信开放能力
  // hoverClass	string	button-hover	否	指定按下去的样式类。当 hover-class="none" 时，没有点击态效果
  // hoverStyle	string	none	否	由于 RN 不支持 Class，故 RN 端的 Button 组件实现了 hoverStyle属性，写法和 style 类似，只不过 hoverStyle 的样式是指定按下去的样式。
  // hoverStopPropagation	boolean	false	否	指定是否阻止本节点的祖先节点出现点击态
  // hoverStartTime	number	20	否	按住后多久出现点击态，单位毫秒
  // hoverStayTime	number	70	否	手指松开后点击态保留时间，单位毫秒

  // lang	"en" | "zh_CN" | "zh_TW"		否	指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。
  // 生效时机: open-type="getUserInfo"

  // sessionFrom	string		否	会话来源
  // 生效时机：open-type="contact"

  // sendMessageTitle	string	当前标题	否	会话内消息卡片标题
  // 生效时机：open-type="contact"

  // sendMessagePath	string	当前标题	否	会话内消息卡片点击跳转小程序路径
  // 生效时机：open-type="contact"

  // sendMessageImg	string	截图	否	会话内消息卡片图片
  // 生效时机：open-type="contact"

  // appParameter	string		否	打开 APP 时，向 APP 传递的参数
  // 生效时机：open-type="launchApp"

  // scope	"userInfo" | "phoneNumber"		否	支付宝小程序 scope
  // 生效时机：open-type="getAuthorize"

  // showMessageCard	boolean	false	否	显示会话内消息卡片
  // 生效时机：open-type="contact"

  // onGetUserInfo	BaseEventOrigFunction<onGetUserInfoEventDetail>		否	用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与 Taro.getUserInfo 返回的一致
  // 生效时机: open-type="getUserInfo"

  // onGetAuthorize	BaseEventOrigFunction<any>		否	支付宝获取会员基础信息授权回调
  // 生效时机：open-type="getAuthorize"

  // onContact	BaseEventOrigFunction<onContactEventDetail>		否	客服消息回调
  // 生效时机：open-type="contact"

  // onGetPhoneNumber	BaseEventOrigFunction<onGetPhoneNumberEventDetail>		否	获取用户手机号回调
  // 生效时机：open-type="getphonenumber"

  // onGetRealnameAuthInfo	BaseEventOrigFunction<any>		否	获取用户实名
  // 生效时机：open-type="getRealnameAuthInfo"

  // onError	BaseEventOrigFunction<any>		否	当使用开放能力时，发生错误的回调
  // 生效时机：open-type="launchApp"

  // onOpenSetting	BaseEventOrigFunction<onOpenSettingEventDetail>		否	在打开授权设置页后回调

  // 生效时机：open-type="openSetting"

  // onLaunchapp	BaseEventOrigFunction<any>		否	打开 APP 成功的回调
  // 生效时机：open-type="launchApp"
};
