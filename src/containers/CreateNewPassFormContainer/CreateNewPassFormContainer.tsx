import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { IFormCreate } from "../../shared/types/types";
import axiosResetPass from "../../services/axiosResetPass";
import { Box, Button, Typography } from "@mui/material";
import CustomControlller from "../../shared/components/CustomController";

const CreateNewPassFormContainer = () => {
  const token = localStorage.getItem("accessToken");
  const schema = yup.object().shape({
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        "Password must contain at least one numeric, one uppercase letter, and one lowercase letter"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormCreate>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: IFormCreate) => {
    await axiosResetPass({
      token: token?.slice(0, 64) as string,
      secret: "secretString",
      password: data.password,
      password_confirm: data.confirmPassword,
    });
  };
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: "3vh" }}
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography>Password</Typography>
      <CustomControlller
        control={control}
        name="password"
        type="password"
        errors={errors}
        placeHolder="Password"
      />
      <Typography sx={{ cursor: "default" }}>Confirm Password</Typography>
      <CustomControlller
        control={control}
        name="confirmPassword"
        type="password"
        errors={errors}
        placeHolder="Password"
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ borderRadius: "8px", color: "white" }}
      >
        Reset Password
      </Button>
    </Box>
  );
};

export default CreateNewPassFormContainer;
