import {FlatList} from 'react-native'
import {IPost} from '../Types/models'
import FeedGridItem from './FeedGridItem'

interface IGridView {
  post: IPost[]
  listHeaderComponent?: React.ComponentType<any> | React.ReactElement | null | undefined
}


const ProfileScreen = ({post, listHeaderComponent}: IGridView) => {
  return (
    <FlatList
      data={post}
      renderItem={({item}) => <FeedGridItem post={item} />}
      showsVerticalScrollIndicator={false}
      numColumns={3}
      ListHeaderComponent={listHeaderComponent}
      style={{marginHorizontal: -1}}
    />
  )
}

export default ProfileScreen