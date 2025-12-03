export type QuestionType = "multiple_choice" | "multi_select" | "true_false";

export interface Question {
  id: number;
  type: QuestionType;
  category: string;
  question: string;
  options: string[];
  correct_answers: string[];
}

export enum MasteryState {
  New_Mistake = 0,
  Known = 1,
  Familiar = 2,
  Mastered = 3,
}

export interface UserProgress {
  questionId: number;
  state: MasteryState;
  isMistake: boolean;
  lastAnswered: number; // Timestamp
}

export interface GlobalStats {
  totalQuestions: number;
  byState: {
    [key in MasteryState]: number;
  };
  mistakeCount: number;
}
