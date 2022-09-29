import React, { useEffect, useState } from "react";
import { FormControl, Input, MenuItem, Select } from "@mui/material";

import { AddExercisesContainer } from "./styles";
import { IExercise } from "../../interfaces";

const AddExercises: React.FC = () => {
  const [exercise, setExercise] = useState<IExercise>({
    reference: "",
    exerciseFileToBase64: "",
    rightAnswer: "",
    subject: "",
  });

  useEffect(() => {
    console.log(exercise);
  }, [exercise]);

  const subjects = [
    { subjectValue: "english", nameInPortuguese: "Inglês" },
    { subjectValue: "humanSciences", nameInPortuguese: "Ciências Humanas" },
    { subjectValue: "mathematics", nameInPortuguese: "Matemática" },
    {
      subjectValue: "natureSciences",
      nameInPortuguese: "Ciências da Natureza",
    },
    { subjectValue: "portuguese", nameInPortuguese: "Português" },
    { subjectValue: "spanish", nameInPortuguese: "Espanhol" },
  ];

  const answersOptions = ["A", "B", "C", "D", "E"];

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    console.log(name);
    setExercise((exercise) => ({
      ...exercise,
      [name]: value,
    }));
  };

  const handleChangeInputImage = (event: any) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        resolve(reader.result);
        const base64 = reader.result
          ?.toString()
          .split("data:image/png;base64,")[1];
        setExercise({
          exerciseFileToBase64: base64,
          reference: event.target.files[0].name,
          rightAnswer: "",
          subject: "",
        });
      };
      reader.onerror = (error) => reject(error);
    });

  return (
    <AddExercisesContainer>
      <Input
        type="file"
        name="Escolha uma imagem de exercício"
        onChange={handleChangeInputImage}
      />

      <FormControl>
        <Select
          value={exercise.subject}
          placeholder={exercise.subject}
          name="subject"
          onChange={handleChange}
          displayEmpty
          defaultValue=""
        >
          <MenuItem value=""></MenuItem>
          {subjects.map((subject) => (
            <MenuItem value={subject.subjectValue}>
              {subject.nameInPortuguese}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <Select
          value={exercise.rightAnswer}
          placeholder={exercise.rightAnswer}
          name="rightAnswer"
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value=""></MenuItem>
          {answersOptions.map((answersOption) => (
            <MenuItem value={answersOption}>{answersOption}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </AddExercisesContainer>
  );
};

export default AddExercises;
