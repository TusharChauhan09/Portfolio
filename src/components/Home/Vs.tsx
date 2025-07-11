'use client';
import { useThemeMode } from "@/hooks/useThemeMode";

export default function Vs({custom}:{custom? : string }) {
    const theme = useThemeMode();
    return(
    <div className={` jap text-4xl ${theme==='dark'?'demon-red':''} ${custom}`}>VS</div>
  );
}