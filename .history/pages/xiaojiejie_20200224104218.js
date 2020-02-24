import {withRouter} from 'next/router'
import Link from 'next/link'
import axios from 'axios'


const Xiaojiejie=({router})=>{
    return (
        <>
            <div>{router.query.name}来为我服务了</div>
            <Link href='/'><a>返回首页</a></Link>  
        </>
    )
}

Xiaojiejie.getInitialProps=

export default withRouter(Xiaojiejie)