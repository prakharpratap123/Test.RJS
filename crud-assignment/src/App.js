import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./Components/EmployeeList";
import AddItem from "./Components/AddItem";
import EditItem from "./Components/EditItem";
import ViewItem from "./Components/ViewItem";
function App() {
  return (
    <div className="App">
      <h1 className="heading">
        <i>QLORON INTERVIEW ASSIGNMENT</i>
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/add" element={<AddItem />}></Route>
          <Route path="/edit/:empid" element={<EditItem />}></Route>
          <Route path="/view/:empid" element={<ViewItem />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
