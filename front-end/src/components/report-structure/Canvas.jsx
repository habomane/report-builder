import { useEffect, useState } from "react";

function Canvas({ reportProperties })
{
    const [ canvasDimensions, setCanvasDimensons ] = useState("");
    useEffect(() => {
        setCanvasDimensons(`bg-green-100 w-[${parseInt(reportProperties.reportWidth)}px] h-[${parseInt(reportProperties.reportHeight)}px]`)
        console.log(canvasDimensions)
    })
    return (
        <div className="bg-green-100 w-[8073px] h-[5702px]">
            canvas
        </div>
    )
}

export default Canvas;