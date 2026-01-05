import Cd from "@/components/Miscellaneous/Cd";
import ComingSoon from "@/components/Blog/ComingSoon";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[70vh] px-4">
      {/* Main Content Container - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <ComingSoon
          title="Coming Soon"
          subtitle="About page is under construction."
        />
      </div>

      {/* Terminal-style cd.. navigation */}
      <Cd />
    </div>
  );
}
