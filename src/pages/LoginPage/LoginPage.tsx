import styles from "./LoginPage.module.css";
import TitleBox from "../../shared/components/TitleBox";
import { Box } from "@mui/material";
import FormContainer from "../../shared/containers/FormContainer";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "25rem",
          justifyContent: "center",
        }}
      >
        <TitleBox />
        <FormContainer />
      </Box>
    </div>
  );
};

export default LoginPage;
