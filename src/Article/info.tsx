import React from "react"
import { View } from "@tarojs/components"

import './index.scss'

export interface IInfoProps {
  content: string;
}

export const YYInfo = (props: IInfoProps) => {
  const {
    content
  } = props
  return <View className="at-article__info">{content}</View>
}