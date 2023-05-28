import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "./config"
import Product from "../models/product"


const handleAddProduct = (product:Product) => {
    const ref = collection(firestore, "Products") // Firebase creates this automatically

    try {
        addDoc(ref, product)
    } catch (err) {
        console.log(err)
    }
}

export default handleAddProduct