import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

function Login() {
  return (
    <div className="relative flex flex-col w-screen h-screen bg-black md:items-center md:justify-center md:bg-transparent">
      {/* <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d0982892-13ac-4702-b9fa-87a410c1f2da/519e3d3a-1c8c-4fdb-8f8a-7eabdbe87056/AE-en-20220321-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        className="absolute object-contain cursor-pointer left-4 top-4 md:left-10 md:top-6"
        width={150}
        height={150}
      /> */}

      <form>
        <h1>Sign In</h1>
        <div className='space-y-4'>
          <label className='inline-block w-full'>
            <input type="email" placeholder='Email' className='input' />
          </label>
          <label className='inline-block w-full'>
            <input type="password" placeholder='Password' className='input' />
          </label>
        </div>
      </form>
    </div>
  )
}

export default Login