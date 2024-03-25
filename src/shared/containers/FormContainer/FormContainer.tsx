import { PageDescription } from "../../../constants/pageDescriptions";
import { Box } from "@mui/material";
import LoginFormContainer from "../../../containers/LoginFormContainer";
import ForgotPassFormContainer from "../../../containers/ForgotPassFormContainer";
import CreateNewPassFormContainer from "../../../containers/CreateNewPassFormContainer";
import useLocalStorage from "../../../hooks/useLocalStorage";

const FormContainer = () => {
  const location = window.location.pathname;
  const [isLogged, setIsLogged] = useLocalStorage<string>('user', 'false')
  const title =
    location === "/login"
      ? PageDescription["LOGIN_PAGE"]
      : location === "/forgotPass"
      ? PageDescription["FORGOT_PASS_PAGE"]
      : PageDescription["CREATE_NEW_PASS_PAGE"];
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "5vh" }}>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {location === "/login" ? (
        <LoginFormContainer isLogged={isLogged} setIsLogged={setIsLogged} />
      ) : location === "/forgotPass" ? (
        <ForgotPassFormContainer />
      ) : (
        <CreateNewPassFormContainer />
      )}
    </Box>
  );
};

export default FormContainer;
