import { useRef, useState } from "react"
import {
    ChevronRightIcon,ChevronLeftIcon
} from '@heroicons/react/24/solid'
import { Movie } from "../typings"
import Thumbnail from "./Thumbnail"

interface Props {
    title: string
    movies: Movie[]// | DocumentData[]
}

function Row({ title, movies }: Props) {
    const rowRef = useRef<HTMLDivElement>(null)
    const [isMoved, setIsMoved] = useState(false)

    const handleClick = (direction: string) => {
        setIsMoved(true)
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current

            const scrollTo =
                direction === 'left'
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }

    return (
        <div className="h-40 space-y-0.5 md:space-y-2">
            <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
                {title}
            </h2>
            <div className="relative group md:-ml-2">
                <ChevronLeftIcon className="absolute top-0 bottom-0 z-40 m-auto transition opacity-0 cursor-pointer left-2 h-9 w-9 hover:scale-125 group-hover:opacity-100" />
                
                <div className="flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll md:space-x-2.5">
                    {movies.map((movie)=> (
                        <Thumbnail key={movie.id} movie={movie} />
                    ))}
                </div>
                
                <ChevronRightIcon className="absolute top-0 bottom-0 z-40 m-auto transition opacity-0 cursor-pointer left-2 h-9 w-9 hover:scale-125 group-hover:opacity-100" />
            </div>
        </div>
    );
}

export default Row