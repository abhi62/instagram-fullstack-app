import {View, FlatList, Image, useWindowDimensions, ViewabilityConfig, ViewToken} from 'react-native';
import React, {useState, useRef} from 'react';
import DoublePressable from '../DoublePressable';
import styles from "./styles.carousel"
import colors from '../../theme/colors';

interface ICimages {
  images: string[]
  onDoublePress: () => void
}

const Carousel = ({images, onDoublePress = () => { }}: ICimages) => {
  const {width} = useWindowDimensions()
  const [isActiveImage, setIsActiveImage] = useState(0)
  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51
  }
  const onViewableItemsChanged = useRef(({viewableItems}: {viewableItems: Array<ViewToken>}) => {
    if (viewableItems.length > 0) {

      setIsActiveImage(viewableItems[0]?.index || 0)
    }
  })
  return (
    <View>
      <FlatList
        data={images}
        renderItem={
          ({item}) => {
            return (
              <DoublePressable onDoublePress={onDoublePress}><Image source={{uri: item}} style={{width, aspectRatio: 1}} /></DoublePressable>
            )
          }}
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      <View style={styles.container}>
        {images.map((_, k) => <View key={k} style={[styles.dot, {backgroundColor: isActiveImage === k ? colors.primary : colors.white}]} />)}
      </View>
    </View>
  );
};

export default Carousel;
