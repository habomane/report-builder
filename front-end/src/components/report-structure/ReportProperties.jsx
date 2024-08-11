

function ReportSettings({ isActive }) {
  return (
    <main className={isActive ? "flex flex-col py-5 px-3" : "hidden"}>
        <h2 className="font-bold text-xl">Properties</h2>
        <div className="flex justify-center flex-col align-center wrap gap-x-5">
            <div className="flex flex-row mt-5 gap-x-3 items-center">
                <label className="">Item Name: </label>
                <input type="text" name="" id="" 
                className="border border-stone-600 focus:border-stone-500 focus:outline-none
                text-sm"/>
            </div>
        </div>
    </main>
  );
}

export default ReportSettings;
