import React, { useEffect, useState } from 'react'

import { firestore } from '../../firebase'

import './answer.css'

function Answer() {
  const [question , setQuestion] = useState([])
  let { uid } = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(()=>{
    let dataRoot = []
        firestore
        .collection('questionActiveTourGuide')
        .get()
        .then((doc)=>{
             doc.forEach((i) =>{
              dataRoot.push(i.data())
             })
             setQuestion(dataRoot)
        })
        .catch((err)=>{
          console.log(err);
        })
  } , [])

  function sendQuestion(){
      let questions  = []
      question.forEach((i)=>{
        console.log(document.getElementsByClassName(`${i.step}`)[0].value);
        questions.push({
          question : document.getElementById(`${i.step}`).innerText,
          answer : document.getElementsByClassName(`${i.step}`)[0].value
      
        })
      })
     firestore
     .collection("questions")
     .add({
        idTraveler : uid ,
        questions
     })
     .then((docRef) =>{
      console.log(docRef.id);
      alert("Success");
      window.location.href = '/home'
    }
    )
    .catch((error) => {
      console.log(error);
      alert('Fail')

})


  }

  
  function setInputAnswer(step){
    return (event)=>{
      let inputAnswer = document.getElementsByClassName(step)[0]
      inputAnswer.value = event.target.value
    }
    
  }


    return (
      <div className="grid1 wide1" style={{display:'flex',backgroundColor:'#ccc', padding:'20px'}}>
          <div className="auth-form" style={{margin:'auto', paddingBottom:'20px'}}>
          {question.map(i =>
                <div className="auth-form__container">
                <div className="auth-form__header">
                  <span id={`${i.step}`} className="auth-form__heading">
                    {i.question}
                  </span>
                </div>
                {i.data.length === 0 || Object.keys(i.data).length === 0 ? 
              <input type='text' className={`${i.step}`} style={{width:'100%',padding: '8px', marginTop:'8px'}}></input>
                :      
                 i.data.map(qs => 
                  i.step === 1 ?  
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <input type='text' className={`${i.step}`} style={{display : 'none'}}></input>
                      <span> {qs.label}</span>
                      <input
                      type="radio"
                      name={`${i.step}`}
                      className="auth-form__input1"
                      value={qs.value}
                      onClick={setInputAnswer(i.step)}
                      />
                 </div>
                  : 
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                  <span style={{fontSize:'1.4rem'}}>{qs.nameTick} : {qs.text}</span>
                  <input type='text' className={`${i.step}`}  style={{display : 'none'}} />
                     <input
                     type="radio"
                     name={`${i.step}`}
                     className="auth-form__input1"
                     value={qs.text}
                     onClick={setInputAnswer(i.step)}
                   />
                 </div>
                  )} 
                </div>
           )}
                 <div style={{textAlign:'center'}}>
                  <button onClick={sendQuestion} className="home-profile-btn1">
                      Gửi câu trả lời
                    </button>
                 </div>
        </div>
      </div>
    )
}

export default Answer;