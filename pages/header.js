import MyHead from "../components/myheader"
import '../static/test.css'
import {Button} from 'antd'

function Header(){
    return (
        <>
            <MyHead/>
            <div>Artemis.com</div>
            <div><Button>我是按钮</Button></div>
        </>
    )
}

export default Header