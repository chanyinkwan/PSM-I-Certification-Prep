import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import ChapterList from './components/ChapterList';
import QuizMode from './components/QuizMode';
import { getProgress } from './services/storage';
import { UserProgress } from './types';

type View = 'dashboard' | 'chapters' | 'quiz';

const App: React.FC = () => {
  const [view, setView] = useState<View>('dashboard');
  const [activeQuizIds, setActiveQuizIds] = useState<number[]>([]);
  const [progress, setProgress] = useState<Record<number, UserProgress>>({});

  useEffect(() => {
    // Load progress on mount
    const p = getProgress();
    setProgress(p);
  }, [view]); // Reload when view changes to capture updates after a quiz

  const startQuiz = (ids: number[]) => {
    if (ids.length === 0) {
        alert("No questions available for this selection!");
        return;
    }
    setActiveQuizIds(ids);
    setView('quiz');
  };

  return (
    <div className="font-sans antialiased text-slate-900">
      {view === 'dashboard' && (
        <Dashboard 
            progress={progress} 
            onStartQuiz={startQuiz} 
            onNavigateChapter={() => setView('chapters')} 
        />
      )}
      
      {view === 'chapters' && (
        <ChapterList 
            progress={progress} 
            onBack={() => setView('dashboard')} 
            onStartQuiz={startQuiz} 
        />
      )}

      {view === 'quiz' && (
        <QuizMode 
            questionIds={activeQuizIds} 
            onComplete={() => setView('dashboard')} 
        />
      )}
    </div>
  );
};

export default App;
