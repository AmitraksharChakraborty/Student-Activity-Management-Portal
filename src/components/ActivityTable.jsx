import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { useState, useContext, useEffect } from 'react';
import { MyContext } from '../Hooks/MyContext';

const ActivityTable = () => {
  const [activities, setActivities] = useState([]);
  const { value } = useContext(MyContext);
  useEffect(() => {
    setActivities(value);
  }, [value]);
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Activity</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Approved</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activities.map((activity, index) => (
            <TableRow key={index}>
              <TableCell>{activity.activity}</TableCell>
              <TableCell>{activity.type}</TableCell>
              <TableCell>{activity.approved ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ActivityTable;
