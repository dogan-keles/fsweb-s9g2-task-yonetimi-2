import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const diff = differenceInDays(new Date(taskObj.deadline), new Date());
  const taskDeadline = formatDistanceToNow(new Date(taskObj.deadline), {
    addSuffix: true,
    locale: tr,
  });
  console.log("diff", diff);

  return (
    <div className="p-6 bg-white rounded leading- 6 mt-4 shodow-md task">
      <h3 className="text-lg leading-6 text-[#c8781a]">{taskObj.title}</h3>
      <div className="deadline">
        son teslim:{" "}
        <span className={diff < 3 ? "bg-[#ffd9d4]" : ""}>{taskDeadline}</span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block py-2 px-3 border border-neutral-300 mr-1 mb-2 rounded-full pill"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
