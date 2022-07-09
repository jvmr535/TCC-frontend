import React, { useCallback } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { IQuizAnswers } from '../../interfaces';

interface IAnswerSetter{
  quizAnswers: Array<IQuizAnswers>;
  setQuizAnswers: Function;
  exerciseId: string;
  page: number;
}

const QuizAnswers: React.FC<IAnswerSetter> = ({
  quizAnswers, 
  setQuizAnswers, 
  exerciseId,
  page
}) => {
  
  const handleChange = (event: any) => {
    const index = quizAnswers.map((quizAnswer) => quizAnswer.exercise).indexOf(exerciseId);
    quizAnswers[index].answer = event.target.value; 
    setQuizAnswers([...quizAnswers]);
    console.log(quizAnswers)
  }

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel value="A" control={<Radio />} label="A" />
        <FormControlLabel value="B" control={<Radio />} label="B" />
        <FormControlLabel value="C" control={<Radio />} label="C" />
        <FormControlLabel value="D" control={<Radio />} label="D" />
        <FormControlLabel value="E" control={<Radio />} label="E" />
      </RadioGroup>
    </FormControl>
  );
}

export default QuizAnswers;