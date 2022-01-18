import { useContext, useEffect } from "react";
import { CreateTaskInTaskCard } from "./molecules/CreateTaskInTaskCard";
import { CreateTaskCardComponent } from "./styles";
import { CreateTaskCardFooter } from "./molecules/CreateTaskCardFooter";
import { CreateTaskCardHeader } from "./molecules/CreateTaskCardHeader";
import { CreateTaskCardContent } from "./molecules/CreateTaskCardContent";
import { CreateTaskCardContext } from "./context/CreateTaskCardContext";

const CreateTaskCard = () => {
  const {
    state: { createTaskInTaskCardRef, open, taskCardId, tasks },
    dispatch,
  } = useContext(CreateTaskCardContext);

  useEffect(() => {
    open && createTaskInTaskCardRef.current?.focus();
  }, [open]);

  return (
    <CreateTaskCardComponent>
      {!open ? (
        <h2
          onClick={() => {
            dispatch({
              type: "HANDLE_OPEN",
            });
          }}
        >
          Create one note...
        </h2>
      ) : (
        <>
          <CreateTaskCardHeader open={open} />
          <CreateTaskCardContent items={tasks} open={open} />
          <CreateTaskInTaskCard
            createTaskInTaskCardRef={createTaskInTaskCardRef}
            taskCardId={taskCardId as string}
          />
          <CreateTaskCardFooter taskCardId={taskCardId as string} />
        </>
      )}
    </CreateTaskCardComponent>
  );
};

export { CreateTaskCard };
