import { SkillCard } from "./SkillCard";
import { Code2, Palette, Database, Smartphone } from "lucide-react";

const skillsData = [
  {
    category: "Artificial Intelligence",
    icon: Code2,
    color: "blue",
    skills: ["Figma Make", "Agentforce", "AI Design/Art" , "Claude" , "Prompt Engineering" , "Chat GPT", "Chat GPT Custom Agents", "Grok", "LM Studio", "Ollama"]
  },
  {
    category: "Project Management Software",
    icon: Palette,
    color: "purple",
    skills: ["Jira", "Asana", "Taskade", "ClickUp", "Trello"]
  },
  {
    category: "Data Analytics",
    icon: Database,
    color: "green",
    skills: ["Google Analytics", "Power BI", "PostgreSQL (Training)", "Python (Training)", "Tableau"]
  },
  {
    category: "UI/UX Design",
    icon: Smartphone,
    color: "orange",
    skills: ["Figma", "User Research", "Prototyping"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-slate-900 mb-4">My Skills</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Here are some of the technologies and areas I specialize in. 
          I'm always learning and expanding my skill set.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((skillGroup, index) => (
          <SkillCard 
            key={index}
            category={skillGroup.category}
            icon={skillGroup.icon}
            color={skillGroup.color}
            skills={skillGroup.skills}
          />
        ))}
      </div>
    </section>
  );
}