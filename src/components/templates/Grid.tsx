import classMerge from "@/utils/ClassMerge"

export interface GridProps {
    children: React.ReactNode
    className?: string
    column?: boolean
    numCols?: number
    numRows?: number
}

export default function Grid({ children, className, column, numCols, numRows = 1 }: GridProps) {
    return (
        <div className={classMerge(
            `grid grid-rows-${numRows}`,
            { [`grid grid-cols-${numCols}`]: column },
            className
        )}>
            {children}
        </div>
    )
}