import { FC, useState } from "react";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IForm } from "../../types/types";

interface ICustomControlller<TControlData extends FieldValues = any> {
  type: "email" | "password";
  control: Control<TControlData>;
  errors: FieldErrors<IForm>;
  placeHolder: string;
  name: "email" | "password" | "confirmPassword";
}

const CustomControlller: FC<ICustomControlller> = ({
  type,
  control,
  errors,
  placeHolder,
  name,
}) => {
  const [isShown, setIsShown] = useState(false);

  const handleClickShowPass = () => {
    setIsShown((prev) => !prev);
  };
  return (
    <Box>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur }, fieldState: { error } }) => (
          <TextField
            onChange={onChange}
            onBlur={onBlur}
            fullWidth
            placeholder={placeHolder}
            error={!!error}
            type={type === "password" ? (isShown ? "text" : "password") : type}
            InputProps={{
              endAdornment: type === "password" && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPass}
                    edge="end"
                  >
                    {isShown ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      {errors ? (
        <Typography variant="caption" height="20px">
          {errors[type]?.message}
        </Typography>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default CustomControlller;
