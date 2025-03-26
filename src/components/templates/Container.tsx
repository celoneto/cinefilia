import classMerge from '@/utils/ClassMerge'

export interface ContainerProps {
    children: React.ReactNode
    className?: string
    bigPadding?: boolean
}

export default function Container({ children, className, bigPadding }: ContainerProps) {
    return (
        <div className={classMerge("w-full max-w-screen-xl mx-auto p-4 ", { "py-20": bigPadding }, className)}>{children}</div>
    )
}