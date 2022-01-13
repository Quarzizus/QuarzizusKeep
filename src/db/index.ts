const initialDataUser = {
  userId: "",
  email: "",
  taskCards: {
    "-MtJD8mN1JH3z5UZSxnrTaskCard": {
      id: "-MtJD8mN1JH3z5UZSxnrTaskCard",
      tasks: {
        "-MtJD8mN1JH3z5UZSxnrTask": {
          id: "-MtJD8mN1JH3z5UZSxnrTask",
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
