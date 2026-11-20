import { ComingSoon } from "@/components/coming-soon";
import { PageHeader } from "@/components/page-header";

export default function SubmitChallengePage() {
  return (
    <>
      <PageHeader
        title="Submit a Research Challenge"
        subtitle="Connect your technical challenge to academic expertise."
      />
      <ComingSoon step="step 2" />
    </>
  );
}
