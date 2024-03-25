import { FC } from "react";
import { IForm, ILoginFormProps } from "../../shared/types/types";
import ButtonsContainer from "../../shared/containers/ButtonsContainer/ButtonsContainer";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import CustomControlller from "../../shared/components/CustomController";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axiosLogin from "../../services/axiosLogin";
import {
  defaultPass,
} from "../../constants/defaultValuesForLogin/defaultValuesForLogin";
import { useNavigate } from "react-router";
import styles from "./LoginFormContainer.module.css";

const LoginForm: FC<ILoginFormProps> = ({ isLogged, setIsLogged }) => {
  const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string(),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit =
    isLogged === "true"
      ? (data: IForm) => {
          console.log(data, "isLogged");
        }
      : async (data: IForm) => {
          await axiosLogin({ email: data.email, password: defaultPass });
          setIsLogged("true");
        };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: "3vh" }}
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <ButtonsContainer />
      <Divider>
        <Typography color="#BEC5CC">OR</Typography>
      </Divider>
      <CustomControlller
        placeHolder="Work email"
        name="email"
        type="email"
        control={control}
        errors={errors}
      />
      {isLogged === "true" && (
        <>
          <CustomControlller
            placeHolder="Password"
            name="password"
            type="password"
            control={control}
            errors={errors}
          />
          <div onClick={() => navigate("/forgotPass")}>
            <Typography textAlign="end" color="#316FEA" sx={{cursor: 'pointer'}}>
              Forgot Password ?
            </Typography>
          </div>
        </>
      )}
      <Button
        type="submit"
        variant="contained"
        sx={{ borderRadius: "8px", color: "white" }}
      >
        Log in to Qencode
      </Button>
      <div className={styles.footer}>
        Is your company new to Qencode?{" "}
        <div style={{color: '#316FEA'}}>Sign up</div>
      </div>
    </Box>
  );
};

export default LoginForm;
