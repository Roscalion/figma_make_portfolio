import { Linkedin, FolderKanban } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mx-auto mb-6 flex items-center justify-center text-white">
            <FolderKanban className="w-16 h-16" />
          </div>
        </div>
        
        <h1 className="text-slate-900 mb-4">
          Hi, I'm <span className="text-blue-600">Richard Saunders</span>
        </h1>
        
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
          Dynamic AI-focused project professional with 5+ years of experience optimizing workflows, leading teams, and accelerating operational efficiency. Skilled in building Custom GPTs, managing multi-team projects with Jira/Agile, and driving data-informed decisions. Strong mentor with a consistent record of improving accuracy, speed, and productivity across high-pressure environments.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <a href="https://github.com/Roscalion" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View My Work
          </a>
          <a href="https://linktr.ee/roscamgmt" target="_blank" rel="noopener noreferrer" className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg hover:bg-white transition-colors">
            Linketree
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://www.linkedin.com/in/richard-saunders/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}