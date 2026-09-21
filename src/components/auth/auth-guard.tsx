/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */
"use client";

import { useGetMe } from "@/hooks";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function AuthGuard({ children }: { children: ReactNode }) {

    const router = useRouter();

    const { data, isPending, isError } = useGetMe();

    console.log(data);

    const user = data?.data;

    useEffect(() => {
        if(isPending) return;
        if (isError || !user) {
            router.replace("/login");
        }
    }, [isPending, isError, user]);

    return <>{children}</>

}