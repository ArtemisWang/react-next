import { useState } from "react"

function Artemis(){

    const [color,setColor]=useState('blue')
    return (
        <>
            <div>前端技术教程</div>
            <button onClick={}>改变颜色</button>

            <style jsx>
                {`
                    div{color:blue;}
                `}
            </style>
        </>
    )
}

export default Artemis