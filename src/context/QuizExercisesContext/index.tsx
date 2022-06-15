import React, { useContext, useState } from "react";

interface IQuizExercisesContext {
  _id: string;
}

const QuizExercisesWrapper = React.createContext<
  IQuizExercisesContext[] | null
>(null);
const QuizExercisesUpdaterWrapper = React.createContext<any | null>(null);

const useQuizExercisesContext = () => {
  const contextValue = useContext(QuizExercisesWrapper);
  const contextUpdater = useContext(QuizExercisesUpdaterWrapper);

  return [contextValue, contextUpdater];
};

const QuizExercisesContext = ({ children }: { children: any }) => {
  const [contextObject, setContextObject] = useState<IQuizExercisesContext[]>(
    []
  );

  const updateContextObject = (value: any) => {
    setContextObject(value);
  };

  return (
    <QuizExercisesWrapper.Provider value={contextObject}>
      <QuizExercisesUpdaterWrapper.Provider value={updateContextObject}>
        {children}
      </QuizExercisesUpdaterWrapper.Provider>
    </QuizExercisesWrapper.Provider>
  );
};

const quizExercisesContext = { useQuizExercisesContext, QuizExercisesContext };

export default quizExercisesContext;
