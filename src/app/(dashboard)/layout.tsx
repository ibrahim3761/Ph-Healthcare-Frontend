import AuthGuard from "@/components/auth/auth-guard";
import { ReactNode } from "react";

export default function layout({
  children,}: {
  children: ReactNode;
}) {
  return (
    <div>
      <AuthGuard> General Dashboard Layout{children}</AuthGuard>
    </div>
  );
}