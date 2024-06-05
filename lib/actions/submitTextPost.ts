import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
 
// Note that you have to define the types of the args we pass to the function.
export default async function submitTextPost(postType: string, title: string, content: string, userId: string) {
    try {
        const docRef = await addDoc(collection(db, "users", userId, "posts"), {
            postType,
            title,
            content,
            timestamp: serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}