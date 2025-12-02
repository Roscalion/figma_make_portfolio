import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  category: string;
  icon: LucideIcon;
  color: string;
  skills: string[];
}

const colorClasses = {
  blue: "bg-blue-100 text-blue-600",
  purple: "bg-purple-100 text-purple-600",
  green: "bg-green-100 text-green-600",
  orange: "bg-orange-100 text-orange-600"
};

export function SkillCard({ category, icon: Icon, color, skills }: SkillCardProps) {
  const colorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 rounded-lg ${colorClass}`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-slate-900">{category}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
