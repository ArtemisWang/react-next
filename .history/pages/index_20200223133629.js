import React from 'react';
import Link from 'next/link'
import Router from 'next/router'



const Home=()=>{


  return (
    <>
      <div>我是首页</div>
      <div>
        <Link href='/xiaojiejie.js?name=结衣'><a>选择结衣</a></Link>
        <Link href='/xiaojiejie.js?name=井空'><a>选择结衣</a></Link>
      </div>

      
    </>
  )
}

export default Home