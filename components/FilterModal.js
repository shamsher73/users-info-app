import { Modal, Pressable, Text, View } from 'native-base'
import React from 'react'
import Countries from '../constants/Countries'
import { AntDesign } from '@expo/vector-icons'; 

const FilterModal = ({filters, setFilters ,submitFilter,resetFilter}) => {

    const toggleCountry = (country) => {
        if((filters.countries.includes(country.code)))
        {
            setFilters({...filters,countries:filters.countries.filter(c => c !== country.code)})
        } else {
            setFilters({...filters, countries:[...filters.countries,country.code]})
        }
    }

    return (
            <Modal.Content height="1/2" marginBottom="0" marginTop="auto" borderTopLeftRadius="20" borderTopRightRadius="20"  borderBottomRadius="0">
             
                <Modal.Body>
                    <View flexDirection="row" justifyContent="center">
                        <View>
                            <Text fontStyle="normal" fontWeight="700" fontSize="20" lineHeight="23">Filters</Text>
                        </View>
                    </View>


                    <View flexDirection="row" justifyContent="space-between" mt="5">
                        <View>
                            <Text fontStyle="normal" fontWeight="700" fontSize="16" lineHeight="24">No. of Results</Text>
                        </View>
                        <View flexDirection="row" alignItems="center">
                            <Pressable onPress={() => setFilters({...filters, noOfResults : filters.noOfResults - 1})}>
                                <AntDesign name="minuscircleo" size={24} color="black" />
                            </Pressable>
                       
                           <Text ml="3" mr="3">{filters.noOfResults}</Text>
                           <Pressable onPress={() => setFilters({...filters, noOfResults : filters.noOfResults + 1})}>
                                <AntDesign name="pluscircleo" size={24} color="black" />
                            </Pressable>
                        </View>
                    </View>

                    <View flexDirection="row" justifyContent="space-between" mt="5" pt="3" borderTopWidth="1" borderColor="#979797" >
                        <View>
                            <Text fontStyle="normal" fontWeight="700" fontSize="16" lineHeight="24">Gender:</Text>
                        </View>
                        <View flexDirection="row" alignItems="center">
                            <Pressable onPress={() => setFilters({...filters, gender:"female"})}>
                            <View bg={filters.gender == "female" ? "#463264" : "#E2E2E2" } pl="4" pr="4" p="1" borderLeftRadius="10" ><Text color={filters.gender == "female" ? "white" : "black" } fontWeight="bold" >F</Text></View>
                            </Pressable>
                            <Pressable onPress={() => setFilters({...filters, gender:"male"})}>
                                <View bg={filters.gender == "male" ? "#463264" : "#E2E2E2" } pl="4" pr="4" p="1" borderRightRadius="10"><Text color={filters.gender == "male" ? "white" : "black" } fontWeight="bold" >M</Text></View>
                            </Pressable>
                        </View>
                    </View>

                    <View justifyContent="space-between" mt="5" pt="3"  borderTopWidth="1" borderColor="#979797">
                        <View>
                            <Text fontStyle="normal" fontWeight="700" fontSize="16" lineHeight="24">Country</Text>
                        </View>
                        <View flexDirection="row" alignItems="center" flexWrap="wrap">
                            {
                                Countries.map((country, index) => {
                                    return (
                                        <Pressable key={index} onPress={() => toggleCountry(country)}>
                                        <View key={index} bg={(filters.countries.includes(country.code)) ? "#463264" : "#ffffff"} pl="4" pr="4" p="1" borderRadius="20" borderColor="#000000" borderWidth="1" m="1">
                                            <Text color={(filters.countries.includes(country.code)) ? "white" : "black"} fontWeight="bold">{country.name}</Text>
                                        </View>
                                        </Pressable>
                                    )
                                })
                            }
                        </View>
                    </View>

                </Modal.Body>
                   
                <View bottom="0" mb="6" flexDirection="row" borderTopWidth="1" borderColor="#979797" pt="2" >
                    <Pressable ml="2" onPress={() => resetFilter() } flex="1" alignItems="center" justifyContent="center">
                        <View>
                            <Text>Reset</Text>
                        </View>
                    </Pressable>
                    <Pressable  mr="2" onPress={() => submitFilter()} flex="1" alignItems="center" justifyContent="center" bg="#463264" p="2">
                        <View>
                            <Text textTransform="uppercase" color="white" fontWeight="bold" letterSpacing="2.25px">Submit</Text>
                        </View>
                    </Pressable>
                </View>
                
            </Modal.Content>
    )
}

export default FilterModal