import React, { useEffect, useState } from 'react'

import { firestore } from '../../firebase'

import './ListChat.css'
function ListChat(){
  let [chat, setChat] = useState([])
  let [isChat , setIsChat] = useState([])
  let {uid , displayName , photoURL} = JSON.parse(localStorage.getItem('currentUser'))  ?  JSON.parse(localStorage.getItem('currentUser')) : ''
  useEffect(()=>{
    firestore
    .collection('threads')
    .orderBy('latestMessage.createdAt', 'desc')
    .onSnapshot(querySnapshot => {
        let threads = [];
        let listChatForUser = []
        querySnapshot.docs.forEach(documentSnapshot => {

                threads.push({ 
                    id: documentSnapshot.id,
                    name: '',
                    latestMessage: { text: '' },
                    ...documentSnapshot.data(),
                });
        });
        threads.forEach(i => {
          if (i.user_1._id === uid || i.user_2._id === uid){
            listChatForUser.push(i)
          }
        })
        setChat(listChatForUser);
    });

    
  }, [])

 async function handelMessage(event){
          if (event.keyCode === 13){
            let text = document.getElementById('chatcontent').value
            firestore
            .collection('threads')
            .doc(localStorage.getItem('idchat'))
            .collection('messages')
            .add({
                text,
                createdAt: new Date().getTime(),
                user: {
                    _id: uid ,
                    displayName: displayName,
                    avatar: photoURL
                }
            })
    
  
            await firestore
                .collection('threads')
                .doc(localStorage.getItem('idchat'))
                .set(
                    {
                        latestMessage: {
                            text,
                            createdAt: new Date().getTime()
                        }
                    },
                    { merge: true }
                )

                document.getElementById('chatcontent').value = ''
          }
  }


    function changeListChat(id){
      localStorage.setItem('idchat' , id)
      firestore
      .collection('threads')
      .doc(id)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        let dataResult = []
        querySnapshot.docs.map(doc => {
              const firebaseData = doc.data();
              if(firebaseData.user){
                dataResult.push(firebaseData)
              }
          
          })
          
          setIsChat(dataResult.reverse())
      })


    }
    if(uid){

    return (
     <div>
        <div className="container">
        <h3 className=" text-center">Messaging</h3>
        <div className="messaging">
          <div className="inbox_msg">
            <div className="inbox_people">
              <div className="headind_srch">
                <div className="recent_heading">
                  <h4>Recent</h4>
                </div>
                <div className="srch_bar">
                  <div className="stylish-input-group">
                    <input type="text" className="search-bar" placeholder="Search" />
                    <span className="input-group-addon">
                      <button type="button"> <i className="fa fa-search" aria-hidden="true" /> </button>
                    </span> </div>
                </div>
              </div>
              <div className="inbox_chat">

               
                {chat.map(i =>
                       <div className="chat_list" onClick={()=> changeListChat(i.id)}>
                       <div className="chat_people">
                         <div className="chat_img"> <img src={uid === i.user_1._id ? i.user_2.image :i.user_1.image} alt="sunil" /> </div>
                         <div className="chat_ib">
                           <h5>{uid === i.user_1._id ? i.user_2.nameUser :i.user_1.nameUser}<span className="chat_date">{(new Date(i.latestMessage.createdAt)).toString().substring(0,25)}</span></h5>
                           <p>{i.latestMessage.text}</p>
                         </div>
                       </div>
                     </div>

                  )}
         

              </div>
            </div>
            <div className="mesgs">
            <div className="msg_history">
            {isChat.map(i =>
                <div>
                        {i.user._id === uid ? 
                               <div className="outgoing_msg">
                              <div className="sent_msg">
                                <p>{i.text}</p>
                                <span className="time_date">{(new Date(i.createdAt)).toString().substring(0,25)} </span> </div>
                            </div>
                 
                              :
                              <div className="incoming_msg">
                              <div className="incoming_msg_img"> <img src={i.user.avatar} alt="sunil" /> </div>
                              <div className="received_msg">
                                <div className="received_withd_msg">
                                  <p>{i.text}</p>
                                  <span className="time_date">{(new Date(i.createdAt)).toString().substring(0,25)}</span></div>
                              </div>
                            </div>
                }
                </div>
               
            )}
             </div>
  


              <div className="type_msg">
                <div className="input_msg_write">
                  <input type="text" className="write_msg" id='chatcontent' onKeyUp={handelMessage} placeholder="Type a message" />
                  <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true" /></button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center top_spac"> Design by <a target="_blank" href="https://www.linkedin.com/in/sunil-rajput-nattho-singh/">Sunil Rajput</a></p>
        </div></div>
     </div>
    )
}
else{
        window.location.href = '/login'
}
}


export default ListChat