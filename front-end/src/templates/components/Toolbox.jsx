import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

// Within your component that receives `transform` from `useDraggable`:


function Toolbox(props)
{
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'draggable',
      });
      const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      } : undefined;

// Within your component that receives `transform` from `useDraggable`:
// const style = {
//   transform: CSS.Translate.toString(transform),
// }

      return (
        <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
          {props.children}
        </button>
      );

    // return (
    //     <div className="bg-gray-50 w-[100%] md:w-[35%] border-[1rem]"> 
    //         <div className="flex flex-col py-5 px-3">
    //             <h2 className="font-bold text-xl">Toolbox</h2>
    //             <div className="flex justify-center align-center wrap gap-x-5">
    //             <div className="cursor-pointer"
    //             draggable={true}>
    //             <svg width="100px" height="100px" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M25 14l5 6-5 6H10V14h15zm-1 2H12v8h12l3.5-4-3.5-4z"/></svg>
    //             </div>

    //             <div className="cursor-pointer"
    //             draggable={true}
    //             >
    //             <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <path d="M4 9L20 9M8 9V20M6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.0799 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.07989 3 7.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //             </svg>
    //             </div>
                
    //             <div className="cursor-pointer"
    //             draggable={true}>
    //             <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <path d="M8 4V20M17 12V20M6 20H10M15 20H19M13 7V4H3V7M21 14V12H13V14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //             </svg>
    //             </div>


    //             </div>
    //         </div>

    //     </div>
    // )
}

export default Toolbox;