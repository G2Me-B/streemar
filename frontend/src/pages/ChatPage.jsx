import React from 'react'
import { useThemeStore } from '../store/useThemeStore'

const ChatPage = () => {
  const {theme} = useThemeStore()
  return (
    <div>ChatPage</div>
  )
}

export default ChatPage