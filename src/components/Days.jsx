import { daysOfTheWeek } from "../data/movies";

export default function Days() {
  return (
    <section className="w-full max-w-2xl md:max-w-3xl lg:max-w-7xl p-2 rounded-2xl bg-orange-600 text-sm">
      <div className="hidden lg:flex gap-20 ml-4">
        {daysOfTheWeek.map((days) => (
          <li key={days.id} className="text-white list-none">
            {days.day}
          </li>
        ))}
      </div>
    </section>
  );
}
