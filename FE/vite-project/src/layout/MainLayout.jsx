import React from 'react'
import Nav from './Nav/Nav'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <>
    <Nav></Nav>
    <Outlet></Outlet>
    </>
  )
}

export default MainLayout
