import { ComingSoon } from "@/components/coming-soon";
import { PageHeader } from "@/components/page-header";

export default function MatchesPage() {
  return (
    <>
      <PageHeader title="Match Details" subtitle="Review the researcher and start the conversation." />
      <ComingSoon step="step 4" />
    </>
  );
}
