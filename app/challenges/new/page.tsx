import { ArrowRight, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SubmitChallenge } from "@/components/submit-challenge";
import { challenges, collaborationSteps, labs, matches, researchAreas } from "@/lib/demo-data";

// The demo pre-fills Meridian Health's challenge and shows the labs it matched.
const demoChallenge = challenges.find((c) => c.id === "false-positives")!;

const matchedLabs = matches
  .filter((m) => m.challengeId === demoChallenge.id)
  .sort((a, b) => b.score - a.score)
  .map((m) => labs.find((l) => l.id === m.labId)!);

const asLines = (items: string[]) => items.map((item) => `- ${item}`).join("\n");

export default function SubmitChallengePage() {
  return (
    <>
      <PageHeader
        title="Submit a Research Challenge"
        subtitle="Connect your technical challenge to academic expertise."
      />
      <main className="p-8">
        <SubmitChallenge
          defaults={{
            problem: demoChallenge.title,
            goal: asLines(demoChallenge.goal),
            researchAreas: demoChallenge.researchAreas,
            constraints: asLines(demoChallenge.constraints),
          }}
          areaOptions={researchAreas}
          matchedLabs={matchedLabs}
        >
          <div className="grid gap-6 2xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <CollaborationSteps />
            <PrivacyCard />
          </div>
        </SubmitChallenge>
      </main>
    </>
  );
}

function CollaborationSteps() {
  return (
    <section className="rounded-xl border border-zinc-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-zinc-900">From Match to Collaboration</h2>
      <p className="mt-1 text-sm text-zinc-500">
        A streamlined process from initial introduction to funded research.
      </p>
      <ol className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
        {collaborationSteps.map((step, i) => (
          <li key={step.title}>
            <div className="flex items-center gap-2">
              <span
                className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white ${
                  i === 0 ? "bg-brand ring-4 ring-brand-50" : "bg-zinc-400"
                }`}
              >
                {i + 1}
              </span>
              <span className={`h-0.5 flex-1 ${i === 0 ? "bg-brand/60" : "bg-zinc-200"}`} />
            </div>
            <p className="mt-3 text-sm font-medium text-zinc-900">{step.title}</p>
            <p className="mt-1 text-xs text-zinc-500">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function PrivacyCard() {
  return (
    <section className="flex gap-4 rounded-xl border border-brand-50 bg-brand-50/60 p-6">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-50">
        <ShieldCheck className="size-5 text-brand" />
      </span>
      <div>
        <p className="text-xs font-medium text-brand">Your Ideas Are Protected</p>
        <h2 className="mt-1 text-lg font-semibold leading-snug text-zinc-900">
          Share structured problem statements before sensitive data.
        </h2>
        <p className="mt-3 text-sm text-zinc-600">
          We help you find the right academic partners while keeping your proprietary data and IP
          secure.
        </p>
        {/* No privacy page yet, so this isn't a link. */}
        <span
          title="Not built yet"
          className="mt-4 inline-flex cursor-not-allowed items-center gap-1.5 text-sm font-medium text-brand/60 underline underline-offset-4"
        >
          Learn more about our privacy approach
          <ArrowRight className="size-4" />
        </span>
      </div>
    </section>
  );
}
