import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export default function classMerge(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}