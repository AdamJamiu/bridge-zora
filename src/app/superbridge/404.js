"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    router.push("https://testnet.bridge.zora.energy/");
  }, []);
  return <h1>404 - Page Not Found</h1>;
}
