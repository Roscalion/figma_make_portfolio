import { CertificationCard } from "./CertificationCard";

export function Certifications() {
  const certifications = [
    {
      name: "Lean Six Sigma Green Belt",
      issuer: "The Council for Six Sigma Certification (CSSC)",
      date: "2025",
      icon: "certificate"
    },
    {
      name: "IT Support Professional",
      issuer: "Google",
      date: "2024",
      icon: "certificate"
    },
    {
      name: "Comptency in AI Essentials",
      issuer: "CompTIA",
      date: "2024",
      icon: "certificate"
    }
  ];

  return (
    <section id="certifications" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">Certifications</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in project management and AI technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
