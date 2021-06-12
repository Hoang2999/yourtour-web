import React, { useEffect, useState } from "react";

import { firestore, storage } from "../../firebase";

import "./Uptour.css";




function Uptour() {
  let [schedule , setSchedule] = useState([1])
  let {displayName , } = JSON.parse(localStorage.getItem('currentUser')) 
  let {idCity , uID} = JSON.parse(localStorage.getItem('userInfor'))

function changeFile(event){
    let file = event.target.files[0]
    let image = URL.createObjectURL(file)
    document.getElementById('image').src = image
}

function createTour(){

  let file = document.getElementById('file').files[0]
  let name = document.getElementById('name').value
  let introduce = document.getElementById('introduce').value
  let description = document.getElementById('description').value
  let time = document.getElementById('time').value
  let numberPeople = document.getElementById('numberPeople').value
  let category = document.getElementById('category').value
  let languages = document.getElementById('languages').value
  let price = document.getElementById('price').value
  let numberAccount = document.getElementById('numberAccount').value
  let scheduleDetail = []
  for (let i = 1 ; i<= schedule.length ; i++){
    let name = document.getElementById(`name_${i}`).value
    let detail = document.getElementById(`detail_${i}`).value
    scheduleDetail.push({name , detail})
  }

const uploadFile = storage
  .ref(`/images/${file.name}`)
  .put(file);

uploadFile.then((res) => {
    storage
    .ref("images")
    .child(res.ref.name)
    .getDownloadURL()
    .then((url) => {
          console.log(url);
            firestore
            .collection("nonverifiedTours")
            .add({
              tourguideImage: url,
              tourguideImageCover : url,
              avgRating : 0 ,
              category , 
              cityID : idCity ,
              time ,
              tourguideID : uID,
              description , 
              introduce , 
              languages , 
              numberAccount , 
              numRatings : 0 ,
              name , 
              price : parseInt(price) , 
              numberPeople : parseInt(numberPeople) , 
              scheduleDetail,
              tourguideName : displayName
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
          
    });
});
      

}




function insertSchedule(){
  let endIndex = schedule[schedule.length - 1]
  let newSchedule = [...schedule]
  newSchedule.push(endIndex + 1)
  setSchedule(newSchedule)
}


  return (
    <div className="grid wide">
      <div class="row uptour__container">
        <div class="col l-6">
          <img width='100px' height='100px' id='image' alt='#' ></img>
          <span className="uptour__img">Ảnh của chuyến đi</span>
          <input onChange={changeFile} id='file' type="file" />
          <button onClick={()=> document.getElementsByClassName('form-control1')[0].click() } className="home-profile-btn">Thay đổi</button>
        </div>
      </div>
      <div class="row uptour__container">
        <div class="col l-6">
          <span className="uptour__img">Tên chuyến du lịch</span>
          <input className="form-control1" id='name' type="text" />
        </div>
      </div>
      <div class="row uptour__container">
        <div class="col l-6">
          <span className="uptour__img">Giới thiệu về chuyến tham quan</span>
          <input className="form-control1" id='introduce' type="text" />
        </div>
      </div>
      <div class="row uptour__container">
        <div class="col l-6">
          <span className="uptour__img">Những gì chúng ta sẽ làm</span>
          <input className="form-control1" id='description' type="text" />
        </div>
      </div>
      <div class="row uptour__container">
        <div class="col l-3">
          <span className="uptour__img">Thời gian chuyến đi</span>
          <input className="form-control1" id='time' type="text" />
        </div>
        <div class="col l-3">
          <span className="uptour__img">Số lượng khách</span>
          <input className="form-control1" id='numberPeople' type="text" />
        </div>
      </div>
      <div class="row uptour__container">
        <div class="col l-6">
          <span className="uptour__img">Thể loại du lịch</span>
          <select
            type="select"
            className="form-control1"
            id='category'
            placeholder="Hãy chọn thể loại du lịch"
          >
            <option value="Khám phá ẩm thực">Khám phá ẩm thực</option>
            <option value="Khám phá thành phố">Khám phá thành phố</option>
          </select>
        </div>
      </div>
      <div class="row uptour__container">
        <div class="col l-6">
          <span className="uptour__img">Ngôn ngữ</span>
          <input className="form-control1" id='languages' type="text" />
        </div>
      </div>
      <div class="row uptour__container">
        <div class="col l-3">
          <span className="uptour__img">Giá</span>
          <input className="form-control1" id='price' type="text" />
        </div>
      </div>
      <div class="row uptour__container">
        <div class="col l-6">
          <span className="uptour__img">Số tài khoản</span>
          <input className="form-control1" id='numberAccount' type="text" />
        </div>
      </div>
      {schedule.map( i => 
              <div class="row uptour__container">
              <div class="col l-6">
                <span className="uptour__img">Lịch trình cụ thể</span>
                <span className="uptour__img1" >{i}. Điểm dừng chân</span>
                <input className="form-control1" id={`name_${i}`} type="text" />
                <span className="uptour__img1" >Giải thich</span>
                <input className="form-control1" id={`detail_${i}`} type="text" />
              </div>
            </div>

        )}
      <button onClick={insertSchedule} className="home-profile-btn" style={{ marginLeft: "0" }}>
        Thêm lịch trình
      </button>
      <button onClick={createTour} className="home-profile-btn" style={{ marginLeft: "0" }}>
       Tạo tour
      </button>
    </div>
  );
}

export default Uptour;