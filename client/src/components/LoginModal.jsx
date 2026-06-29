import React from "react"
import { AnimatePresence, motion } from "motion/react"
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../firebase"
import axios from "axios"
import { serverUrl } from "../App"
import { useDispatch } from "react-redux"
import { setUserData } from "../redux/userSlice"

function LoginModal({ open, onClose }) {
  const dispatch = useDispatch()
  const handleGoogleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      const { data } = await axios.post(`${serverUrl}/api/auth/google`, {
        name: result.user.displayName,
        email: result.user.email,
        avatar: result.user.photoURL
      }, { withCredentials: true })
      dispatch(setUserData(data))
      onClose()
    } catch (error) { console.log(error) }
  }
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl px-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-md rounded-3xl bg-[#0b0b0b] border border-white/10 p-10 text-center"
            onClick={e => e.stopPropagation()}>
            <h2 className="text-2xl font-semibold mb-6">Welcome to WEBFORGE</h2>
            <button onClick={handleGoogleAuth}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white text-black font-semibold">
              <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" className="h-5 w-5" />
              Continue with Google
            </button>
            <button onClick={onClose} className="mt-4 text-xs text-zinc-500 hover:text-white">Cancel</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default LoginModal
