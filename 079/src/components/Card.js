import { Link } from "react-router-dom";
import Backup from "../assets/images/backup.png"

export const Card = ({movie}) => {
  const {id, original_title, overview, poster_path} = movie;
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup ;

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
        <Link to={`/movie/${id}`}>
            <img className="rounded-t-lg" src={image} alt="" />
        </Link>
        <div className="p-5">
            <Link to={`/movie/${id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
        </div>
    </div>
  )
}
