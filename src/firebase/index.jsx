import * as firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAfwcjS4U20ILSPdE_eY2_UMcs2mo2rsWY",
  authDomain: "passbase-92264.firebaseapp.com",
  databaseURL: "https://passbase-92264.firebaseio.com",
  projectId: "passbase-92264",
  storageBucket: "",
  messagingSenderId: "603017984828"
};

export const fire = firebase.initializeApp(config);
