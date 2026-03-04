import { useState } from 'react';
import SkillSelector from './components/SkillSelector';
import { RecommendationPanel } from './components/RecommendationPanel'; // Vamos criar este arquivo
import { Sparkles, Loader2 } from 'lucide-react';

function App() {
  // Estado para armazenar as skills selecionadas
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  // Estado para o resultado da IA
  const [result, setResult] = useState<{skill: string, score: number} | null>(null);
  // Estado de carregamento (simulando o TensorFlow pensando)
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    if (selectedSkills.length === 0) return alert("Selecione ao menos uma tecnologia!");

    setIsAnalyzing(true);
    
    // Simulando o processamento do TensorFlow.js que faremos no futuro
    setTimeout(() => {
      setResult({ skill: "TensorFlow.js", score: 98 });
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-black tracking-tighter text-slate-900">
          DevPath <span className="text-blue-600">AI</span>
        </h1>
        <p className="text-slate-500 mt-2 font-medium">
          Selecione suas tecnologias e deixe a IA traçar seu próximo passo.
        </p>
      </header>

      <main className="w-full max-w-4xl space-y-8">
        {/* Passamos o estado e o setter para o SkillSelector se comunicar com o App */}
        <section className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
          <SkillSelector selected={selectedSkills} onToggle={setSelectedSkills} />
          
          <div className="mt-8 flex justify-center">
            <button 
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="group relative bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-all disabled:opacity-50"
            >
              {isAnalyzing ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <Sparkles size={20} className="text-amber-400 group-hover:scale-125 transition-transform" />
              )}
              {isAnalyzing ? "IA Analisando..." : "Gerar Minha Trilha"}
            </button>
          </div>
        </section>

        {/* O painel de recomendação só aparece quando houver um resultado */}
        {result && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <RecommendationPanel skill={result.skill} score={result.score} />
          </div>
        )}
      </main>
      
      <footer className="mt-auto pt-12 text-slate-400 text-sm font-medium">
        MBA Applied AI Engineering • 2026
      </footer>
    </div>
  );
}

export default App;