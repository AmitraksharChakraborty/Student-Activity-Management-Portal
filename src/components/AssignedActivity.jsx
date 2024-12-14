import { List, ListItem, ListItemText, Paper } from '@mui/material';

const AssignedActivities = ({ assignedActivities }) => {
  return (
    <Paper sx={{ mt: 3, p: 2 }}>
      <h2>Assigned Activities</h2>
      <List>
        {assignedActivities.map((activity, index) => (
          <ListItem key={index}>
            <ListItemText primary={activity} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default AssignedActivities;
