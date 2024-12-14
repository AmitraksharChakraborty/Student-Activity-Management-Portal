import { MyProvider } from './Hooks/MyContext';
import StudentDashboard from './pages/Student';

function App() {
  return (
    <MyProvider>
      <StudentDashboard />
    </MyProvider>
  );
}

export default App;
