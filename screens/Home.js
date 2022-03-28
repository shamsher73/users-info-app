import { Pressable, Text, View, Spinner } from "native-base";
import {useState, useEffect, useRef} from "react";
import { AntDesign,Entypo  } from '@expo/vector-icons'; 
import FilterModal from "../components/FilterModal";
import { callAPI } from "../service/api";
import UserList from "../components/UserList";
import Config from "../constants/Config";


const Home = () => {
    const [userList, setUserList] = useState([]);
    const flatListRef = useRef();
    const [modalVisible, setModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [filters, setFilters] = useState({
        noOfResults: Config.noOfResults,
        gender:"",
        countries:[]
    })

    const getItemsWithFilters = () => {
        setIsLoading(true)
        callAPI(filters).then((results) => {setUserList([...results]);setIsLoading(false)})
    }

    useEffect(() => {
        getItemsWithFilters()
    }, [])

    const loadMoreData = () => {
        if(userList.length < filters.noOfResults)
        {
            callAPI(filters).then((results) => setUserList([...userList, ...results]))
        }
    }

    return (
        <View height="full" >
            <UserList userList={userList} setUserList={setUserList} flatListRef={flatListRef} fetchdata={loadMoreData} />
            {isLoading && <Spinner bottom="0" alignSelf="center" position="absolute" accessibilityLabel="Loading posts"  size="lg" color="black.800" mt="1" />}
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