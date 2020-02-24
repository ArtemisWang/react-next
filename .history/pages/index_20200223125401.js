import React from 'react';
import Link from 'next/link'
import Router from 'next/router'

const Home=()=>{

  function gotoA(){
    Router.push('/artemisA')
  }

  return (
    <>
      <div>我是首页</div>
      <div><Link href='/artemisA'><a>去ArtemisA页面</a></Link></div>
      <div><Link href='/artemisB'><a>去ArtemisB页面</a></Link></div>
      <div>
        <button onClick={gotoA()}>ArtemisA</button>
      </div>
    </>
  )
}

export default Home