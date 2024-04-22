import { createTheme } from "@mui/material";

import { breakpoints } from "./foundation";
import { Modal } from "./components/modal";

export const theme = createTheme({
  breakpoints,
  components: {
    MuiModal: Modal,
  },
});
