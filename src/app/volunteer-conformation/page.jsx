import { Suspense } from "react";
import VolunteerSuccessClient from "./VolunteerSuccessClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <VolunteerSuccessClient />
    </Suspense>
  );
}
