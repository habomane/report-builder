
import { useEffect } from "react";
import { Link } from "react-router-dom";
function ListTemplateItem(props) {
const template = props.template;

useEffect(() => {
    console.log(template)
})

  if (!template) {
    return <p>No template provided</p>;
  }

  return (
    <div className="flex flex-col hover:bg-gray-50 active:bg-gray-200">
    <Link to={"/template/" + template.templateId}>
      <h2 className="text-lg font-bold"> {template.templateName} </h2>
      <div className="flex flex-row justify-between w-[50%]">
        <p className="text-gray-400">Last Used: { template.dateUsed }</p>
        <p className="text-gray-400">Last Created: { template.dateCreated }</p>
      </div>
      </Link>
    </div>
  );
}


export default ListTemplateItem;
