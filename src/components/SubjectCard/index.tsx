import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";

export interface ISubjectCard {
  subjectNameInPortuguese: string;
  subjectNameInEnglish: string;
  imageSource: string;
}

const SubjectCard: React.FC<ISubjectCard> = ({
  subjectNameInPortuguese,
  subjectNameInEnglish,
  imageSource,
}) => {
  return (
    <Card>
      <CardHeader title={subjectNameInPortuguese} />
      <CardContent>
        <CardMedia
          component="img"
          height="90"
          image={imageSource}
          alt="Paella dish"
        />
      </CardContent>
      <CardActions>
        <Button size="small">Detalhes</Button>
      </CardActions>
    </Card>
  );
};

export default SubjectCard;
