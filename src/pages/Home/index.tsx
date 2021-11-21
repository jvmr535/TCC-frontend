import React from "react";
import SubjectCard from "../../components/SubjectCard";
import subjects from "../../utils/subjects";

import { Container } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Container>
      {subjects.map((subject) => (
        <SubjectCard
          subjectNameInPortuguese={subject.subjectNameInPortuguese}
          subjectNameInEnglish={subject.subjectNameInEnglish}
          imageSource={subject.imageSource}
        />
      ))}
    </Container>
  );
};

export default Home;
