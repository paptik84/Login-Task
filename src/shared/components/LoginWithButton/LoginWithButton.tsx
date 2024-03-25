import { FC } from "react";
import { ILoginWithProps } from "../../types/types";
import { Button } from "@mui/material";
import GoogleIcon from "../../Icons/GoogleIcon";
import GitHubIcon from "../../Icons/GitHubIcon";

const LoginWithButton: FC<ILoginWithProps> = ({ loginWith }) => {
  return (
    <Button sx={{ border: "1.2px solid #D3D8DC", color: "black", width: '12rem' }}>
      {loginWith === "google" ? (
        <div style={{}}>
          <GoogleIcon />
          Google
        </div>
      ) : (
        <div>
          <GitHubIcon />
          GitHub
        </div>
      )}
    </Button>
  );
};

export default LoginWithButton;
