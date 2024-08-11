
import { ReportProperties } from '../../models';
import { ReportType } from '../../types';

// Components 

import Canvas from './Canvas';

function ReportBuilder(props)
{
  const mockReportProperites = new ReportProperties("Name Example", ReportType.A1, ReportType.A1.getWidthPixels(), ReportType.A1.getHeightPixels())
  return (
    <>
    <div>
        <h1>Report Builder</h1>
        <Canvas reportProperties={mockReportProperites}></Canvas>
    </div>
    </>
  );
}

export default ReportBuilder;