import firebase from 'firebase'
import {
	AUTH_DOMAIN,
	MESSAGE_SENDER_ID,
	APP_ID
} from '@env'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyCip9Jb2wSj-tBDpPpsR-TzEvzOlnextAY',
	authDomain: AUTH_DOMAIN,
	projectId: 'tevis-1829e',
	storageBucket: 'tevis-1829e.appspot.com',
	messagingSenderId: MESSAGE_SENDER_ID,
	appId: APP_ID
}

// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig)

 export const db = firebase.firestore()

// avoid deprecated warnings
db.settings({
	timestampsInSnapshots: true
})

export default Firebase
