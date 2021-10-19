import { initializeApp, getApps } from "firebase/app"
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
//import { getAuth } from "firebase/auth"

let app;

if  (!getApps().length){
  try {

    app = initializeApp( {
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_APP_ID,
    });

    console.log('Conectado');
  }catch(err){
    if (!/already exists/.test(err.message)) {
      console.error( err.stack)
    }
  }
}else{
  console.log('já está conectado');
}

const db = getFirestore(app);

export  {db , collection , addDoc};

