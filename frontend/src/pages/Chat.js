import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Chat = () => {
    const [chats,setChats] = useState();

    const fetchChats =async ()=>{
        const {data} =await axios.get('/api/chat');
        console.log(data);
        setChats(data);
    }
    useEffect(()=>{
        fetchChats();
    },[])
  return (
    <div>
        <div>
            Chat names 
        </div>
        <div>
            {chats?.map((x,ind)=>{
                return (
                    <p key={ind}>{x?.chatName}</p>
                )
            })}
        </div>
    </div>
  )
}

export default Chat