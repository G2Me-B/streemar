import React from 'react'
import { useThemeStore } from '../store/useThemeStore'

const HomePage = () => {
  const {theme} = useThemeStore()
  return (
    <div>HomePage</div>
  )
}

export default HomePage