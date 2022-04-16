import React, { useState, useEffect } from "react";
import api from "../../../services/api";

import {
  SubjectCardContainer,
  SubjectCardHeader,
  SubjectButton,
  SubjectCardActions,
  SubjectCardContent,
} from "./styles";

export interface ISubjectCard {
  subjectNameInPortuguese: string;
  subjectNameInEnglish: string;
  imageSource: React.ReactNode;
}

const SubjectCard: React.FC<ISubjectCard> = ({
  subjectNameInPortuguese,
  subjectNameInEnglish,
  imageSource,
}) => {
  const [exerciseAmount, setExerciseAmount] = useState<number | null>(null);

  useEffect(() => {
    const getExerciseAmount = async () => {
      try {
        const response = await api.getExerciseAmount(subjectNameInEnglish);
        setExerciseAmount(response.body);
      } catch (error) {
        console.log(error);
      }
    };
    getExerciseAmount();
  }, [exerciseAmount, subjectNameInEnglish]);

  return (
    <SubjectCardContainer>
      <SubjectCardHeader title={subjectNameInPortuguese} />
      <SubjectCardContent>{imageSource}</SubjectCardContent>
      <SubjectCardActions>
        <SubjectButton size="small">Detalhes</SubjectButton>
      </SubjectCardActions>
    </SubjectCardContainer>
  );
};

export default SubjectCard;
