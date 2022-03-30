import { FlatList, View } from "native-base"
import UserInfo from "./UserInfo";
import { Animated } from "react-native";
import { useRef } from "react";

const UserList = ({userList,setUserList,flatListRef,fetchdata}) => {
    const ITEM_HEIGHT = 100;
    const scrollY = useRef(new Animated.Value(0)).current;

    const renderItem = ({ item, index }) => {
        const inputRange = [
            -1,
            0,
            ITEM_HEIGHT * index,
            ITEM_HEIGHT * (index + 2)
        ]

        const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
        })

        return (
            <Animated.View style={{ transform: [{ scale }], height:ITEM_HEIGHT }}>
                <UserInfo user={item} removeUser={removeUser}/>
            </Animated.View>
        )
        };
    
    const removeUser = (user) => {
        setUserList(userList.filter(u => u.phone !== user.phone))
    }

    return (
        <View mt="12" >
            <Animated.FlatList
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
                ref={flatListRef}
                data={userList}
                renderItem={renderItem}
                keyExtractor={user => user.phone}
                onEndReached={() => fetchdata(false)}
                onEndReachedThreshold={1.5}
            />
        </View>
    )
}

export default UserList