import { Avatar, Box, Container, Link, Stack, Typography } from "@mui/material";
import { url } from "inspector";
import React from "react";

const LogoData = ["./facebook.png", "./instagram.png", "./twitter.png"];

const FooterLinkData = [
  "Нүүр",
  "Холбоо барих",
  "Хоолны цэс",
  "Үйлчилгээний нөхцөл",
  "Хүргэлтийн бүс",
  "Нууцлалын бодлого",
];

const Footer = () => (
  <Stack
    sx={{
      backgroundColor: "green",
      backgroundImage: `url(./traced.png)`,
      width: "100%",
      height: "545px",
      display: "flex",
      flexDirection: "column",
      padding: "112px 120px",
    }}
  >
    <Stack
      width={`100%`}
      height={`236px`}
      flexDirection={`column`}
      alignItems={`center`}
      borderBottom={`1px solid white`}
      pb={`40px`}
    >
      <Stack
        width={`100%`}
        height={`100%`}
        flexDirection={`column`}
        alignItems={`center`}
        justifyContent={`space-between`}
      >
        <Box flexDirection={`row`} display={`flex`} alignItems={`center`}>
          <img src="./logo.png" style={{ width: "50px" }} alt="" />
          <Typography
            variant="h6"
            fontWeight={`bold`}
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Food Delivery
          </Typography>
        </Box>
        <Box width={`100%`} display={`flex`} justifyContent={`space-between`}>
          {FooterLinkData.map((link, index) => (
            <Link href="#" underline="always" key={index}>
              {link}
            </Link>
          ))}
        </Box>
        <Box display={`flex`} gap={`18px`}>
          {LogoData.map((logo, index) => (
            <Link href="#" key={index}>
              <img src={`${logo}`} />
            </Link>
          ))}
        </Box>
      </Stack>
    </Stack>
    <Stack
      width={`100%`}
      height={`86px`}
      flexDirection={`column`}
      alignItems={`center`}
      justifyContent={`flex-end`}
    >
      <Box textAlign={`center`}>
        <Typography color={`white`}>© 2024 Pinecone Foods LLC </Typography>
        <Typography color={`white`}>
          Зохиогчийн эрх хуулиар хамгаалагдсан.
        </Typography>
      </Box>
    </Stack>
  </Stack>
);

export default Footer;
