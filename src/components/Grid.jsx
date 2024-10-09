import Days from "./Days.jsx";
import { halloweenMovies } from "../data/movies.js";

export default function Grid() {
  return (
    <>
      <main className="flex flex-col justify-center items-center">
        <section className="w-full max-w-2xl md:max-w-3xl lg:max-w-7xl rounded-lg bg-black text-white font-bold p-10 mt-10 text-lg">
          <Days />
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 p-2 ">
            {halloweenMovies.map((hallowMovie) => (
              <li
                key={hallowMovie.date}
                className="list-none text-md outline outline-1 outline-white h-40 text-center"
              >
                <span className="flex ml-2">{hallowMovie.date}</span>
                {hallowMovie.movie}
              </li>
            ))}
          </section>
        </section>
      </main>
    </>
  );
}
