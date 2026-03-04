import { Sparkles, ArrowRight, BookOpen } from "lucide-react";

export const RecommendationPanel = ({ skill, score }: { skill: string, score: number }) => (
  <div className="mt-12 p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-white shadow-2xl">
    <div className="flex items-center gap-2 mb-4 text-blue-200 uppercase text-xs font-black tracking-widest">
      <Sparkles size={16} />
      Recomendação da IA
    </div>
    
    <h3 className="text-3xl font-bold mb-2">Seu próximo passo: {skill}</h3>
    <p className="text-blue-100 mb-8 max-w-md">
      Nossa inteligência analisou seu perfil sênior e identificou que esta tecnologia é o complemento ideal para sua carreira em 2026.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg"><BookOpen size={20}/></div>
          <span className="font-bold">Probabilidade de Sucesso</span>
        </div>
        <span className="text-2xl font-black">{score}%</span>
      </div>
      
      <button className="bg-white text-blue-700 p-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
        Ver Trilha de Estudo <ArrowRight size={20} />
      </button>
    </div>
  </div>
);