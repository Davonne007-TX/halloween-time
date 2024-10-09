import { daysOfTheWeek } from "../data/movies";

export default function Days() {
  return (
    <section className="w-full max-w-2xl md:max-w-3xl lg:max-w-7xl p-2 border-2 border-white bg-purple-500 text-sm">
      <section className="hidden lg:flex gap-28 ml-4">
        {daysOfTheWeek.map((days) => (
          <li key={days.id} className="text-white list-none">
            {days.day}
          </li>
        ))}
      </section>
    </section>
  );
}
