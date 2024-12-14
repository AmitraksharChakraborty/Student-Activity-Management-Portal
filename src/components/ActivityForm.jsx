import { useState, useContext } from 'react';
import { TextField, Button, Box, Menu, MenuItem } from '@mui/material';
import { MyContext } from '../Hooks/MyContext';

function ActivityForm() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activityType, setActivityType] = useState('');
  const [formData, setFormData] = useState('');
  const { value, setValue } = useContext(MyContext); // Destructure `value` for current state

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuSelect = (type) => {
    setActivityType(type);
    handleMenuClose();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData || !activityType) {
      alert('Please fill in all fields'); // Validation check
      return;
    }

    const newActivity = {
      activity: formData,
      type: activityType,
    };

    // Update value in context
    setValue([...value, newActivity]);

    // Log only after submission
    console.log('Updated Activities:', [...value, newActivity]);

    // Reset form fields
    setFormData('');
    setActivityType('');
  };

  return (
    <Box
      component="form"
      sx={{ mt: 3 }}
      onSubmit={handleFormSubmit} // Attach onSubmit to the form container
    >
      <TextField
        label="Activity"
        fullWidth
        required
        sx={{ mt: 2 }}
        value={formData}
        onChange={(e) => setFormData(e.target.value)} // Correct the onChange handler
      />
      <Button onClick={handleMenuOpen} variant="outlined" sx={{ mt: 2 }}>
        {activityType || 'Select Type'}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleMenuSelect('Co-curricular')}>
          Co-curricular
        </MenuItem>
        <MenuItem onClick={() => handleMenuSelect('Extra-curricular')}>
          Extra-curricular
        </MenuItem>
      </Menu>
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Add Activity
      </Button>
    </Box>
  );
}

export default ActivityForm;
