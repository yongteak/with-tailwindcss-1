import Image from "next/image";
import { useEffect, useState } from "react"
import {
    PlayIcon, InformationCircleIcon
} from '@heroicons/react/24/solid'
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings"

interface Props {
    netflixOriginals: Movie[]
};
function Banner({ netflixOriginals }: Props) {
    // console.log(netflixOriginals.length);
    const [movie, setMovie] = useState<Movie | null>(null);
    useEffect(() => {
        setMovie(
            netflixOriginals[3]
        //   netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
        )
      }, []);
    
    // console.log('movie',movie);
    // console.log(baseUrl,)
    return (
        <div className="flex flex-col py-16 space-y-2 lg:h-[85vh] lg:justify-end md:space-y-4 lg:pb-12">
            <div className="absolute top-0 left-0 w-screen h-[120vh] -z-10">
                <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                layout="fill"
                objectFit="cover"/>
            </div>
            <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
                {movie?.overview}
            </p>

            <div className="flex space-x-3">
                <button className="text-black bg-white bannerButton">
                    <PlayIcon className="w-4 h-4 text-black md:h-7 md:w-7" />
                    Play</button>
                <button className="bg-[gray]/70 bannerButton">
                    More Info <InformationCircleIcon className="w-5 h-5 md:w-8 md:h-8"/>
                    </button>
            </div>
        </div>
    )
}

export default Banner