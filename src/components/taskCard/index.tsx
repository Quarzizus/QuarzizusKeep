import { useContext, useEffect, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { CSS } from "@dnd-kit/utilities";
import { DroppableProvider } from "../../containers/containerTasks/DroppableProvider";
import { props } from "./interfaces";
import { TaskCardFooter } from "./molecules/TaskCardFooter";
import { TaskCardHeader } from "./molecules/TaskCardHeader";
import { TaskCardContent } from "./molecules/TaskCardContent";
import { TaskCardComponent } from "./styles";
import { props as TaskProps } from "../task/interfaces";
import { WrapperTaskCard } from "../wrapperTaskCard";
import { TaskCardContext } from "./context/TaskCardContext";

const TaskCard = () => {
  const {
    state: { open, tasks, title, taskCardId },
    dispatch,
  } = useContext(TaskCardContext);

  const { transform, transition, setNodeRef, attributes, listeners } =
    useSortable({
      id: taskCardId as string,
    });

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
  };

  return (
    <WrapperTaskCard open={open} setNodeRef={setNodeRef} style={styles}>
      <TaskCardComponent
        onDoubleClick={() => {
          !open && dispatch({ type: "HANDLE_OPEN" });
        }}
        open={open}
      >
        <TaskCardHeader
          attributes={{ ...attributes }}
          listeners={{ ...listeners }}
          title={title}
          open={open}
        />
        {/* <DroppableProvider
          items={tasks}
          modifiers={[restrictToVerticalAxis]}
          setItems={setItems}
        > */}
        {tasks && (
          <TaskCardContent
            items={tasks}
            open={open}
            taskCardId={taskCardId as string}
          />
        )}
        {/* </DroppableProvider> */}
        {open && <TaskCardFooter />}
      </TaskCardComponent>
    </WrapperTaskCard>
  );
};

export { TaskCard };
