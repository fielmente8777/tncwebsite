"use client";
// not fount page navigation using useRouter from next/navigation
import { useRouter } from "next/navigation";

export const useNotFound = () => {
    const router = useRouter();
    return () => {
        router.push("/");
    };
};