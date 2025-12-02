import { Award } from "lucide-react";

interface CertificationCardProps {
  name: string;
  issuer: string;
  date: string;
}

export function CertificationCard({ name, issuer, date }: CertificationCardProps) {
  return (
    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-blue-400 transition-colors">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
          <Award className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-slate-900 mb-2">{name}</h3>
          <p className="text-slate-600 mb-1">{issuer}</p>
          <p className="text-slate-500">{date}</p>
        </div>
      </div>
    </div>
  );
}
