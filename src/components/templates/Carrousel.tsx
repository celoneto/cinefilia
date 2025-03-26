import { Children, cloneElement, JSX } from "react"
import Wrap from "./Wrap"
import Container from "./Container"
import Flex from "./Flex"
import classMerge from "@/utils/ClassMerge"
import { CaretLeft } from "@phosphor-icons/react"

export interface CarrouselProps {
    children: JSX.Element[]
    autoSlide: boolean
}

export default function Carrousel({ children, autoSlide }: CarrouselProps) {
    const currentIndex = 0
    const ITEMS_NUMBER = children.length
    return (
        <Wrap>
            <Container>
                <Wrap>
                    <div className="relative rounded-lg mb-5">{Children.map(children, (son: JSX.Element, i) => {
                        const sonProps = son.props
                        return cloneElement(son, {
                            className: `${i === currentIndex ? "" : "hidden"}`
                        })
                    })}</div>
                    <Flex className="absolute z-30 left-1/2 bottom-5 translate-x-1/2 gap-2">
                        {Array.from({ length: ITEMS_NUMBER }).map((_, i) => {
                            return <button key={i} className={classMerge("h-3 w-3 rounded-full bg-gray-800", { "bg-gray-500": i === currentIndex })}></button>
                        })}
                    </Flex>
                </Wrap>
            </Container>
            <button className="group absolute left-0 top-0 h-full cursor-pointer flex items-center justify-center px-4 focus:outline-none">
                <span className="inline-flex h-10 w-10 bg-gray-700/30 items-center justify-center rounded-full group-focus:outline-none group-focus:ring-4 group-focus:ring-right group-hover:bg-gray-800/60">
                    <CaretLeft size={20} />
                    <span>Anterior</span>
                </span>
            </button>
        </Wrap>
    )
}