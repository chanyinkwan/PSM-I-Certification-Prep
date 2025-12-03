import React from 'react';
import { QUESTIONS } from '../data';
import { MasteryState, UserProgress } from '../types';
import { ChevronLeft, PlayCircle } from 'lucide-react';

interface Props {
  progress: Record<number, UserProgress>;
  onBack: () => void;
  onStartQuiz: (qIds: number[]) => void;
}

const ChapterList: React.FC<Props> = ({ progress, onBack, onStartQuiz }) => {
  // Group questions by category
  const categories = Array.from(new Set(QUESTIONS.map((q) => q.category)));

  const getCategoryStats = (cat: string) => {
    const questions = QUESTIONS.filter((q) => q.category === cat);
    const total = questions.length;
    const stats = { 0: 0, 1: 0, 2: 0, 3: 0 };

    questions.forEach((q) => {
      const p = progress[q.id];
      const state = p ? p.state : MasteryState.New_Mistake;
      stats[state]++;
    });

    return { total, stats, questions };
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <button
        onClick={onBack}
        className="flex items-center text-slate-600 mb-6 hover:text-slate-900 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 mr-1" /> Back to Dashboard
      </button>

      <h1 className="text-3xl font-bold text-slate-900 mb-8">Practice by Chapter</h1>

      <div className="grid gap-6">
        {categories.map((cat) => {
          const { total, stats, questions } = getCategoryStats(cat);
          
          // Calculate widths for the segmented bar
          const getWidth = (count: number) => (count / total) * 100;

          return (
            <div key={cat} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-slate-800">{cat}</h2>
                <button
                  onClick={() => onStartQuiz(questions.map(q => q.id))}
                  className="flex items-center text-indigo-600 font-medium hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Practice
                </button>
              </div>

              <div className="flex h-4 w-full rounded-full overflow-hidden bg-slate-100">
                <div style={{ width: `${getWidth(stats[3])}%` }} className="bg-emerald-500" title="Mastered" />
                <div style={{ width: `${getWidth(stats[2])}%` }} className="bg-yellow-400" title="Familiar" />
                <div style={{ width: `${getWidth(stats[1])}%` }} className="bg-red-400" title="Known" />
                <div style={{ width: `${getWidth(stats[0])}%` }} className="bg-slate-300" title="New/Mistake" />
              </div>
              
              <div className="flex justify-between mt-2 text-xs text-slate-500 font-medium">
                <span>{stats[3]} Mastered</span>
                <span>{total} Total Questions</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChapterList;
