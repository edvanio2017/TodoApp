import { db } from './db_config.js'
import { query,orderBy,doc, collection, addDoc, getDocs, updateDoc, setDoc, deleteDoc  } from "firebase/firestore";

export async function cadastrar(texto){
	try{
		let novoItemRef = await addDoc(collection(db, "todo"), {texto:texto});
		if (novoItemRef.id) {
			return novoItemRef;
		}else{
			return 0;
		} 
	}catch(exception){
		console.error(exception);
		return 0;
	}
}