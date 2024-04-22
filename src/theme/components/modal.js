export const Modal = {
  styleOverrides: {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      "& .modal-content": {
        width: "80%",
        maxWidth: "500px",
        margin: "0",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "stretch",
        color: "black",
        fontStyle: "Poppins",
        overflowY: "scroll",
        height: "400px",
        maxHeight: "calc(100% - 60px)",
      },
    },
  },
};
