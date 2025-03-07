import { doc, setDoc, getDoc, Firestore } from "firebase/firestore";
import { db } from "./firebase";

export const saveArticle = async (userEmail: string, article: any) => {
  const userRef = doc(db, "users", userEmail);
  const userSnap = await getDoc(userRef);

  let savedArticles = [];
  if (userSnap.exists()) {
    savedArticles = userSnap.data().savedArticles || [];
  }

  if (!savedArticles.find((a: any) => a._id === article._id)) {
    savedArticles.push(article);
  }

  await setDoc(userRef, { savedArticles }, { merge: true });
};
