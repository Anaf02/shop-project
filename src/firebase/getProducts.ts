import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "./config"
import { getDoc, getDocs, query } from "firebase/firestore"
import Product from "../models/product"

const getProducts = async () => {
    const ref = collection(firestore, "Products") // Firebase creates this automatically
    const q = query(ref);
    try {
        const documents = await getDocs(q);
        
        return documents.docs.map((doc)=>{
            return {
                name:doc.data()["name"],
                description:doc.data()["description"],
                image:doc.data()["image"],
                section:doc.data()["section"],
                id:doc.id
            } 
        });
    } catch (err) {
        console.log(err)
    }
}

export default getProducts;