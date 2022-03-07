import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import MainContent from '../components/content/main_content'
import Header from '../components/header/header'

const Home: NextPage = () => {

  const [headerTransparent, setHeaderTransparent] = useState(true)  

  return (
    <div className='w-screen h-screen bg-black scroll-smooth'>
      <Head>
        <title>Portfolio API</title>
        <meta name="description" content="Powerd by InfinitePower" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header headerTransparent={headerTransparent} />

      <MainContent setHeaderTransparent={setHeaderTransparent} />
    </div>
  )
}

export default Home