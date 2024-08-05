import { mockTemplates } from "./mocks/AllTemplate";
import { Link } from "react-router-dom";
// // Components
import ListTemplateItem from "./components/ListTemplateItem";

function AllTemplatePage() {
    const pageHeader = "All Templates";

  return (
  <main className="flex flex-col align-center py-3 px-10">
    <h1 className="text-4xl">{pageHeader}</h1>

    <div className="flex flex-col mt-8 gap-y-6">
        {
            mockTemplates.map((templateItem, i) => {
                return <ListTemplateItem key={i} template={templateItem}></ListTemplateItem>
            })
        }
    </div>

    <div className="mt-20">
        <Link to="/template/create"><button type="button" className="bg-green-200 py-3 px-4 hover:translate-y-[-4px] hover:shadow-lg active:translate-y-[-1px] active:shadow-xl">Create New + </button></Link>
    </div>

  </main>
  );
}

export default AllTemplatePage;
