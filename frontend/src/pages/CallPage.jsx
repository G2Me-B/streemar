import React from 'react'
import { useThemeStore } from '../store/useThemeStore'

const CallPage = () => {
  const {theme} = useThemeStore()
  return (
    <div>CallPage</div>
  )
}

export default CallPage