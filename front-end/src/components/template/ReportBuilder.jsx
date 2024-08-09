import React from "react";
import {useDroppable} from '@dnd-kit/core';
import { useEffect } from "react";
function ReportBuilder(props)
{
    useEffect(() => {
        console.log(props)
    }, [])
    const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });
  const style = {
    backgroundColor: isOver ? 'green' : undefined,
  };
  
  
  return (
    <>
    <div>
        <h1>Report Builder</h1>
        <div ref={setNodeRef} style={style}>
        {props.children}
        </div>

    </div>
    </>
  );
}

export default ReportBuilder;