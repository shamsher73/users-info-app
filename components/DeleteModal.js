import { Button, Center, Modal, Text, View } from 'native-base';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 


const DeleteModal = ({showModal,setShowModal,user,removeUser}) => {
    return (
            <Center>
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <Modal.Content maxWidth="400px">
                
                    <Modal.Body mt="4">
                        <Center><Ionicons name="md-trash-outline" size={24} color="black" /></Center>
                        <View alignItems="center">
                            <Text fontWeight="bold">Remove {user.name.first} {user.name.last}</Text>
                            <Text>Are you sure?</Text>
                        </View>
                      
                        <View justifyContent="space-around" flexDirection="row" mt="8">
                         
                            <Button variant="ghost" pl="8" pr="8" color="#42A5F5" borderWidth="1" borderColor="#42A5F5" onPress={() => {
                                setShowModal(false);
                            }}>
                                <Text color="#42A5F5" letterSpacing="2.25"> NO</Text>
                            </Button>
                            <Button  bg="#42A5F5" pl="8" pr="8"  onPress={() => {
                                removeUser(user);
                                setShowModal(false);
                            }}>
                                <Text color="white" letterSpacing="2.25">YES</Text>
                            </Button>
                          
                        </View>
                    </Modal.Body>
         
                    </Modal.Content>
                </Modal>
                </Center>
    )
}

export default DeleteModal