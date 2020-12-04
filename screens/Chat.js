import React, {useEffect, useState} from 'react'
import {
    View,
    Text
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import api from '../api';


const Chat = (props) => {
    
    const { user } = props.navigation.state.params;
    
    
  const [messages, setMessages] = useState([]);
    
  
  useEffect(() => {
    console.disableYellowBox = true;

    api.updateMessages((msg) => {
        setMessages((prevMsgs) => GiftedChat.append(prevMsgs, msg));
    });


    }, []);
  

    function onSendMessage(msgs){
        msgs.forEach(msgs => {
            msgs.createdAt = new Date().getTime();
            api.createMessage(msgs);
        });
    }

    return(
        <GiftedChat user={user}  messages={messages} onSend={onSendMessage} />
    );
};


export default Chat;