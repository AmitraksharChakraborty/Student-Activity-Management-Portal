import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  AppBar,
  Toolbar,
  Box,
  Card,
  CardContent,
} from '@mui/material';
import ActivityForm from '../components/ActivityForm';
import ActivityTable from '../components/ActivityTable';
import AssignedActivities from '../components/AssignedActivity';
import StudentProfile from '../components/StudentProfile';

const StudentDashboard = () => {
  const [activities, setActivities] = useState([]);
  const [assignedActivities, setAssignedActivities] = useState([
    'Math Project',
    'Science Fair',
  ]);

  const student = {
    name: 'John Doe',
    department: 'Computer Science',
    image: 'https://via.placeholder.com/150',
  };

  const addActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  return (
    <Box>
      {/* AppBar for dashboard header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Student Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 2 }}>
              <CardContent>
                <StudentProfile student={student} />
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={8}>
            <Card sx={{ boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Add New Activity
                </Typography>
                <ActivityForm addActivity={addActivity} />
              </CardContent>
            </Card>
          </Grid>

          {/* Full-width Activity Table */}
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Activities List
                </Typography>
                <ActivityTable activities={activities} />
              </CardContent>
            </Card>
          </Grid>

          {/* Full-width Assigned Activities */}
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Assigned Activities
                </Typography>
                <AssignedActivities assignedActivities={assignedActivities} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StudentDashboard;
