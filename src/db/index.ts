const initialDataUser = {
  userId: "",
  email: "",
  taskCards: {
    cero: {
      id: "0",
      tasks: {
        cero: {
          id: "0",
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
