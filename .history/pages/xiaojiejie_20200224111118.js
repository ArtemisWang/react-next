import {withRouter} from 'next/router'
import Link from 'next/link'
import axios from 'axios'


const Xiaojiejie=({router, list})=>{
    return (
        <>
            <div>{router.query.name}来为我服务了</div>
            <div>{list}</div>
            <Link href='/'><a>返回首页</a></Link>  
        </>
    )
}

Xiaojiejie.getInitialProps=async ()=>{
    const promise=new Promise((resolve,reject)=>{
        axios('https://www.fastmock.site/mock/f6810f18774c59848477631a62a98c76/demo1/api/getTodoList').then(
            (res)=>{
                console.log('远程数据结果：',res)
                resolve(res.data.data)
            }
        )
    })
    return await promise
}

export default withRouter(Xiaojiejie)