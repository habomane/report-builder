
import { ReportProperties } from '../../models';
import { ReportType } from '../../types';

// Components 

import Canvas from './Canvas';

function ReportBuilder(props)
{
  const mockReportProperites = new ReportProperties("Name Example", ReportType.A1, ReportType.A1.getWidthPixels(), ReportType.A1.getHeightPixels())
  return (
    <>
    <div className='w-[100%]'>
        <h1>Report Builder</h1>
        <div className="bg-gray-600 overflow-scroll overflow-y-scroll bg-opacity-40 w-[1000px] h-[300px]">
        <div className=" flex justify-center align-center ">
          <Canvas reportProperties={mockReportProperites}></Canvas>
        </div>
        </div>

    </div>
    </>
  );
}

export default ReportBuilder;