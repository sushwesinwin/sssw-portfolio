"use client";

import { useState } from "react";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekDays = ["Mon", "Wed", "Fri"];
const year = 2026;
const start = new Date(Date.UTC(year, 0, 1));
const firstSunday = new Date(start);
firstSunday.setUTCDate(start.getUTCDate() - start.getUTCDay());
const weeks = 53;

function dateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function dayOfYear(date: Date) {
  return Math.floor((date.getTime() - start.getTime()) / 86400000) + 1;
}

function getCurrentDay() {
  const today = new Date();
  return new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
}

function contributionCount(date: Date, currentDay: Date) {
  if (date.getUTCFullYear() !== year || date > currentDay) return 0;
  const day = dayOfYear(date);
  return ((day * 7 + date.getUTCDay() * 3) % 5) + 1;
}

function getCells(currentDay: Date) {
  return Array.from({ length: weeks * 7 }, (_, index) => {
    const date = new Date(firstSunday);
    date.setUTCDate(firstSunday.getUTCDate() + index);
    const count = contributionCount(date, currentDay);
    return {
      count,
      date: dateKey(date),
      level: Math.min(4, count),
    };
  });
}

const monthLabels = months.map((month, index) => {
  const date = new Date(Date.UTC(year, index, 1));
  const column = Math.floor((date.getTime() - firstSunday.getTime()) / 604800000) + 1;
  return { month, column };
});

const levelClass = [
  "bg-[#161B22]",
  "bg-[#0E4429]",
  "bg-[#006D32]",
  "bg-[#26A641]",
  "bg-[#39D353]",
];

export function ContributionActivity() {
  const [currentDay] = useState(() => getCurrentDay());
  const cells = getCells(currentDay);
  const total = cells.reduce((sum, cell) => sum + cell.count, 0);

  return (
    <section className="w-full py-16">
      <div className="mx-auto mb-5 max-w-[1040px]">
        <h2 className="text-xl font-semibold tracking-normal text-[#F0F6FC] sm:text-2xl">
          {total} contributions in {year}
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1040px] gap-8">
        <div className="rounded-md border border-[#30363D] p-5">
          <div className="overflow-x-auto">
            <div className="mx-auto w-fit [--cell:11px] [--gap:3px]">
              <div
                className="ml-10 grid text-xs font-semibold text-[#F0F6FC]"
                style={{ gridTemplateColumns: `repeat(${weeks}, var(--cell))`, gap: "var(--gap)" }}
              >
                {monthLabels.map(({ month, column }) => (
                  <span key={month} style={{ gridColumnStart: column }}>
                    {month}
                  </span>
                ))}
              </div>

              <div className="mt-2 grid grid-cols-[2.5rem_1fr] gap-3">
                <div className="grid grid-rows-7 text-xs font-medium text-[#F0F6FC]" style={{ gap: "var(--gap)" }}>
                  <span />
                  {weekDays.map((day) => (
                    <span key={day} className="contents">
                      <span className="row-span-1">{day}</span>
                      <span />
                    </span>
                  ))}
                </div>

                <div
                  className="grid grid-flow-col grid-rows-7"
                  style={{ gridTemplateColumns: `repeat(${weeks}, var(--cell))`, gap: "var(--gap)" }}
                >
                  {cells.map((cell) => (
                    <span
                      key={cell.date}
                      aria-label={`${cell.count} contributions on ${cell.date}`}
                      className={`size-[var(--cell)] rounded-[2px] ${levelClass[cell.level]}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-[#8B949E]">
            <span>Learn how we count contributions</span>
            <div className="flex items-center gap-2">
              <span>Less</span>
              {levelClass.map((className, index) => (
                <span key={index} className={`size-3 rounded-[3px] ${className}`} />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold text-[#F0F6FC]">Contribution activity</h3>
          <button
            className="rounded-lg border border-[#30363D] bg-white/[0.06] px-4 py-2 text-base font-semibold text-[#F0F6FC]"
            type="button"
          >
            <span className="text-[#8B949E]">Year:</span> {year}{" "}
            <span className="text-[#8B949E]">▾</span>
          </button>
        </div>
      </div>
    </section>
  );
}
