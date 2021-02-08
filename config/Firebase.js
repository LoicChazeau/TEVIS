import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyCip9Jb2wSj-tBDpPpsR-TzEvzOlnextAY",
	authDomain: "tevis-1829e.firebaseapp.com",
	projectId: "tevis-1829e",
	storageBucket: "tevis-1829e.appspot.com",
	messagingSenderId: "414927400212",
	appId: "1:414927400212:web:30494cbf8a5f478e70a601"
}

// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

// avoid deprecated warnings
db.settings({
	timestampsInSnapshots: true
})

export default Firebase
