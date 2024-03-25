import { useForm } from "react-hook-form";
import * as yup from "yup";
import { IForm } from "../../shared/types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import { Box, Button } from "@mui/material";
import CustomControlller from "../../shared/components/CustomController";
import axiosForgotPass from "../../services/axiosForgotPass";

const ForgotPassFormContainer = () => {
  const schema = yup.object().shape({
    email: yup.string().required().email(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  const onSubmit = async (data: IForm) => {
    await axiosForgotPass(data).then(
      () => {
        navigate("/newPass");
      },
      (reason) => alert(reason)
    );
  };
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: "3vh" }}
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <CustomControlller
        name="email"
        placeHolder="Enter your email"
        type="email"
        control={control}
        errors={errors}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ borderRadius: "8px", color: "white" }}
      >
        Send
      </Button>
      <Button
        onClick={() => navigate("/login")}
        sx={{
          borderRadius: "8px",
          color: "black",
          border: "1.2px solid #D3D8DC",
        }}
      >
        Cancel
      </Button>
    </Box>
  );
};

export default ForgotPassFormContainer;
