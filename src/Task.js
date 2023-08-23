import React from "react";
import { differenceInDays } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const diff = differenceInDays(new Date(taskObj.deadline), new Date());
  console.log("diff", diff);

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:{" "}
        <span style={{ backgroundColor: diff < 3 ? "tomato" : "gray" }}>
          {taskObj.deadline}
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
