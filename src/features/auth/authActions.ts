import { auth } from '../../firebase/config'
import { signInWithEmailAndPassword, signOut, User } from 'firebase/auth'
import { AppDispatch } from '@/features/store'
import { setUser, clearUser } from './authSlice'

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      )
      dispatch(setUser(userCredential.user))
    } catch (error) {
      console.error(error)
    }
  }

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    await signOut(auth)
    dispatch(clearUser())
  } catch (error) {
    console.error(error)
  }
}
