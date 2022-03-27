import { FlatList, View } from "native-base"
import UserInfo from "./UserInfo";

const UserList = ({userList,setUserList,flatListRef,fetchdata}) => {
    const renderItem = ({ item }) => (
        <UserInfo user={item} removeUser={removeUser}/>
    );

    const removeUser = (user) => {
        setUserList(userList.filter(u => u.phone !== user.phone))
    }

    return (
        <View mt="12" >
            <FlatList
                ref={flatListRef}
                data={userList}
                renderItem={renderItem}
                keyExtractor={user => user.phone}
                onEndReached={() => fetchdata()}
                onEndReachedThreshold={1.5}
            />
        </View>
    )
}

export default UserList