import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const StudentProfile = ({ student }) => {
  return (
    <Card sx={{ display: 'flex', mb: 3 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={student.image}
        alt={student.name}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography component="div" variant="h5">
            {student.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {student.department}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default StudentProfile;
