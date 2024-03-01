import * as React from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import CheckIcon from "@mui/icons-material/Check";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant: VariantType) => () => {
    enqueueSnackbar("Амжилттай бүртгэгдлээ", { variant });
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickVariant("success")}>
        Click here NIGGA!!
      </Button>
    </React.Fragment>
  );
}

export default function Notification() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
