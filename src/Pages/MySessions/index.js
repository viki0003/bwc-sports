import React from 'react'
import BackIcon from '../../Assets/Icons/BackIcon'
import Header from '../../Components/MySessions/Header/Header'
import NavbarCustom from '../../Components/NavbarCustom'
import Sessions from '../../Components/MySessions/Sessions/Sessions'
export default function MySessions() {
  return (
    <>
    <NavbarCustom/>
        <Header/>
        <Sessions/>
    </>
  )
}
