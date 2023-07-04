"use client";

import { Button, Header } from "ui";

import { setTokens } from "tokens";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    setTokens("brn");
  }, []);

  return (
    <>
      <Header text="Web" />
      <Button />
    </>
  );
}
