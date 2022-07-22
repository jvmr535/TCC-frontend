import React from "react";
import SubjectCard from "./SubjectCard";

import EnglishIcon from "./SubjectIcons/EnglishIcon";
import HumanSciencesIcon from "./SubjectIcons/HumanSciencesIcon";
import MathematicsIcon from "./SubjectIcons/MathematicsIcon";
import NatureSciencesIcon from "./SubjectIcons/NatureSciencesIcon";
import PortugueseIcon from "./SubjectIcons/PortugueseIcon";
import SpanishIcon from "./SubjectIcons/SpanishIcon";

import { SubjectContainer } from "./styles";
import { IIconCustomProps, ISubjectCard } from "../../interfaces";

const Subjects: React.FC<IIconCustomProps> = ({
  colorHex,
  width,
  height,
  isQuizGeneration,
  isQuizDetails,
  isQuizResults,
  minCardWidth,
  minCardHeight,
}) => {
  const subjects: Array<ISubjectCard> = [
    {
      imageSource: (
        <EnglishIcon colorHex={colorHex} width={width} height={height} />
      ),
      subjectNameInPortuguese: "Inglês",
      subjectNameInEnglish: "english",
    },
    {
      imageSource: (
        <SpanishIcon colorHex={colorHex} width={width} height={height} />
      ),
      subjectNameInPortuguese: "Espanhol",
      subjectNameInEnglish: "spanish",
    },
    {
      imageSource: (
        <PortugueseIcon colorHex={colorHex} width={width} height={height} />
      ),
      subjectNameInPortuguese: "Português",
      subjectNameInEnglish: "portuguese",
    },
    {
      imageSource: (
        <HumanSciencesIcon colorHex={colorHex} width={width} height={height} />
      ),
      subjectNameInPortuguese: "Ciências humanas",
      subjectNameInEnglish: "humanSciences",
    },
    {
      imageSource: (
        <NatureSciencesIcon colorHex={colorHex} width={width} height={height} />
      ),
      subjectNameInPortuguese: "Ciências da natureza",
      subjectNameInEnglish: "natureSciences",
    },
    {
      imageSource: (
        <MathematicsIcon colorHex={colorHex} width={width} height={height} />
      ),
      subjectNameInPortuguese: "Matemática",
      subjectNameInEnglish: "mathematics",
    },
  ];

  return (
    <SubjectContainer>
      {subjects.map((subject) => (
        <SubjectCard
          subjectNameInPortuguese={subject.subjectNameInPortuguese}
          subjectNameInEnglish={subject.subjectNameInEnglish}
          imageSource={subject.imageSource}
          isQuizGeneration={isQuizGeneration}
          isQuizDetails={isQuizDetails}
          isQuizResults={isQuizResults}
          minCardWidth={minCardWidth}
          minCardHeight={minCardHeight}
        />
      ))}
    </SubjectContainer>
  );
};

export default Subjects;
