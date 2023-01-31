import React, { useState } from "react";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import { AddExercisesContainer } from "./styles";
import { IExercise } from "../../interfaces";

const AddExercises: React.FC = () => {
  const [exercise, setExercise] = useState<IExercise>({
    reference: "",
    exerciseFileToBase64: "",
    rightAnswer: "",
    subject: "",
  });

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
        sx={{ marginBottom: 2 }}
      />

      <FormControl sx={{ marginBottom: 2 }}>
        <InputLabel id="demo-simple-select-helper-label">
          Área do conhecimento
        </InputLabel>
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

      <FormControl sx={{ marginBottom: 2 }}>
        <InputLabel id="demo-simple-select-helper-label">
          Alternativa correta
        </InputLabel>
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

      <Button sx={{ color: "black", borderColor: "black" }} variant="outlined">
        Registrar questão
      </Button>
    </AddExercisesContainer>
  );
};

export default AddExercises;
