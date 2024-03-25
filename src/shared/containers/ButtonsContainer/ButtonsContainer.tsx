import { Box } from "@mui/material";
import LoginWithButton from "../../components/LoginWithButton";

const ButtonsContainer = () => {
  return (
    <Box sx={{ height: "48px", display: "flex", gap: "1rem" }}>
      <LoginWithButton loginWith="google" />
      <LoginWithButton loginWith="github" />
    </Box>
  );
};

export default ButtonsContainer;
