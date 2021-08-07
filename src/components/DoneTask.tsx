type TaskProps = {
    id: number;
    name: string;
}
 
const DoneTaskk = ({id, name} : TaskProps) => {
    return (
        <div
        className="flex justify-between h-8 items-center py-6 border-b"
      >
        <span className="text-2xl line-through"> {name} </span>
    
      </div>
    )
  }
export default DoneTaskk