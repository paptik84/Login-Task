import { Box } from "@mui/material";
import TitleBox from "../../shared/components/TitleBox";
import FormContainer from "../../shared/containers/FormContainer";
import styles from "../LoginPage/LoginPage.module.css";

const ForgotPassPage = () => {
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
  )
}

export default ForgotPassPage