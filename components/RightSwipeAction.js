import {Animated} from "react-native"
import { Entypo } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import {Share} from 'react-native';
import { Pressable, View } from "native-base";

const RightSwipeAction = ({setShowModal,user}) => {
    const onShare = async () => {
        try {
          const result = await Share.share({
            message: `${user.name.first} ${user.name.last}`,
            url: user.picture.large,
            email: user.email,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

    return (
      <>
        <View bg="#E2658C" justifyContent="center">
          <Animated.View>
            <Pressable onPress={() => {setShowModal(true)}} pl="3"  pr="3">
                <Entypo name="cross" size={24} color="white" />
            </Pressable>
          </Animated.View>
        </View>
        <View bg="#42A5F5" justifyContent="center">
          <Animated.View>
            <Pressable onPress={() => { onShare() }} pl="3"  pr="3">
                <SimpleLineIcons name="share-alt" size={24} color="white" />            
            </Pressable>
          </Animated.View>
        </View>
      </>
    )
   }
export default RightSwipeAction;