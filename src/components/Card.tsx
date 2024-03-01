import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
function Card_() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image="./food1.png"
          alt="food1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Өглөөний хоол
          </Typography>
          <Box flexDirection="row" gap={2} sx={{ display: "flex" }}>
            <Typography variant="h6" color="text.secondary">
              adfsf
            </Typography>
            <Typography variant="h6" color="red">
              fdsafdsaf
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Card_;
