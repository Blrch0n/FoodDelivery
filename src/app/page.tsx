"use client";

import Card_ from "@/components/Card";
import Footer from "@/components/Footer";
import ResponsiveAppBar from "@/components/Navbar";
import Notification from "@/components/notification";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Card_></Card_>
      <Notification></Notification>
      <Footer></Footer>
    </Container>
  );
}
