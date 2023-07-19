import logo from './logo.svg';
import './App.css';
import LoginFormik from './components/pure/forms/loginFormik';
import TaskListComponent from './components/container/task_list';
import RegisterFormik from './components/pure/forms/registerFormik';

function App() {
  return (
    <div className="App">
      {/* <TaskListComponent>

      </TaskListComponent> */}
      {/* Ejemplo de uso de formik y yup */}
      {/* <LoginFormik></LoginFormik> */}
      <RegisterFormik></RegisterFormik>
    </div>
  );
}

export default App;
