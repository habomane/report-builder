import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
// Components
import Table from "../../../components/report-options/Table";
import Toolbox from "../../../components/report-structure/Toolbox";
import ReportBuilder from "../../../components/report-structure/ReportBuilder";
import ReportSettings from "../../../components/report-structure/ReportProperties";
function CreateTemplatePage() {
  const [propertiesActive, setPropertiesActive] = useState(false);
  const [toolboxActive, setToolboxActive] = useState(true);

  return (
    <main className="flex flex-col justify-between align-center px-10 md:flex-row">
      <ReportBuilder>
      <Table></Table>
      </ReportBuilder>
      <div className="bg-gray-50 w-[100%] md:w-[35%] border-[1rem]">
        <div className="flex flex-row gap-x-2">
          <button type="button"
          onClick={() => {setToolboxActive(false); setPropertiesActive(true);}}
          className={toolboxActive ? 'bg-gray-600 text-white  px-2 text-left py-2 cursor': 'px-2'}
          >Properties</button>
          <button type="button"
          onClick={() => {setToolboxActive(true); setPropertiesActive(false);}}
          className={propertiesActive ? 'bg-gray-600 text-white px-2 w-[100%] text-left py-2 cursor': 'px-2'}>Toolbox</button>
        </div>
      <Toolbox isActive={toolboxActive}></Toolbox>
      <ReportSettings isActive={propertiesActive}></ReportSettings>
      </div>
    </main>
  );
}

export default CreateTemplatePage;
