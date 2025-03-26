import classMerge from "@/utils/ClassMerge";

export interface WrapProps {
    children: React.ReactNode
    className?: string
}

export default function Wrap({ children, className }: WrapProps) {
    return (
        <div className={classMerge("w-full overflow-hidden", className)}>
            {children}
        </div>
    )
}