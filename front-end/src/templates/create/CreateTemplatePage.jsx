import {DndContext} from '@dnd-kit/core';
import {useState} from 'react';
// Components
import Toolbox from "../components/Toolbox";
import ReportBuilder from "../components/ReportBuilder";
function CreateTemplatePage() {

  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Toolbox>Drag me</Toolbox>
  );

  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }

    return (
      <main className="flex flex-col justify-between align-center px-10 md:flex-row">
       
       <DndContext onDragEnd={handleDragEnd}>
       <ReportBuilder>
       {isDropped ? draggableMarkup : 'Drop here'}
         </ReportBuilder>
         {!isDropped ? draggableMarkup : null}
        </DndContext> 
      </main>
    )
  }
  
  export default CreateTemplatePage;
  