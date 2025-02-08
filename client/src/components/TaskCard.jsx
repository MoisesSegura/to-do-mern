import { useTasks } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-gray-700 text-white rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-base font-bold pb-2">{task.title}</h2>
        <span>{task.done == 1 ? "️✅️" : "❌"}</span>
      </header>
      <p className="text-sm pb-2">{task.description}</p>
      <span className="" >{task.createAt}</span>
      <div className="flex gap-x-1 pt-2">
        <button
          className="bg-slate-300 px-2 py-1 text-black hover:bg-blue-300"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black hover:bg-blue-300"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black hover:bg-blue-300"
          onClick={() => handleDone(task.done)}
        >
          Toggle Task
        </button>
      </div>
    </div>
  );
}

export default TaskCard;