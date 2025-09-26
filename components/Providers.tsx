"use client";

import { SessionProvider } from "next-auth/react";
import TrpcProvider from "./Provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <TrpcProvider>{children}</TrpcProvider>
    </SessionProvider>
  );
}