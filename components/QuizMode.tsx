import React, { useState, useMemo, useEffect } from 'react';
import { Question } from '../types';
import { QUESTIONS } from '../data';
import { saveProgress } from '../services/storage';
import { XCircle, CheckCircle, ChevronRight, AlertCircle, X } from 'lucide-react';

interface Props {
  questionIds: number[];
  onComplete: () => void;
}

const QuizMode: React.FC<Props> = ({ questionIds, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  // Load current question object
  const currentQId = questionIds[currentIndex];
  const question = QUESTIONS.find((q) => q.id === currentQId);

  // Shuffle options ONLY when the question changes
  const shuffledOptions = useMemo(() => {
    if (!question) return [];
    const opts = [...question.options];
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opts[i], opts[j]] = [opts[j], opts[i]];
    }
    return opts;
  }, [question]);

  if (!question) return <div>Error loading question.</div>;

  const handleOptionClick = (opt: string) => {
    if (isSubmitted) return;

    if (question.type === 'multi_select') {
      if (selectedOptions.includes(opt)) {
        setSelectedOptions(selectedOptions.filter((o) => o !== opt));
      } else {
        setSelectedOptions([...selectedOptions, opt]);
      }
    } else {
      setSelectedOptions([opt]);
    }
  };

  const handleSubmit = () => {
    if (selectedOptions.length === 0) return;

    // Strict Grading Logic
    // Sort both arrays to ensure order doesn't matter
    const userAns = [...selectedOptions].sort();
    const correctAns = [...question.correct_answers].sort();
    
    const isCorrect = JSON.stringify(userAns) === JSON.stringify(correctAns);

    saveProgress(question.id, isCorrect);
    
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentIndex < questionIds.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOptions([]);
      setIsSubmitted(false);
      setFeedback(null);
    } else {
      onComplete();
    }
  };

  const progressPercent = ((currentIndex + 1) / questionIds.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header / Progress */}
        <div className="mb-6 flex justify-between items-center">
            <button onClick={onComplete} className="text-slate-400 hover:text-slate-600">
                <X className="w-6 h-6" />
            </button>
            <div className="w-full mx-4 bg-slate-200 h-2 rounded-full">
                <div 
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-300" 
                    style={{width: `${progressPercent}%`}}
                />
            </div>
            <span className="text-slate-500 font-medium text-sm whitespace-nowrap">
                {currentIndex + 1} / {questionIds.length}
            </span>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mb-6">
            <div className="mb-2">
                <span className="inline-block px-2 py-1 rounded bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wide">
                    {question.category}
                </span>
                {question.type === 'multi_select' && (
                    <span className="ml-2 inline-block px-2 py-1 rounded bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wide">
                        Select {question.correct_answers.length}
                    </span>
                )}
            </div>
            
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6 leading-relaxed">
                {question.question}
            </h2>

            <div className="space-y-3">
                {shuffledOptions.map((opt, idx) => {
                    const isSelected = selectedOptions.includes(opt);
                    const isActualCorrect = question.correct_answers.includes(opt);
                    
                    let styleClass = "border-slate-200 hover:bg-slate-50 hover:border-indigo-300";
                    if (isSelected) styleClass = "border-indigo-500 bg-indigo-50 text-indigo-700 ring-1 ring-indigo-500";
                    
                    if (isSubmitted) {
                        if (isActualCorrect) {
                            styleClass = "border-emerald-500 bg-emerald-50 text-emerald-800 ring-1 ring-emerald-500";
                        } else if (isSelected && !isActualCorrect) {
                            styleClass = "border-red-300 bg-red-50 text-red-800 opacity-60";
                        } else {
                            styleClass = "border-slate-100 bg-slate-50 opacity-50";
                        }
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => handleOptionClick(opt)}
                            disabled={isSubmitted}
                            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 text-base md:text-lg flex items-start ${styleClass}`}
                        >
                            <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center
                                ${isSelected ? (isSubmitted && !isActualCorrect ? 'border-red-500' : 'border-current') : 'border-slate-300'}`}
                            >
                                {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-current" />}
                            </div>
                            <span>{opt}</span>
                        </button>
                    );
                })}
            </div>
        </div>

        {/* Feedback Area */}
        {isSubmitted && (
            <div className={`rounded-xl p-6 mb-24 animate-fade-in ${feedback === 'correct' ? 'bg-emerald-100 text-emerald-900' : 'bg-red-100 text-red-900'}`}>
                <div className="flex items-center mb-2">
                    {feedback === 'correct' ? <CheckCircle className="w-6 h-6 mr-2" /> : <AlertCircle className="w-6 h-6 mr-2" />}
                    <span className="font-bold text-lg">
                        {feedback === 'correct' ? 'Excellent!' : 'Incorrect'}
                    </span>
                </div>
                {feedback === 'incorrect' && (
                    <p>
                        The correct answer{question.correct_answers.length > 1 ? 's are' : ' is'}: 
                        <br/>
                        <span className="font-semibold">{question.correct_answers.join(", ")}</span>
                    </p>
                )}
            </div>
        )}

        {/* Footer Actions */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 flex justify-center">
            <div className="w-full max-w-2xl flex justify-end">
                {!isSubmitted ? (
                    <button 
                        onClick={handleSubmit}
                        disabled={selectedOptions.length === 0}
                        className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors w-full md:w-auto"
                    >
                        Submit Answer
                    </button>
                ) : (
                    <button 
                        onClick={handleNext}
                        className="bg-slate-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors flex items-center w-full md:w-auto justify-center"
                    >
                        {currentIndex === questionIds.length - 1 ? 'Finish Quiz' : 'Next Question'}
                        <ChevronRight className="ml-2 w-5 h-5" />
                    </button>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default QuizMode;
