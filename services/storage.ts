import { MasteryState, UserProgress } from '../types';

const STORAGE_KEY = 'scrum_master_prep_progress';

export const getProgress = (): Record<number, UserProgress> => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
};

export const saveProgress = (id: number, isCorrect: boolean) => {
  const currentData = getProgress();
  const existing = currentData[id] || {
    questionId: id,
    state: MasteryState.New_Mistake,
    isMistake: false,
    lastAnswered: 0,
  };

  let newState = existing.state;
  let newIsMistake = existing.isMistake;

  if (isCorrect) {
    // Promotion logic
    // If it was a mistake and they got it right, it resets to 0 (New) but clears mistake flag
    // If it was normal flow, it promotes
    if (existing.isMistake) {
        newState = MasteryState.New_Mistake;
        newIsMistake = false;
    } else {
        newState = Math.min(existing.state + 1, MasteryState.Mastered);
    }
  } else {
    // Demotion logic
    newState = MasteryState.New_Mistake;
    newIsMistake = true;
  }

  const updated: UserProgress = {
    questionId: id,
    state: newState,
    isMistake: newIsMistake,
    lastAnswered: Date.now(),
  };

  const newData = { ...currentData, [id]: updated };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  return newData;
};

export const getMistakes = (): number[] => {
  const data = getProgress();
  return Object.values(data)
    .filter((p) => p.isMistake)
    .map((p) => p.questionId);
};

export const resetProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
}
