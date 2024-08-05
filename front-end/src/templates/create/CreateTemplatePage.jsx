import {DndContext} from '@dnd-kit/core';
import {useState} from 'react';
// Components
import Toolbox from "../components/Toolbox";
import ReportBuilder from "../components/ReportBuilder";
function CreateTemplatePage() {

  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Toolbox></Toolbox>
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
         <Toolbox />
        </DndContext> 
      </main>
    )
  }
  
  export default CreateTemplatePage;
  