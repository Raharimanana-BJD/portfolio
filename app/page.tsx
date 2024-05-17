import React from 'react'

import Header from '@/components/layout/_header/Header'
import Main from '@/components/layout/_main/Main'
import Intro from '@/components/layout/_section/Intro'
import About from '@/components/layout/_section/About'
import Project from '@/components/layout/_section/Project'
import Experience from '@/components/layout/_section/Experience'
import Contact from '@/components/layout/_section/Contact'

export default function page() {
  return (
    <>
      <Header/>
      <Main>
        <Intro/>
        <About/>
        <Project/>
        <Experience/>
        <Contact/>
      </Main>
    </>
  )
}
