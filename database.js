import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCzAW2RMEGovdAd6Lv5Dcb28rAcVRTFRbs",
    authDomain: "integracao---ifsc.firebaseapp.com",
    databaseURL: "https://integracao---ifsc.firebaseio.com",
    projectId: "integracao---ifsc",
    storageBucket: "integracao---ifsc.appspot.com",
    messagingSenderId: "433313462252",
    appId: "1:433313462252:web:40edca2e0c2c2a3fcbb2c9",
    measurementId: "G-E8R105FGB3",
}

firebase.initializeApp(firebaseConfig);

export default firebase;