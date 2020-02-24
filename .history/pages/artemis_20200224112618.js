import { useState } from "react"

function Artemis(){

    const [color,setColor]=useState('blue')

    const changeColor=()=>{
        setColor(color==='blue'?setColor('red'):setColor('blue'))
    }

    return (
        <>
            <div>前端技术教程</div>
            <button onClick={setColor}>改变颜色</button>

            <style jsx>
                {`
                    div{color:${color};}
                `}
            </style>
        </>
    )
}

export default Artemis