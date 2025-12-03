import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { BookOpen, Zap, AlertTriangle, RefreshCw } from 'lucide-react';
import { QUESTIONS } from '../data';
import { MasteryState, UserProgress } from '../types';

interface Props {
  progress: Record<number, UserProgress>;
  onStartQuiz: (qIds: number[]) => void;
  onNavigateChapter: () => void;
}

const COLORS = {
  [MasteryState.New_Mistake]: '#1e293b', // Slate 800
  [MasteryState.Known]: '#f87171', // Red 400
  [MasteryState.Familiar]: '#facc15', // Yellow 400
  [MasteryState.Mastered]: '#10b981', // Emerald 500
};

const Dashboard: React.FC<Props> = ({ progress, onStartQuiz, onNavigateChapter }) => {
  const [showMistakeModal, setShowMistakeModal] = useState(false);

  // Calc Stats
  const stats = {
    [MasteryState.New_Mistake]: 0,
    [MasteryState.Known]: 0,
    [MasteryState.Familiar]: 0,
    [MasteryState.Mastered]: 0,
  };
  
  let mistakeIds: number[] = [];

  QUESTIONS.forEach(q => {
    const p = progress[q.id];
    const state = p ? p.state : MasteryState.New_Mistake;
    stats[state]++;
    if (p && p.isMistake) {
        mistakeIds.push(q.id);
    }
  });

  const chartData = [
    { name: 'Mastered', value: stats[MasteryState.Mastered], color: COLORS[MasteryState.Mastered] },
    { name: 'Familiar', value: stats[MasteryState.Familiar], color: COLORS[MasteryState.Familiar] },
    { name: 'Known', value: stats[MasteryState.Known], color: COLORS[MasteryState.Known] },
    { name: 'New / To Review', value: stats[MasteryState.New_Mistake], color: COLORS[MasteryState.New_Mistake] },
  ];

  const handleQuickPlay = () => {
    // Select 20 random questions not in Mastered state
    const candidates = QUESTIONS.filter(q => {
        const p = progress[q.id];
        return !p || p.state !== MasteryState.Mastered;
    }).map(q => q.id);

    // Shuffle and pick 20
    const shuffled = candidates.sort(() => 0.5 - Math.random());
    onStartQuiz(shuffled.slice(0, 20));
  };

  const handleReviewMistakes = (limit: number) => {
    setShowMistakeModal(false);
    onStartQuiz(mistakeIds.slice(0, limit === -1 ? undefined : limit));
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Scrum Master Prep</h1>
          <p className="text-slate-500">Master the exam with spaced repetition.</p>
        </header>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 space-y-4">
            <h3 className="text-xl font-semibold mb-4">Mastery Breakdown</h3>
            {chartData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2" style={{backgroundColor: item.color}} />
                        <span className="text-slate-600 font-medium">{item.name}</span>
                    </div>
                    <span className="font-bold text-slate-900">{item.value}</span>
                </div>
            ))}
          </div>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Express Mode */}
            <button 
                onClick={handleQuickPlay}
                className="bg-indigo-600 hover:bg-indigo-700 text-white p-6 rounded-xl shadow-sm transition-all flex items-center justify-between group"
            >
                <div className="flex items-center">
                    <div className="p-3 bg-indigo-500 bg-opacity-30 rounded-lg mr-4">
                        <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                        <h3 className="font-bold text-lg">Express Mode</h3>
                        <p className="text-indigo-100 text-sm">20 random questions</p>
                    </div>
                </div>
            </button>

            {/* Chapter Mode */}
            <button 
                onClick={onNavigateChapter}
                className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 p-6 rounded-xl shadow-sm transition-all flex items-center justify-between group"
            >
                <div className="flex items-center">
                    <div className="p-3 bg-slate-100 rounded-lg mr-4">
                        <BookOpen className="w-6 h-6 text-slate-600" />
                    </div>
                    <div className="text-left">
                        <h3 className="font-bold text-lg">Practice by Chapter</h3>
                        <p className="text-slate-500 text-sm">Target specific topics</p>
                    </div>
                </div>
            </button>

            {/* Mistake Review - Conditional */}
            {mistakeIds.length > 0 && (
                <button 
                    onClick={() => setShowMistakeModal(true)}
                    className="md:col-span-2 bg-red-50 border border-red-100 hover:bg-red-100 text-red-900 p-6 rounded-xl shadow-sm transition-all flex items-center justify-center group"
                >
                    <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                    <span className="font-bold">Review {mistakeIds.length} Mistakes</span>
                </button>
            )}
        </div>
      </div>

      {/* Mistake Modal */}
      {showMistakeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-center">Fix Your Mistakes</h3>
                <div className="space-y-3">
                    <button 
                        onClick={() => handleReviewMistakes(5)}
                        className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 rounded-lg font-medium transition-colors"
                    >
                        Quick Fix (5 Questions)
                    </button>
                    <button 
                        onClick={() => handleReviewMistakes(20)}
                        className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 rounded-lg font-medium transition-colors"
                    >
                        Normal Fix (20 Questions)
                    </button>
                    <button 
                        onClick={() => handleReviewMistakes(-1)}
                        className="w-full py-3 px-4 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg font-medium transition-colors"
                    >
                        Fix All ({mistakeIds.length})
                    </button>
                    <button 
                        onClick={() => setShowMistakeModal(false)}
                        className="w-full py-2 text-slate-400 hover:text-slate-600 text-sm mt-2"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
