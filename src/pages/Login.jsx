import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function signupClick() {
    navigate('/sign');
  }
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Login
        </Typography>
        <form>
          <Box sx={{ mb: 2 }}>
            <TextField fullWidth label="Email" variant="outlined" required />
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
          <Box textAlign="center" sx={{ mt: 3 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mr: 2 }}
            >
              Login
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="error"
              size="large"
              onClick={signupClick}
            >
              Sign Up
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
