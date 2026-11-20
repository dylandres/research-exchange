"use client";

import { useState, type ReactNode } from "react";
import { ArrowRight, CheckCircle2, ChevronDown, Lock, X } from "lucide-react";
import type { Lab } from "@/lib/demo-data";

const MAX_LENGTH = 500;

type Props = {
  defaults: {
    problem: string;
    goal: string;
    researchAreas: string[];
    constraints: string;
  };
  areaOptions: string[];
  matchedLabs: Lab[];
  // Rendered under the Matching Labs card (server-rendered content).
  children?: ReactNode;
};

export function SubmitChallenge({ defaults, areaOptions, matchedLabs, children }: Props) {
  const [problem, setProblem] = useState(defaults.problem);
  const [goal, setGoal] = useState(defaults.goal);
  const [areas, setAreas] = useState(defaults.researchAreas);
  const [constraints, setConstraints] = useState(defaults.constraints);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = problem.trim() !== "" && goal.trim() !== "" && areas.length > 0;
  const remainingAreas = areaOptions.filter((a) => !areas.includes(a));

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      <form
        className="rounded-xl border border-zinc-200 bg-white p-6"
        onSubmit={(e) => {
          e.preventDefault();
          if (canSubmit) setSubmitted(true);
        }}
      >
        <h2 className="text-lg font-semibold text-zinc-900">Problem Details</h2>
        <p className="mt-1 text-sm text-zinc-500">
          Provide a structured overview of your technical challenge. This will be shared with
          relevant researchers and labs.
        </p>

        <div className="mt-6 flex flex-col gap-5">
          <Field label="Problem Statement" htmlFor="problem" required>
            <input
              id="problem"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              maxLength={MAX_LENGTH}
              required
              className={inputClass}
            />
          </Field>

          <Field label="Goal" htmlFor="goal" required>
            <textarea
              id="goal"
              rows={3}
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              maxLength={MAX_LENGTH}
              required
              className={inputClass}
            />
            <Counter value={goal} />
          </Field>

          <Field label="Research Areas" required>
            <div className="flex min-h-11 flex-wrap items-center gap-2 rounded-lg border border-zinc-200 px-2 py-1.5">
              {areas.map((area) => (
                <span
                  key={area}
                  className="flex items-center gap-1.5 rounded-md bg-zinc-100 px-2.5 py-1 text-sm text-zinc-700"
                >
                  {area}
                  <button
                    type="button"
                    aria-label={`Remove ${area}`}
                    onClick={() => setAreas(areas.filter((a) => a !== area))}
                    className="text-zinc-400 hover:text-zinc-700"
                  >
                    <X className="size-3.5" />
                  </button>
                </span>
              ))}
              <label className={`relative ml-auto flex items-center ${areas.length ? "" : "flex-1"}`}>
                <span className="sr-only">Add a research area</span>
                <select
                  value=""
                  onChange={(e) => e.target.value && setAreas([...areas, e.target.value])}
                  disabled={remainingAreas.length === 0}
                  className={`cursor-pointer appearance-none [&>option]:text-zinc-900 bg-transparent py-1 pl-2 pr-6 text-sm outline-none ${
                    areas.length ? "w-8 text-transparent" : "w-full text-zinc-500"
                  }`}
                >
                  <option value="">{areas.length ? "" : "Select areas"}</option>
                  {remainingAreas.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-1 size-4 text-zinc-500" />
              </label>
            </div>
            <p className="mt-1.5 text-xs text-zinc-500">Add relevant research areas to get better matches.</p>
          </Field>

          <Field label="Constraints" htmlFor="constraints">
            <textarea
              id="constraints"
              rows={4}
              value={constraints}
              onChange={(e) => setConstraints(e.target.value)}
              maxLength={MAX_LENGTH}
              className={inputClass}
            />
            <Counter value={constraints} />
          </Field>

          <div>
            <p className="mb-2 text-sm font-medium text-zinc-900">Data Sharing</p>
            <div className="flex gap-3 rounded-lg bg-blue-50 p-4">
              <Lock className="mt-0.5 size-4 shrink-0 text-zinc-600" />
              <div className="text-sm">
                <p className="font-medium text-zinc-900">No raw proprietary data shared at this stage.</p>
                <p className="mt-1 text-zinc-600">
                  Share a structured problem statement first. Detailed data can be discussed later
                  with selected researchers.
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className="flex items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Submit Challenge
            <ArrowRight className="size-4" />
          </button>
        </div>
      </form>

      <div className="flex min-w-0 flex-col gap-6">
        <MatchingLabs submitted={submitted} labs={matchedLabs} selectedAreas={areas} />
        {children}
      </div>
    </div>
  );
}

function MatchingLabs({
  submitted,
  labs,
  selectedAreas,
}: {
  submitted: boolean;
  labs: Lab[];
  selectedAreas: string[];
}) {
  return (
    <section className="rounded-xl border border-zinc-200 bg-white p-6">
      <div className="flex items-center gap-3">
        <h2 className="text-lg font-semibold text-zinc-900">Matching Labs</h2>
        {submitted && (
          <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand">
            {labs.length} notified
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-zinc-500">
        Researchers and labs we share your challenge with, based on your problem statement.
      </p>

      {!submitted ? (
        <div className="mt-5 rounded-lg border border-dashed border-zinc-300 p-8 text-center text-sm text-zinc-500">
          Submit your challenge to see which labs we share it with.
        </div>
      ) : (
        <>
          <div role="status" className="mt-5 flex gap-3 rounded-lg bg-emerald-50 p-4">
            <CheckCircle2 className="size-6 shrink-0 fill-emerald-600 text-white" />
            <div className="text-sm">
              <p className="font-semibold text-zinc-900">Challenge submitted</p>
              <p className="mt-1 text-zinc-600">
                We&apos;ve shared your challenge with{" "}
                <span className="font-semibold text-zinc-900">{labs.length} labs</span> whose
                expertise fits. You&apos;ll be notified when a researcher expresses interest,
                usually within 2–3 business days.
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-medium text-zinc-900">What happens next</span>
            {[
              "Labs review your challenge",
              "Interested researchers appear in Matches",
              "You start the conversation",
            ].map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                {i > 0 && <ArrowRight className="size-3 text-zinc-400" />}
                <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-zinc-600">{step}</span>
              </span>
            ))}
          </div>

          <p className="mt-6 text-xs font-medium uppercase tracking-wide text-zinc-400">Labs notified</p>
          <ul className="mt-2 flex flex-col gap-3">
            {labs.map((lab) => (
              <li
                key={lab.id}
                className="flex items-start gap-4 rounded-lg border border-zinc-200 p-3"
              >
                <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-brand-50 text-lg font-semibold text-brand">
                  {lab.name[0]}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-zinc-900">{lab.name}</p>
                  <p className="text-sm text-zinc-500">
                    {lab.lead} · {lab.leadTitle}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {lab.areas.map((area) => (
                      <span
                        key={area}
                        className={`rounded-full border px-2.5 py-0.5 text-xs text-brand ${
                          selectedAreas.includes(area)
                            ? "border-brand bg-brand-50"
                            : "border-transparent bg-brand-50"
                        }`}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700">
                  <span className="size-1.5 rounded-full bg-blue-600" />
                  Notified
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

const inputClass =
  "w-full rounded-lg border border-zinc-200 px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-brand focus:ring-2 focus:ring-brand/15";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-zinc-900">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      {children}
    </div>
  );
}

function Counter({ value }: { value: string }) {
  return (
    <p className="mt-1 text-right text-xs text-zinc-400">
      {value.length}/{MAX_LENGTH}
    </p>
  );
}
