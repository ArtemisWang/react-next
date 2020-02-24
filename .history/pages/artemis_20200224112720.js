import { useState } from "react"

function Artemis(){

    const [color,setColor]=useState('blue')

    const changeColor=()=>{
        setColor(color==='blue'?'red':'blue')
    }

    return (
        <>
            <div>前端技术教程</div>
            <button onClick={changeColor}>改变颜色</button>

            <style jsx>
                {`
                    div{color:${color};}
                `}
            </style>
        </>
    )
}

export default Artemis