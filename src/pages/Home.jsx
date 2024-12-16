import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
  Button,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/login');
  }
  return (
    <Container>
      {/* Page Title */}
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Student Management Portal
        </Typography>
        <Typography variant="subtitle1">
          Manage Co-curricular and Extra-curricular Activities
        </Typography>
        {/* Login and Start Now Buttons */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={handleClick}
          >
            Login
          </Button>
          <Button variant="contained" color="secondary" size="large">
            Start Now
          </Button>
        </Stack>
      </Box>

      {/* Section 1: Activities Overview */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Sports Activities
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Track student participation in various sports events and manage
              schedules.
            </Typography>
            <Button variant="contained" color="primary">
              View Sports
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Arts & Crafts
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Showcase student artwork and plan creative workshops.
            </Typography>
            <Button variant="contained" color="secondary">
              Explore Arts
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Coding & Hackathons
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Manage student meetings with the mentors.
            </Typography>
            <Button variant="contained" color="success">
              Coding Events
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Section 2: Upcoming Events */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Upcoming Events
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={1} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Annual Sports Day
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Date: 25th December | Time: 10:00 AM
              </Typography>
              <Button size="small" variant="outlined" color="primary">
                View Details
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={1} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Hackathon Night
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Date: 30th December | Time: 6:00 PM
              </Typography>
              <Button size="small" variant="outlined" color="secondary">
                View Details
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={1} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Art Exhibition
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Date: 5th January | Time: 11:00 AM
              </Typography>
              <Button size="small" variant="outlined" color="success">
                View Details
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Section 3: Quick Actions
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Quick Actions
        </Typography>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" size="large">
              Add Student
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" size="large">
              Create Event
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="success" size="large">
              Generate Report
            </Button>
          </Grid>
        </Grid>
      </Box> */}
    </Container>
  );
}

export default Home;
