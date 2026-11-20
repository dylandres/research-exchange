export function ComingSoon({ step }: { step: string }) {
  return (
    <main className="p-8">
      <div className="rounded-xl border border-dashed border-zinc-300 bg-white p-10 text-center text-sm text-zinc-500">
        This screen is built in {step}.
      </div>
    </main>
  );
}
