import { useDraggable } from "@dnd-kit/core";

// Within your component that receives `transform` from `useDraggable`:

function TextReportOption() {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="cursor-pointer"
      draggable={true}
    >
      <svg
        width="100px"
        height="100px"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 14l5 6-5 6H10V14h15zm-1 2H12v8h12l3.5-4-3.5-4z" />
      </svg>
    </div>
  );
}

export default TextReportOption;
