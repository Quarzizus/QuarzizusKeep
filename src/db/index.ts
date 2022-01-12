const initialDataUser = {
  userId: "",
  email: "",
  taskCards: {
    taskcardnumero1: {
      id: "taskcardnumero1",
      tasks: {
        cero: {
          id: "tasknumero1",
          checked: false,
          content: "You can add here yours tasks",
          open: false,
        },
      },

      title: "Welcome",
    },
  },
};

const squeleton = {
  userId: "",
  email: "",
  taskCards: {
    "": {
      id: "",
      tasks: {
        "": {
          id: "",
          checked: false,
          content: "",
          open: false,
        },
      },
      title: "",
    },
  },
};

export { initialDataUser, squeleton };
