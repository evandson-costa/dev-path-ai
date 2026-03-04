import { CheckCircle2, Code2 } from 'lucide-react';

// 1. Defina o contrato (Props) que o componente aceita
interface SkillSelectorProps {
  selected: string[];
  onToggle: (skills: string[]) => void;
}

const TECH_STACK = ["C#", "React", "TensorFlow.js", "MongoDB", "Docker", "Python", "Node.js", "Kubernetes", "AWS", "Azure", "GCP", "GraphQL"];

// 2. Receba as props desestruturadas
export default function SkillSelector({ selected, onToggle }: SkillSelectorProps) {
  
  const toggleSkill = (skill: string) => {
    // 3. Use o onToggle enviado pelo pai para atualizar o estado global
    const newSkills = selected.includes(skill)
      ? selected.filter(s => s !== skill)
      : [...selected, skill];
    
    onToggle(newSkills);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {TECH_STACK.map(tech => (
        <button
          key={tech}
          type="button" // Boa prática em 2026 para evitar submits acidentais
          onClick={() => toggleSkill(tech)}
          className={`p-4 rounded-2xl border-2 transition-all flex items-center justify-between font-bold ${
            selected.includes(tech) 
            ? 'border-blue-600 bg-blue-50 text-blue-700' 
            : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <Code2 size={18} /> {tech}
          </div>
          {selected.includes(tech) && <CheckCircle2 size={18} className="text-blue-600" />}
        </button>
      ))}
    </div>
  );
}