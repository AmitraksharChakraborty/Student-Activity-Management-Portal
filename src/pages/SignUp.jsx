import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  Paper,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Sign Up
        </Typography>
        <form>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              required
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField fullWidth label="Email" variant="outlined" required />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField fullWidth label="Roll No" variant="outlined" required />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Department"
              variant="outlined"
              required
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField fullWidth label="Batch" variant="outlined" required />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              variant="outlined"
              required
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              type="password"
              label="Confirm Password"
              variant="outlined"
              required
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="role-select-label">Role</InputLabel>
              <Select
                labelId="role-select-label"
                value={role}
                onChange={handleRoleChange}
                label="Role"
              >
                <MenuItem value="Student">Student</MenuItem>
                <MenuItem value="Teacher">Teacher</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box textAlign="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mr: 2 }}
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default Signup;
