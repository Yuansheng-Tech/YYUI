import React from 'react';
import { View, Image, Text, Button } from '@tarojs/components';

export interface IIOSCardProps {

}

export const YYIOSCard = (props: IIOSCardProps) => {
  const {

  } = props;
  return (
    <View className="appstore-card card card-expandable">
      <View className="card-content">
        <View className="appstore-card-header appstore-card-header-text-bottom">
          <Image src="static/apps-images/crossy-road-5.jpg" />
            <View className="appstore-card-header-text">
              <View className="appstore-card-subtitle" style="color: rgb(0, 0, 0);">
              </View>
              <View className="appstore-card-title" style="color: rgb(255, 255, 255); font-size: 44px; font-weight: 800; line-height: 1;">
                <View>GAME</View>
                <View>OF THE</View>
                <View>DAY</View>
              </View>
              </View>
              <View className="apps-table-list list no-hairlines no-chevron" style="color: rgb(255, 255, 255);">
                <View>
                  <View className="">
                    <View className="item-link" href="/app/924373886">
                      <View className="item-content">
                        <View className="item-media">
                          <Image className="apps-table-list-image" slot="media" src="static/apps-images/crossy-road-icon.jpg" alt="Crossy Road" />
                        </View>
                        <View className="item-inner">
                          <View className="item-title">
                            <View className="apps-table-list-title" slot="title">
                              Crossy Road
                            </View>
                          <View className="apps-table-list-subtitle item-text" slot="title">
                            Endless Arcade Hopper
                          </View>
                        </View>
                        <View className="apps-table-list-button" slot="inner">
                          <Button className="prevent-active-state-propagation button button-round" type="button">
                            Get
                          </Button>
                          <Text>In-App Purchases</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="appstore-card-close-button card-opened-fade-in">
            <View href="#" className="link card-close">
              <View className="f7-icons" style="color: rgb(255, 255, 255);">
                multiply_circle_fill
              </View>
            </View>
          </View>
          <View className="appstore-card-content card-content-padding">
            <View className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corporis minima inventore? Quod unde ex fugiat itaque consequuntur, rem assumenda dolor beatae incidunt facere dolorem nobis repellat expedita sed ea?</View>
            <View className="p">Ducimus, eveniet ea adipisci, impedit repellendus rem doloremque minima incidunt nihil cumque voluptatibus quos laudantium animi quibusdam odio molestias iusto delectus voluptatem! Totam laborum rem numquam temporibus possimus quae iure?</View>
            <View className="h3">Minus at repudiandae</View>
            <View className="p">Repellendus qui possimus repellat? Voluptas distinctio asperiores impedit enim corporis dolores nulla eius provident dignissimos? Minus at repudiandae consequuntur dolorem magni quibusdam perferendis animi amet tenetur eos iure, id sint.</View>
            <View className="p">Dolore exercitationem consequuntur excepturi? Voluptatem totam adipisci illum voluptate, iste quia, excepturi non culpa, reprehenderit repudiandae labore itaque! Cupiditate, harum laborum mollitia quidem tempora est saepe perspiciatis fugiat quia neque.</View>
          </View>
        </View>
      </View>
      );
};
