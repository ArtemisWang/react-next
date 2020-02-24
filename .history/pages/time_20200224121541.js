import React, {useState} from 'react'
import moment from 'moment'

function Time(){
    const [nowtime,setTime]=useState(Date.now())

    const changeTime=()=>{
        setTime(moment(Date.now()).format())
    }

    return (
        <>
            <div>显示时间为：{nowTime}</div>
            <div><button onClick={changeTime}>改变时间格式</button></div>

        </>
    )
}

export default Time