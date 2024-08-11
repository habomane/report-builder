import { useEffect, useState } from "react";

function Canvas({ reportProperties })
{
    const [ canvasDimensions, setCanvasDimensons ] = useState("");
    useEffect(() => {
        setCanvasDimensons(`bg-green-100 w-[${parseInt(reportProperties.reportWidth)}px] h-[${parseInt(reportProperties.reportHeight)}px]`)
    })
    return (
        <div className={canvasDimensions}>
            canvas
        </div>
    )
}

export default Canvas;