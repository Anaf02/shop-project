import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "./config"
import { getDoc, getDocs, query } from "firebase/firestore"


const getPass = async () => {
    const ref = collection(firestore, "Pass") // Firebase creates this automatically
    const q = query(ref);
    try {
        const documents = await getDocs(q);
        
        return documents.docs[0].data()["password"];
    } catch (err) {
        console.log(err)
    }
}

export default getPass;