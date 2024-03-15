import React from 'react'
import Mod from './Mod'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import "./Mod.css";
export default function Layout() {
  return (
    <>
    <Mod title='Shadow' title2 = '/Movies'/>
    <Outlet/>
    <Footer title='Shadow' title2 = '/Movies'/>
    </>
  )
}
