import { ComingSoon } from "@/components/coming-soon";
import { PageHeader } from "@/components/page-header";

export default function BrowseChallengesPage() {
  return (
    <>
      <PageHeader
        title="Browse Research Challenges"
        subtitle="Find industry problems that match your lab's expertise."
      />
      <ComingSoon step="step 3" />
    </>
  );
}
