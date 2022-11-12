import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from "../kk.png"

export default function App() {
    const props = {
        phoneNumber: '+2348103297538',
        accountName: 'Koins$kash',
        avatar : logo
    }

  return (
      <FloatingWhatsApp {...props}/>
  )
}