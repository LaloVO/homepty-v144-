import { auth, db } from "./firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as firebaseSignOut } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"

export async function signUp(email: string, password: string, fullName: string, city: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    // Guardar información adicional del usuario en Firestore
    await setDoc(doc(db, "users", user.uid), {
      fullName,
      city,
      email,
    })

    return user
  } catch (error) {
    console.error("Error en el registro:", error)
    throw error
  }
}

export async function signIn(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    console.error("Error en el inicio de sesión:", error)
    throw error
  }
}

export async function signOut() {
  try {
    await firebaseSignOut(auth)
  } catch (error) {
    console.error("Error al cerrar sesión:", error)
    throw error
  }
}

export async function createUser(email: string, password: string, fullName: string, city: string) {
  return signUp(email, password, fullName, city)
}

