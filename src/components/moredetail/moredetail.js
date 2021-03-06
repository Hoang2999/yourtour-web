// import React, { useState, useEffect, useRef } from "react";
// import "./moredetail.css";
// import "../grid.css";
// import { Link, useParams } from "react-router-dom";
// import hoang from "../../img/hoang.jpg";
// import Calendar from "react-calendar";
// import StarRatings from "react-star-ratings";
// import Collapse from "@kunukn/react-collapse";
// import history from "../../history"
// import { firestore } from "../../firebase";
// export default function MoreDetail(props) {
//   let {id}  = useParams()
//   const wrapperRef = useRef(null);
//   const [ item, setItem] = useState(null);
//   const [rating, setRating] = useState(props.location.myCustomProps);
//   const [toggleCalendar, setToggleCalendar] = useState(false);
//   const [value, onChange] = useState(new Date());
//   const [currentUser, setCurrentUser] = useState(
//     JSON.parse(localStorage.getItem("currentUser"))
//   );
//   const [adult, setAdult] = useState(0);
//   const [children, setChildren] = useState(0);
//   const [openTime, setOpenTime] = useState(false);
//   const [selectTime, setSelectTime] = useState(0)
//   const arrayTime = [
//     {
//       value: 6,
//       time: "06:00",
//     },
//     {
//       value: 7.5,
//       time: "07:30",
//     },
//     {
//       value: 9,
//       time: "09:00",
//     },
//     {
//       value: 10.5,
//       time: "10:30",
//     },
//     {
//       value: 12,
//       time: "12:00",
//     },
//     {
//       value: 13.5,
//       time: "13:30",
//     },
//     {
//       value: 15,
//       time: "15:00",
//     },

//     {
//       value: 16.5,
//       time: "16:30",
//     },
//     {
//       value: 18,
//       time: "18:00",
//     },
//     {
//       value: 19.5,
//       time: "19:30",
//     },
//     {
//       value: 21,
//       time: "21:00",
//     },
//     {
//       value: 22.5,
//       time: "22:30",
//     },
//   ];


//   useEffect(()=>{
//     async function getData(){
//       console.log(id);
//       await firestore.collection('tours').doc(id).get()
//       .then(item => {
//               setItem(item.data());
//       })
//     }
//     getData()


//   },[])
// console.log('children' + children, 'adult' + adult);
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
//         setToggleCalendar(false);
//       }
//     }
//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [wrapperRef]);
//   const changeRating = (newRating) => {
//     setRating(newRating);
//   };
//   console.log("value" + value);

//   const handlePayment = () => {
//     const total = item.price * adult

//     if (currentUser) {
//       console.log("payment");
//       history.push(`/payment?total=${total}&time=${selectTime}`);
//     } else {
//       console.log("login");
//       history.push("/login");
//       window.location.reload();
//     }
//   };
//   console.log(value.getDate())
//   return (
//     <div className="grid wide">
//       <div className="row sm-gutter">
//         <div className="col l-8">
//           {" "}
//           {item && (
//             <>
//               <div className="row sm-gutter moredetail__container">
//                 <div className="col l-12">
//                   <div>
//                     {" "}
//                     <img
//                       src={item.tourguideImageCover}
//                       alt=""
//                       style={{ width: "100%" }}
//                     ></img>{" "}
//                     <h1 className="moredetail__title"> {item.name} </h1>{" "}
//                     <p className="moredetail__decs"> {item.introduce} </p>{" "}
//                   </div>{" "}
//                 </div>{" "}
//               </div>{" "}
//               <div className="row sm-gutter moredetail__body">
//                 <div className="col l-4">
//                   <i
//                     className="moredetail__icon far fa-clock"
//                     style={{
//                       color: "var(--primary-color)",
//                       fontSize: "1.2rem",
//                     }}
//                   ></i>{" "}
//                   <span className="moredetail__location">
//                     {" "}
//                     {item.time}
//                     gi???{" "}
//                   </span>{" "}
//                 </div>{" "}
//                 <div className="col l-4">
//                   <i
//                     className="moredetail__icon fas fa-user-friends"
//                     style={{
//                       color: "var(--primary-color)",
//                       fontSize: "1.2rem",
//                     }}
//                   ></i>{" "}
//                   <span className="moredetail__location">
//                     Nh??m c?? th??? l??n ?????n {item.numberPeople}
//                     ng?????i{" "}
//                   </span>{" "}
//                 </div>{" "}
//               </div>{" "}
//               <div className="row sm-gutter moredetail__body">
//                 <div className="col l-4">
//                   <i
//                     className="moredetail__icon fas fa-utensils"
//                     style={{
//                       color: "var(--primary-color)",
//                       fontSize: "1.2rem",
//                     }}
//                   ></i>{" "}
//                   <span className="moredetail__location">
//                     {" "}
//                     {item.category}{" "}
//                   </span>{" "}
//                 </div>{" "}
//                 <div className="col l-4">
//                   <i
//                     className="moredetail__icon fas fa-globe"
//                     style={{
//                       color: "var(--primary-color)",
//                       fontSize: "1.2rem",
//                     }}
//                   ></i>{" "}
//                   <span className="moredetail__location">
//                     {" "}
//                     {item.languages}{" "}
//                   </span>{" "}
//                 </div>{" "}
//               </div>{" "}
//               <div className="row sm-gutter moredetail__reasons">
//                 <div className="col l-8">
//                   <h1 className="moredetail__heading">
//                     4 l?? do ????? ?????t tour ????? tr???i nghi???m{" "}
//                   </h1>{" "}
//                   <div className="row sm-gutter">
//                     <div className="col l-6 moredetail__body">
//                       <i
//                         className="fas fa-check moredetail__resons-icons"
//                         style={{ color: "var(--primary-color)" }}
//                       ></i>{" "}
//                       <span className="moredetail__reasons-body">
//                         Kh??m ph?? qua c??c tr?? ch??i & ho???t ?????ng vui nh???n{" "}
//                       </span>{" "}
//                     </div>{" "}
//                     <div className="col l-6 moredetail__body">
//                       <i
//                         className="fas fa-check moredetail__resons-icons"
//                         style={{ color: "var(--primary-color)" }}
//                       ></i>{" "}
//                       <span className="moredetail__reasons-body">
//                         Th?????ng th???c m???t m??n kem cho tr??? em{" "}
//                       </span>{" "}
//                     </div>{" "}
//                     <div className="col l-6 moredetail__body">
//                       <i
//                         className="fas fa-check moredetail__resons-icons"
//                         style={{ color: "var(--primary-color)" }}
//                       ></i>{" "}
//                       <span className="moredetail__reasons-body">
//                         100 % tr???i nghi???m th??n thi???n v???i gia ????nh{" "}
//                       </span>{" "}
//                     </div>{" "}
//                     <div className="col l-6 moredetail__body">
//                       <i
//                         className="fas fa-check moredetail__resons-icons"
//                         style={{ color: "var(--primary-color)" }}
//                       ></i>{" "}
//                       <span className="moredetail__reasons-body">
//                         C??c quy ?????nh an to??n c???a ?????a ph????ng ???????c ????a ra ????? ?????m
//                         b???o s??? tho???i m??i c???a b???n{" "}
//                       </span>{" "}
//                     </div>{" "}
//                   </div>{" "}
//                 </div>{" "}
//               </div>
//               <div className="row sm-gutter moredetail__container">
//                 <div className="col l-12">
//                   <h1 className="moredetail__expect-title">
//                     Nh???ng g?? ch??ng ta s??? l??m{" "}
//                   </h1>{" "}
//                   <p className="moredetail__expect-decs">
//                     {" "}
//                     {item.description}{" "}
//                   </p>{" "}
//                 </div>{" "}
//               </div>
//               <div className="moredetail__pick">
//                 <h1 className="moredetail__pick-title">
//                   Nh???ng g?? b???n c?? th??? mong ?????i{" "}
//                 </h1>{" "}
//                 <p className="moredetail__pick-desc">
//                   T???t c??? ng?????i d??n ?????a ph????ng c???a ch??ng t??i y??u th??nh ph??? c???a h???
//                   v?? nh???ng g?? h??? l??m.T??m hi???u v??? c??u chuy???n c?? nh??n, ni???m ??am m??
//                   v?? t??nh c??ch c???a h???, ????? b???n c?? th??? ch???n c??u chuy???n y??u th??ch
//                   c???a m??nh.{" "}
//                 </p>{" "}
//                 <div className="row sm-gutter">
//                   <div className="col l-6">
//                     <Link to="/tourguide" className="details__container-list">
//                       <div className="details__container-item">
//                         <img
//                           src={item.tourguideImage}
//                           style={{
//                             width: "100%",
//                             backgroundPosition: "center",
//                           }}
//                         ></img>{" "}
//                         <div className="moredetails__container-title">
//                           <div className="moredetails__container-desc">
//                             Xin ch??o t??i t??n l??{" "}
//                           </div>{" "}
//                           <div className="moredetails__container-link">
//                             {" "}
//                             {item.tourguideName}, ch??c b???n c?? chuy???n ??i vui v???{" "}
//                             {item.tourguideName}{" "}
//                           </div>{" "}
//                         </div>{" "}
//                         <div className="moredetails__container-speak">
//                           <span className="moredetails__container-speaker">
//                             T??i c?? th??? n??i ???????c:
//                           </span>{" "}
//                           <span className="moredetails__container-language">
//                             {" "}
//                             {item.languages}, Vietnamese{" "}
//                           </span>{" "}
//                         </div>{" "}
//                         <div className="moredetails__container-star">
//                           <div className="moredetails__home-product-item__rating">
//                             <StarRatings
//                               rating={item.avgRating}
//                               starRatedColor="var(--primary-color)"
//                               numberOfStars={5}
//                               name="rating"
//                               starDimension="20px"
//                               starSpacing="0"
//                               isAggregateRating
//                             />
//                             <span className="rating__name">
//                               ({item.avgRating.toFixed(1)}){" "}
//                             </span>{" "}
//                           </div>{" "}
//                           <button
//                             className="moredetails__home-product-pick-me"
//                             style={{
//                               backgroundColor: "var(--white-color)",
//                               color: "var(--primary-color)",
//                             }}
//                           >
//                             ?????t chuy???n ??i{" "}
//                           </button>{" "}
//                         </div>{" "}
//                       </div>{" "}
//                     </Link>{" "}
//                   </div>{" "}
//                 </div>{" "}
//               </div>{" "}
//               <div className="moredetail__plan">
//                 <h1 className="moredetail__title"> ????y l?? k??? ho???ch </h1>{" "}
//                 <p className="moredetail__desc">
//                   Ki???m tra k??? ho???ch b??n d?????i ????? bi???t nh???ng g?? b???n s??? l??m v???i
//                   h?????ng d???n vi??n ?????a ph????ng c???a b???n.{" "}
//                 </p>{" "}
//                 <div className="row sm-gutter moredetail__dash">
//                   {item.scheduleDetail.map((sche) => (
//                     <div className="col l-8">
//                       <div className="moredetail__plan-meeting">
//                         <h3 className="moredetail__meeting"> {sche.name} </h3>{" "}
//                         <p className="moredetail__desc">{sche.detail} </p>{" "}
//                       </div>{" "}
//                     </div>
//                   ))}
//                 </div>{" "}
//               </div>
//             </>
//           )}{" "}
//         </div>
//         <div className="col l-4">
//         {item && (
//           <div className="booknow">
//           <div className="booknow__heading"> Gi?? ti???n m???i ng?????i {item.price} $</div>
//             <span className="booknow__child"> Tr??? em mi???n ph?? </span>{" "}
//             <div className="calendar__container">
//               <a
//                 className="header__search-input-wrap1"
//                 onClick={() => setToggleCalendar(!toggleCalendar)}
//               >
//                 <div className="header__search-input-text">
//                   <div className="header__search-icon-text">
//                     <i className="header__search-icon fas fa-table"></i>
//                     <span
//                       className="header__search-input"
//                       style={{ color: "grey" }}
//                     >
//                       {value.toLocaleDateString()}
//                     </span>
//                   </div>
//                   <i className="header__search-icon fas fa-chevron-down"></i>
//                 </div>
//               </a>
//               <div ref={wrapperRef}>
//                 {toggleCalendar ? (
//                   <Calendar
//                     className="header__search-history1"
//                     onChange={onChange}
//                     value={value}
//                   />
//                 ) : null}
//               </div>
//             </div>{" "}
//             <button className="select__time1"
//               onClick={() =>
//                 openTime ? setOpenTime(false) : setOpenTime(true)
//               }
//             >
//               <span>Select time</span>
//             </button>
//             <Collapse
//               transition={`height ${"250ms"} cubic-bezier(.4, 0, .2, 1)`}
//               isOpen={openTime}
//             >
//               {arrayTime.map((checktime, index) => {
//                 console.log(new Date().getHours);
//                 return (
//                   (new Date().getHours() < checktime.value || new Date().getDate() !== value.getDate() ) && (
//                     <button className="select__time" onClick={() => setSelectTime(index)} style={{ backgroundColor: selectTime == index ? 'var(--primary-color)' : 'var(--white-color)' }} >{checktime.time}</button>
//                   )
//                 );
//               })}
//             </Collapse>
//             <button className="header__search-input-people">
//               <div className="header__search-input-text1">
//                 <span
//                   className="header__search-input1"
//                   style={{ color: "grey" }}
//                 >
//                   {adult + children} People
//                 </span>
//                 <i className="header__search-icon fas fa-chevron-down"></i>
//               </div>
//               <div className="header__navbar-user-menu1">
//                 <div className="header__navbar-user-item">
//                   <div className="header__navbar-user-menu-people">Adults</div>
//                   <div className="header__navbar-user-menu-count">
//                     <button
//                       className="header__navbar-user-icon fas fa-minus"
//                       onClick={() => {
//                         if (adult > 0) {
//                           setAdult(adult - 1);
//                         }
//                       }}
//                     ></button>
//                     <span>{adult} </span>
//                     <button
//                       className="header__navbar-user-icon fas fa-plus"
//                       onClick={() => {
//                         if (adult <= item.numberPeople - children) {
//                           setAdult(adult + 1);
//                         }
//                       }}
//                     ></button>
//                   </div>
//                 </div>
//                 <div className="header__navbar-user-item">
//                   <div className="header__navbar-user-menu-people">
//                     Children
//                   </div>
//                   <div className="header__navbar-user-menu-count">
//                     <button
//                       className="header__navbar-user-icon fas fa-minus"
//                       onClick={() => {
//                         if (children > 0) {
//                           setChildren(children - 1);
//                         }
//                       }}
//                     ></button>
//                     <span> {children} </span>
//                     <button
//                       className="header__navbar-user-icon fas fa-plus"
//                       onClick={() => {
//                         if (children <= item.numberPeople - adult) {
//                           setChildren(children + 1);
//                         }
//                       }}
//                     ></button>
//                   </div>
//                 </div>
//               </div>
//             </button>
//             <button onClick={handlePayment} className="booknow__btn">
//               ?????t chuy???n ??i{" "}
//             </button>{" "}
//           </div>)}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import "./moredetail.css";
import "../grid.css";
import { Link, useParams } from "react-router-dom";
import hoang from "../../img/hoang.jpg";
import Calendar from "react-calendar";
import StarRatings from "react-star-ratings";
import Collapse from "@kunukn/react-collapse";
import history from "../../history"
import { firestore } from "../../firebase";
export default function MoreDetail(props) {
  let {id}  = useParams()
  const wrapperRef = useRef(null);
  const [ item, setItem] = useState(null);
  const [rating, setRating] = useState(props.location.myCustomProps);
  const [toggleCalendar, setToggleCalendar] = useState(false);
  const [value, onChange] = useState(new Date());
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [openTime, setOpenTime] = useState(false);
  const [selectTime, setSelectTime] = useState(0)
  const [chooseTime, setChooseTime] = useState('')
  const arrayTime = [
    {
      value: 6,
      time: "06:00",
    },
    {
      value: 7.5,
      time: "07:30",
    },
    {
      value: 9,
      time: "09:00",
    },
    {
      value: 10.5,
      time: "10:30",
    },
    {
      value: 12,
      time: "12:00",
    },
    {
      value: 13.5,
      time: "13:30",
    },
    {
      value: 15,
      time: "15:00",
    },

    {
      value: 16.5,
      time: "16:30",
    },
    {
      value: 18,
      time: "18:00",
    },
    {
      value: 19.5,
      time: "19:30",
    },
    {
      value: 21,
      time: "21:00",
    },
    {
      value: 22.5,
      time: "22:30",
    },
  ];


  useEffect(()=>{
    async function getData(){
      console.log(id);
      await firestore.collection('tours').doc(id).get()
      .then(item => {
              setItem(item.data());
      })
    }
    getData()


  },[])

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setToggleCalendar(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  const changeRating = (newRating) => {
    setRating(newRating);
  };
  console.log("value" + value);

  const handlePayment = () => {
    const total = item.price * adult
    const dateTime = document.getElementsByClassName('header__search-input')[0].innerText
    if (currentUser) {
     window.location.href = `/payment?total=${total}&time=${dateTime}/${chooseTime}`
    } else {
      console.log("login");
      window.location.href = '/login'
    }
  };

  function SelectTime(index){
      return (event)=>{
        setSelectTime(index)
        setChooseTime(event.target.innerText)
      }
        

  }

  console.log(value.getDate())
  return (
    <div className="grid wide">
      <div className="row sm-gutter">
        <div className="col l-8">
          {" "}
          {item && (
            <>
              <div className="row sm-gutter moredetail__container">
                <div className="col l-12">
                  <div>
                    {" "}
                    <img
                      src={item.tourguideImageCover}
                      alt=""
                      style={{ width: "100%" }}
                    ></img>{" "}
                    <h1 className="moredetail__title"> {item.name} </h1>{" "}
                    <p className="moredetail__decs"> {item.introduce} </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="row sm-gutter moredetail__body">
                <div className="col l-4">
                  <i
                    className="moredetail__icon far fa-clock"
                    style={{
                      color: "var(--primary-color)",
                      fontSize: "1.2rem",
                    }}
                  ></i>{" "}
                  <span className="moredetail__location">
                    {" "}
                    {item.time}
                    gi???{" "}
                  </span>{" "}
                </div>{" "}
                <div className="col l-4">
                  <i
                    className="moredetail__icon fas fa-user-friends"
                    style={{
                      color: "var(--primary-color)",
                      fontSize: "1.2rem",
                    }}
                  ></i>{" "}
                  <span className="moredetail__location">
                    Nh??m c?? th??? l??n ?????n {item.numberPeople}
                    ng?????i{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="row sm-gutter moredetail__body">
                <div className="col l-4">
                  <i
                    className="moredetail__icon fas fa-utensils"
                    style={{
                      color: "var(--primary-color)",
                      fontSize: "1.2rem",
                    }}
                  ></i>{" "}
                  <span className="moredetail__location">
                    {" "}
                    {item.category}{" "}
                  </span>{" "}
                </div>{" "}
                <div className="col l-4">
                  <i
                    className="moredetail__icon fas fa-globe"
                    style={{
                      color: "var(--primary-color)",
                      fontSize: "1.2rem",
                    }}
                  ></i>{" "}
                  <span className="moredetail__location">
                    {" "}
                    {item.languages}{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="row sm-gutter moredetail__reasons">
                <div className="col l-8">
                  <h1 className="moredetail__heading">
                    4 l?? do ????? ?????t tour ????? tr???i nghi???m{" "}
                  </h1>{" "}
                  <div className="row sm-gutter">
                    <div className="col l-6 moredetail__body">
                      <i
                        className="fas fa-check moredetail__resons-icons"
                        style={{ color: "var(--primary-color)" }}
                      ></i>{" "}
                      <span className="moredetail__reasons-body">
                        Kh??m ph?? qua c??c tr?? ch??i & ho???t ?????ng vui nh???n{" "}
                      </span>{" "}
                    </div>{" "}
                    <div className="col l-6 moredetail__body">
                      <i
                        className="fas fa-check moredetail__resons-icons"
                        style={{ color: "var(--primary-color)" }}
                      ></i>{" "}
                      <span className="moredetail__reasons-body">
                        Th?????ng th???c m???t m??n kem cho tr??? em{" "}
                      </span>{" "}
                    </div>{" "}
                    <div className="col l-6 moredetail__body">
                      <i
                        className="fas fa-check moredetail__resons-icons"
                        style={{ color: "var(--primary-color)" }}
                      ></i>{" "}
                      <span className="moredetail__reasons-body">
                        100 % tr???i nghi???m th??n thi???n v???i gia ????nh{" "}
                      </span>{" "}
                    </div>{" "}
                    <div className="col l-6 moredetail__body">
                      <i
                        className="fas fa-check moredetail__resons-icons"
                        style={{ color: "var(--primary-color)" }}
                      ></i>{" "}
                      <span className="moredetail__reasons-body">
                        C??c quy ?????nh an to??n c???a ?????a ph????ng ???????c ????a ra ????? ?????m
                        b???o s??? tho???i m??i c???a b???n{" "}
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              <div className="row sm-gutter moredetail__container">
                <div className="col l-12">
                  <h1 className="moredetail__expect-title">
                    Nh???ng g?? ch??ng ta s??? l??m{" "}
                  </h1>{" "}
                  <p className="moredetail__expect-decs">
                    {" "}
                    {item.description}{" "}
                  </p>{" "}
                </div>{" "}
              </div>
              <div className="moredetail__pick">
                <h1 className="moredetail__pick-title">
                  Nh???ng g?? b???n c?? th??? mong ?????i{" "}
                </h1>{" "}
                <p className="moredetail__pick-desc">
                  T???t c??? ng?????i d??n ?????a ph????ng c???a ch??ng t??i y??u th??nh ph??? c???a h???
                  v?? nh???ng g?? h??? l??m.T??m hi???u v??? c??u chuy???n c?? nh??n, ni???m ??am m??
                  v?? t??nh c??ch c???a h???, ????? b???n c?? th??? ch???n c??u chuy???n y??u th??ch
                  c???a m??nh.{" "}
                </p>{" "}
                <div className="row sm-gutter">
                  <div className="col l-6">
                    <Link to="/tourguide" className="details__container-list">
                      <div className="details__container-item">
                        <img
                          src={item.tourguideImage}
                          style={{
                            width: "100%",
                            backgroundPosition: "center",
                          }}
                        ></img>{" "}
                        <div className="moredetails__container-title">
                          <div className="moredetails__container-desc">
                            Xin ch??o t??i t??n l??: {" "}
                          </div>{" "}
                          <div className="moredetails__container-link">
                            {" "}
                            {item.tourguideName}, ch??c b???n c?? chuy???n ??i vui v???{" "}
                            {item.tourguideName}{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="moredetails__container-speak">
                          <span className="moredetails__container-speaker">
                            T??i c?? th??? n??i ???????c:
                          </span>{" "}
                          <span className="moredetails__container-language">
                            {" "}
                            {item.languages}, Vietnamese{" "}
                          </span>{" "}
                        </div>{" "}
                        <div className="moredetails__container-star">
                          <div className="moredetails__home-product-item__rating">
                            <StarRatings
                              rating={item.avgRating}
                              starRatedColor="var(--primary-color)"
                              numberOfStars={5}
                              name="rating"
                              starDimension="20px"
                              starSpacing="0"
                              isAggregateRating
                            />
                            <span className="rating__name">
                              ({item.avgRating.toFixed(1)}){" "}
                            </span>{" "}
                          </div>{" "}
                          <button
                            className="moredetails__home-product-pick-me"
                            style={{
                              backgroundColor: "var(--white-color)",
                              color: "var(--primary-color)",
                            }}
                          >
                            Pick me{" "}
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </Link>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="moredetail__plan">
                <h1 className="moredetail__title"> ????y l?? k??? ho???ch </h1>{" "}
                <p className="moredetail__desc">
                  Ki???m tra k??? ho???ch b??n d?????i ????? bi???t nh???ng g?? b???n s??? l??m v???i
                  h?????ng d???n vi??n ?????a ph????ng c???a b???n.{" "}
                </p>{" "}
                <div className="row sm-gutter moredetail__dash">
                  {item.scheduleDetail.map((sche) => (
                    <div className="col l-8">
                      <div className="moredetail__plan-meeting">
                        <h3 className="moredetail__meeting"> {sche.name} </h3>{" "}
                        <p className="moredetail__desc">{sche.detail} </p>{" "}
                      </div>{" "}
                    </div>
                  ))}
                </div>{" "}
              </div>
            </>
          )}{" "}
        </div>
        <div className="col l-4">
        {item && (
          <div className="booknow">
          <div className="booknow__heading"> Gi?? ti???n m???i ng?????i {item.price} $</div>
            <span className="booknow__child"> Tr??? em mi???n ph?? </span>{" "}
            <div className="calendar__container">
              <a
                className="header__search-input-wrap1"
                onClick={() => setToggleCalendar(!toggleCalendar)}
              >
                <div className="header__search-input-text">
                  <div className="header__search-icon-text">
                    <i className="header__search-icon fas fa-table"></i>
                    <span
                      className="header__search-input"
                      style={{ color: "grey" }}
                    >
                      {value.toLocaleDateString()}
                    </span>
                  </div>
                  <i className="header__search-icon fas fa-chevron-down"></i>
                </div>
              </a>
              <div ref={wrapperRef}>
                {toggleCalendar ? (
                  <Calendar
                    className="header__search-history1"
                    onChange={onChange}
                    value={value}
                  />
                ) : null}
              </div>
            </div>{" "}
            <button className="select__time1"
              onClick={() =>
                openTime ? setOpenTime(false) : setOpenTime(true)
              }
            >
              <span>Select time</span>
            </button>
            <Collapse
              transition={`height ${"250ms"} cubic-bezier(.4, 0, .2, 1)`}
              isOpen={openTime}
            >
              {arrayTime.map((checktime, index) => {
                console.log(new Date().getHours);
                return (
                  (new Date().getHours() < checktime.value || new Date().getDate() !== value.getDate() ) && (
                    <button className="select__time" onClick={SelectTime(index)} style={{ backgroundColor: selectTime == index ? 'var(--primary-color)' : 'var(--white-color)' }} >{checktime.time}</button>
                  )
                );
              })}
            </Collapse>
            <button className="header__search-input-people">
              <div className="header__search-input-text1">
                <span
                  className="header__search-input1"
                  style={{ color: "grey" }}
                >
                  {adult + children} People
                </span>
                <i className="header__search-icon fas fa-chevron-down"></i>
              </div>
              <div className="header__navbar-user-menu1">
                <div className="header__navbar-user-item">
                  <div className="header__navbar-user-menu-people">Adults</div>
                  <div className="header__navbar-user-menu-count">
                    <button
                      className="header__navbar-user-icon fas fa-minus"
                      onClick={() => {
                        if (adult > 0) {
                          setAdult(adult - 1);
                        }
                      }}
                    ></button>
                    <span>{adult} </span>
                    <button
                      className="header__navbar-user-icon fas fa-plus"
                      onClick={() => {
                        if (adult <= item.numberPeople - children) {
                          setAdult(adult + 1);
                        }
                      }}
                    ></button>
                  </div>
                </div>
                <div className="header__navbar-user-item">
                  <div className="header__navbar-user-menu-people">
                    Children
                  </div>
                  <div className="header__navbar-user-menu-count">
                    <button
                      className="header__navbar-user-icon fas fa-minus"
                      onClick={() => {
                        if (children > 0) {
                          setChildren(children - 1);
                        }
                      }}
                    ></button>
                    <span> {children} </span>
                    <button
                      className="header__navbar-user-icon fas fa-plus"
                      onClick={() => {
                        if (children <= item.numberPeople - adult) {
                          setChildren(children + 1);
                        }
                      }}
                    ></button>
                  </div>
                </div>
              </div>
            </button>
            <button onClick={handlePayment} className="booknow__btn">
              ?????t chuy???n ??i{" "}
            </button>{" "}
          </div>)}
        </div>
      </div>
    </div>
  );
}
