import { Image, Text, View } from "native-base";
import {useState} from "react";
import { Swipeable } from "react-native-gesture-handler";
import DeleteModal from "./DeleteModal";
import RightSwipeAction from "./RightSwipeAction";

const UserInfo = ({user,removeUser}) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <View>
            <Swipeable renderRightActions={() => RightSwipeAction(setShowModal,user)}>
                <View key={user.login.uuid} w="full" flexDirection="row" p="2" borderBottomWidth="0.5" borderBottomColor="#E0E0E0" mt="1"  mb="1">
                    <View alignItems="center" flex="1">
                        <Image borderRadius={100} source={{
                                uri: user.picture.medium
                                }} alt="Alternate Text" size="md" />
                    </View>
                    <View flexDirection="column" ml="4" flex="3" >
                        <View flexDirection="row" justifyContent="space-between">
                            <Text fontSize="14" fontWeight="bold">{user.name.first} {user.name.last}</Text>
                            <View  bg={(user.gender == "male") ? "#195A50" : "#FFA0BE"} rounded="xl" width="1/3" alignItems="center">
                                <Text color="white" fontWeight="bold" textTransform="capitalize">{user.gender}</Text>
                            </View>
                        </View>
                        <View alignItems="flex-start" mt="4">
                            <Text>{user.email}</Text>
                            <Text>{user.phone}</Text>
                        </View>
                    </View>
                </View>
            </Swipeable>
            <DeleteModal showModal={showModal} setShowModal={setShowModal} user={user} removeUser={removeUser} />
        </View> 
    );
}

export default UserInfo;