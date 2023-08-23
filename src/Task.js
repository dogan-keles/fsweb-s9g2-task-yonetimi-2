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
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:{" "}
        <span style={{ backgroundColor: diff < 3 ? "tomato" : "gray" }}>
          {taskDeadline}
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
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
