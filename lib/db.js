import firebase from "firebase/app";
import "firebase/database";

let firebaseDb = null;

export default function getDb() {
  if (firebaseDb === null) {
    firebase.initializeApp({
      databaseURL: "https://utkarshg-blog.firebaseio.com",
    });
    firebaseDb = firebase.database();
  }
  return firebaseDb;
}
