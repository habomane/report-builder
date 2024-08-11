import TableReportOption from "../report-options/TableReportOption";
import TextReportOption from "../report-options/TextReportOption";
function Toolbox({ isActive }) {
  return (
    <div className={isActive ? '': 'hidden'}>
      <div className="flex flex-col py-5 px-3">
        <h2 className="font-bold text-xl">Toolbox</h2>
        <div className="flex justify-center align-center wrap gap-x-5">
          <TableReportOption></TableReportOption>
          <TextReportOption></TextReportOption>
        </div>
      </div>
    </div>
  );
}

export default Toolbox;
