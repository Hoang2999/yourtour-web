import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBSdrT-Y3xE7YvJJYq1edWrCqif-NAqhMc",
  authDomain: "yourtour-c4d0f.firebaseapp.com",
  databaseURL: "https://yourtour-c4d0f.firebaseio.com",
  projectId: "yourtour-c4d0f",
  storageBucket: "yourtour-c4d0f.appspot.com",
  messagingSenderId: "855060710487",
  appId: "1:855060710487:web:7f907ef264c514d6298f12",
  measurementId: "G-QMSPR75J9F",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage  = firebase.storage()
export const firestore = firebase.firestore();
export const generateUserDocument = async (newUser, additionalData) => {
  if (!newUser) return;

  await auth
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then((user) => {
      const userFirestore = {
        uID: user.user.uid,
        name: newUser.fullName,
        phone: "",
        email: newUser.email,
        gender: true,
        picture: "https://profiles.utdallas.edu/img/default.png",
        birthday: new Date().toISOString().slice(0, 10),
        description: "",
        providerId: "firebase.com",
        idCity: "",
        languages: "",
        isActive: false,
        passions: "",
        title: "",
        imageProfile: "",
        dateCreated: new Date().getTime(),
      };

      addFirestore("travelers", userFirestore)
        .then(() => {
          console.log("Register success !");
        })
        .catch((error) => {
          console.log(error);
        });
    });
};
//add firestore
export const addFirestore = async (nameCollection, data) => {
  await firestore.collection(nameCollection).add(data);
};

export const signInUserByEmail = async (user) => {
  return await auth.signInWithEmailAndPassword(user.email, user.password);
};


export const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth
    .signInWithPopup(provider)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user;
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

  // const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // return auth()
  //   .signInWithCredential(googleCredential)
  //   .then((user) => {
  //     firestore
  //       .collection('travelers')
  //       .where('uID', '==', user.user._user.uid)
  //       .get()
  //       .then((userExist) => {
  //         if (userExist.docs.length === 0) {
  //           const userFirestore = {
  //             uID: user.user._user.uid,
  //             name: user.user._user.displayName,
  //             phone: '',
  //             email: user.user._user.email,
  //             gender: true,
  //             picture: user.user._user.photoURL,
  //             birthday: new Date().toISOString().slice(0, 10),
  //             description: '',
  //             providerId: 'google.com',
  //             idCity: '',
  //             languages: '',
  //             isActive: false,
  //             passions: '',
  //             title: '',
  //             imageProfile: '',
  //             dateCreated: new Date().getTime(),
  //           };

  //           addFirestore('travelers', userFirestore)
  //             .then(() => {
  //               console.log('Register success !');
  //             })
  //             .catch((error) => {
  //               console.log(error);
  //             });
  //         }
  //       });
  //   });
};

// //logout auth
export const logOut = () => {
  return auth.signOut();
};
export const getCitiesInCountry = async (path) => {
  const datas = [];
  await firestore
    .collection(path)
    .get()
    .then((cities) => {
      cities.forEach((city) => {
        const item = {
          id: city.id,
          name: city.data().name,
          image: city.data().image,
          description: city.data().description,
          visitors: city.data().visitors,
          id_tourguides: city.data().id_tourguides,
        };
        datas.push(item);
      });
    });
  return datas;
};

// // get ratings
// export const getRatings = async (idTour) => {
//   return await firestore()
//     .collection('tours')
//     .doc(idTour)
//     .collection('ratings')
//     .orderBy('time', 'desc')
//     .get();
// };

// // get tours in city
export const getToursInCity = async (path, idCity) => {
  const datas = [];
  console.log("path", path, idCity);
  await firestore
    .collection(path)
    .where("cityID", "==", idCity)
    .get()
    .then((tours) => {
      tours.forEach((tour) => {
        let item = {
          id: tour.id,
          avgRating: tour.data().avgRating,
          cityID: tour.data().cityID,
          description: tour.data().description,
          introduce: tour.data().introduce,
          name: tour.data().name,
          numberPeople: tour.data().numberPeople,
          price: tour.data().price,
          time: tour.data().time,
          tourguideID: tour.data().tourguideID,
          tourguideImageCover: tour.data().tourguideImageCover,
          tourguideName: tour.data().tourguideName,
          tourguideImage: tour.data().tourguideImage,
          category: tour.data().category,
          languages: tour.data().languages,
          scheduleDetail: tour.data().scheduleDetail,
          numberAccount: tour.data().numberAccount,
        };

        datas.push(item);
      });
    });
  console.log("datas", datas);
  return datas;
};

// // get traveler firestore
// export const getTraveler = async () => {
//   const uID_auth = await auth().currentUser.uid;
//   let user = {};
//   await firestore()
//     .collection('travelers')
//     .where('uID', '==', uID_auth)
//     .get()
//     .then((users) => {
//       user = users.docs[0].data();
//     });
//   return user;
// };

// // get tour guide
// export const getTourGuideByID = async (idTourGuide) => {
//   let tourguide = {};
//   await firestore()
//     .collection('travelers')
//     .where('uID', '==', idTourGuide)
//     .get()
//     .then((users) => {
//       tourguide = users.docs[0].data();
//     });
//   return tourguide;
// };

// // get question active tour guide
// export const getQuestionActiveTourGuide = async () => {
//   let data = [];
//   await firestore()
//     .collection('questionActiveTourGuide')
//     .get()
//     .then((questions) => {
//       questions.forEach((question, index) => {
//         data.push({
//           ...question.data(),
//           idQuestion: question.id,
//         });
//       });
//     });
//   return data;
// };

// // update data tour
// export const updateTour = async (tourUpdate) => {
//   await firestore()
//     .collection('tours')
//     .doc(tourUpdate.id)
//     .update({
//       category: tourUpdate.category,
//       description: tourUpdate.description,
//       introduce: tourUpdate.introduce,
//       languages: tourUpdate.languages,
//       name: tourUpdate.name,
//       numberPeople: tourUpdate.numberPeople,
//       price: tourUpdate.price,
//       time: tourUpdate.time,
//       tourguideImageCover: tourUpdate.tourguideImageCover,
//       scheduleDetail: tourUpdate.scheduleDetail,
//       numberAccount: tourUpdate.numberAccount,
//     })
//     .then(() => console.log('updated !'));
// };

// //update data traveler by uID
// export const updateTravelerByID = async (profile) => {
//   const uID_auth = await auth().currentUser.uid;
//   let id = '';
//   await firestore()
//     .collection('travelers')
//     .where('uID', '==', uID_auth)
//     .get()
//     .then((users) => {
//       id = users.docs[0].id;
//     });

//   await firestore()
//     .collection('travelers')
//     .doc(id.toString())
//     .update({
//       gender: profile.gender,
//       name: profile.name,
//       phone: profile.phone,
//       picture: profile.picture,
//       birthday: profile.date,
//     })
//     .then(() => console.log('updated !'));
// };

// //update data tourguide by uID
// export const updateTourGuideByID = async (profile) => {
//   const uID_auth = await auth().currentUser.uid;
//   let id = '';
//   await firestore()
//     .collection('travelers')
//     .where('uID', '==', uID_auth)
//     .get()
//     .then((users) => {
//       id = users.docs[0].id;
//     });

//   await firestore()
//     .collection('travelers')
//     .doc(id.toString())
//     .update({
//       title: profile.title,
//       languages: profile.languages,
//       passions: profile.passions,
//       imageProfile: profile.imageProfile,
//       description: profile.description,
//     })
//     .then(() => console.log('updated tour guide !'));
// };

// //sign up auth by email
// export const createUserByEmail = (newUser) => {
//   auth()
//     .createUserWithEmailAndPassword(newUser.email, newUser.password)
//     .then((user) => {
//       const userFirestore = {
//         uID: user.user._user.uid,
//         name: newUser.fullname,
//         phone: newUser.phoneNumber,
//         email: newUser.email,
//         gender: true,
//         picture: 'https://profiles.utdallas.edu/img/default.png',
//         birthday: new Date().toISOString().slice(0, 10),
//         description: '',
//         providerId: 'firebase.com',
//         idCity: '',
//         languages: '',
//         isActive: false,
//         passions: '',
//         title: '',
//         imageProfile: '',
//         dateCreated: new Date().getTime(),
//       };

//       addFirestore('travelers', userFirestore)
//         .then(() => {
//           Alert.alert('Th??ng b??o', '????ng k?? t??i kho???n th??nh c??ng!');
//           console.log('Register success !');
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     });
// };

// //add firestore

// // create post tour for tour guide
// export const createTour = async (newTour) => {
//   await firestore()
//     .collection('nonverifiedTours')
//     .add(newTour)
//     .then((tour) => {
//       // tour.collection('ratings').add({});
//       console.log('created tour !');
//     });
// };

// // login facebook
// export const signInUserByFacebook = async () => {
//   const result = await LoginManager.logInWithPermissions([
//     'public_profile',
//     'email',
//   ]);

//   if (result.isCancelled) {
//     throw 'User cancelled the login process';
//   }

//   const data = await AccessToken.getCurrentAccessToken();

//   if (!data) {
//     throw 'Something went wrong obtaining access token';
//   }

//   const facebookCredential = auth.FacebookAuthProvider.credential(
//     data.accessToken,
//   );

//   return auth()
//     .signInWithCredential(facebookCredential)
//     .then((user) => {
//       //check ton tai
//       firestore()
//         .collection('travelers')
//         .where('uID', '==', user.user._user.uid)
//         .get()
//         .then((userExist) => {
//           if (userExist.docs.length === 0) {
//             const userFirestore = {
//               uID: user.user._user.uid,
//               name: user.user._user.displayName,
//               phone: '',
//               email: user.user._user.email,
//               gender: true,
//               picture: user.additionalUserInfo.profile.picture.data.url,
//               birthday: new Date().toISOString().slice(0, 10),
//               description: '',
//               providerId: 'facebook.com',
//               idCity: '',
//               languages: '',
//               isActive: false,
//               passions: '',
//               title: '',
//               imageProfile: '',
//               dateCreated: new Date().getTime(),
//             };

//             addFirestore('travelers', userFirestore)
//               .then(() => {
//                 console.log('Register success !');
//               })
//               .catch((error) => {
//                 console.log(error);
//               });
//           }
//         });
//     });
// };

// // login gmail
// export const signInUserByGmail = async () => {
//   const { idToken } = await GoogleSignin.signIn();

//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//   return auth()
//     .signInWithCredential(googleCredential)
//     .then((user) => {
//       //check ton tai
//       firestore()
//         .collection('travelers')
//         .where('uID', '==', user.user._user.uid)
//         .get()
//         .then((userExist) => {
//           if (userExist.docs.length === 0) {
//             const userFirestore = {
//               uID: user.user._user.uid,
//               name: user.user._user.displayName,
//               phone: '',
//               email: user.user._user.email,
//               gender: true,
//               picture: user.user._user.photoURL,
//               birthday: new Date().toISOString().slice(0, 10),
//               description: '',
//               providerId: 'google.com',
//               idCity: '',
//               languages: '',
//               isActive: false,
//               passions: '',
//               title: '',
//               imageProfile: '',
//               dateCreated: new Date().getTime(),
//             };

//             addFirestore('travelers', userFirestore)
//               .then(() => {
//                 console.log('Register success !');
//               })
//               .catch((error) => {
//                 console.log(error);
//               });
//           }
//         });
//     });
// };

// // push question active tour guide
// export const addQuestionActiveTourGuide = async (questions) => {
//   const uid = await auth().currentUser.uid;
//   const questionsData = {
//     questions: [...questions],
//     idTraveler: uid,
//   };
//   addFirestore('questions', questionsData).then(() =>
//     console.log('push question success !'),
//   );
// };

// //reset password
// export const resetPassword = async (email) => {
//   await auth()
//     .sendPasswordResetEmail(email)
//     .then(() => console.log('send email success!'))
//     .catch((error) => console.log(error));
// };

// //get notification
// export const getNotification = async () => {
//   // get traveler
//   const traveler = await firestore()
//     .collection('travelers')
//     .where('uID', '==', auth().currentUser.uid)
//     .get();

//   //get notification
//   let datas = [];

//   await traveler.docs[0].ref
//     .collection('notification')
//     .get()
//     .then((notifications) => {
//       notifications.forEach((notification) => {
//         datas.push({ ...notification.data() });
//       });
//     });
//   return datas;
// };
