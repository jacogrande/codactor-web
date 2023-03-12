// Import the functions you need from the SDKs you need
import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: 'AIzaSyAWApoG1RmFWslVcJJsi6BRhOc_oMMLLkg',

	authDomain: 'code-translator-b50d4.firebaseapp.com',

	projectId: 'code-translator-b50d4',

	storageBucket: 'code-translator-b50d4.appspot.com',

	messagingSenderId: '555224504289',

	appId: '1:555224504289:web:3b8352c150e15488fa24a0',

	measurementId: 'G-RR4EXLKG9J'
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
