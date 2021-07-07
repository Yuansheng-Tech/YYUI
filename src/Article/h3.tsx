import React from "react"
import { View } from "@tarojs/components"

import './index.scss'

export interface IH3Props {
  content: string;
}

export const YYH3 = (props: IH3Props) => {
  const {
    content
  } = props
  return <View className="at-article__h3">{content}</View>
}