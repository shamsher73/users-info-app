import { FlatList, Pressable, Spinner, Text, View } from "native-base";
import {useState, useEffect, useRef} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UserInfo from "../components/UserInfo";
import { AntDesign,Entypo  } from '@expo/vector-icons'; 
import FilterModal from "../components/FilterModal";
import { callAPI } from "../service/api";

const Home = () => {
    const [userList, setUserList] = useState([]);
    const flatListRef = useRef()
    const [modalVisible, setModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [filters, setFilters] = useState({
        noOfResults: 50,
        gender:"",
        countries:[]
    })

    const getItemsWithFilters = () => {
        setIsLoading(true)
        setUserList([])
        callAPI(filters)
        .then(response => response.json())
        .then(data => setUserList([...data.results]))
        .catch(error => console.log(error))
        setIsLoading(false)
    }

    useEffect(() => {
        fetchdata()
    }, [filters])

    const fetchdata = () => {
        callAPI(filters)
        .then(response => response.json())
        .then(data => setUserList([...userList, ...data.results]))
        .catch(error => console.log(error))
    }

    const removeUser = (user) => {
        setUserList(userList.filter(u => u.phone !== user.phone))
    }

    const renderItem = ({ item }) => (
        <UserInfo user={item} removeUser={removeUser}/>
    );

    return (
        <View height="full">
            <SafeAreaView>
                { !isLoading ?
                <FlatList
                ref={flatListRef}
                data={userList}
                renderItem={renderItem}
                keyExtractor={user => user.phone}
                onEndReached={() => userList.length < filters.noOfResults ? fetchdata() : null}
                onEndReachedThreshold={1.5}
                />
                :
                <Spinner accessibilityLabel="Loading posts"  size="lg" color="black.800" mt="1" />
            }
            </SafeAreaView>
            <View position="absolute" bottom="10" right="5" >
                <Pressable onPress={() => flatListRef.current.scrollToOffset({ animated: true, offset: 0 })} alignItems="center" bg="white" p="2" shadow="8" borderRadius="20">
                    <AntDesign name="arrowup" size={28} color="#463264" />
                </Pressable>
                <Pressable onPress={() => setModalVisible(true)} alignItems="center"  bg="white" shadow="8" borderRadius="40" mt="2" p="2">
                    <Entypo name="menu" size={28} color="#463264" />
                    <Text fontSize="10">Filters</Text>
                </Pressable>
            </View>
            <FilterModal modalVisible={modalVisible} setModalVisible={setModalVisible} filters={filters} setFilters={setFilters} getItemsWithFilters={getItemsWithFilters}/>
        </View>
    )
}

export default Home;