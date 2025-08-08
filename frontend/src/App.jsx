import { Routes, Route } from "react-router"
import toast, { Toaster } from "react-hot-toast"
import { axiosInstance } from "./lib/axios.js"
import { Navigate } from "react-router"
import HompePage from "./pages/HomePage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import NotificationsPage from "./pages/NotificationsPage.jsx"
import CallPage from "./pages/CallPage.jsx"
import ChatPage from "./pages/ChatPage.jsx"
import OnboardingPage from "./pages/OnboardingPage.jsx"
import { useQuery } from "@tanstack/react-query"


const App = () => {
  // tanstack query - to fecth the authenticated user
  const { data: authData, isLoading, error } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const res = await axiosInstance.get("/auth/me")
      return res.data
    },
    retry: false, // for auth check
  })

  const authUser = authData?.user

  return (
    <div className=" h-screen" data-themes="night">
      
      <Routes>
        <Route path="/" element={authUser ? <HompePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/notifications" element={authUser ? <NotificationsPage />: <Navigate to="/login" />} />
        <Route path="/call" element={authUser ? <CallPage /> : <Navigate to="/login" />} />
        <Route path="/chat" element={authUser ? <ChatPage /> : <Navigate to="/login" />} />
        <Route path="/onboarding" element={authUser ? <OnboardingPage /> : <Navigate to="/login" />} />
      </Routes>


      <Toaster />
    </div>
  )
}

export default App