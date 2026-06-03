import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    salary: ""
  });

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5001/api/employees"
      );
      setEmployees(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleSubmit = async () => {
    try {
      if (editingId) {
        await axios.put(
          `http://localhost:5001/api/employees/${editingId}`,
          form
        );
      } else {
        await axios.post(
          "http://localhost:5001/api/employees",
          form
        );
      }

      setForm({
        name: "",
        email: "",
        department: "",
        salary: ""
      });

      setEditingId(null);
      fetchEmployees();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5001/api/employees/${id}`
      );
      fetchEmployees();
    } catch (err) {
      console.log(err);
    }
  };

  const editEmployee = (emp) => {
    setForm({
      name: emp.name,
      email: emp.email,
      department: emp.department,
      salary: emp.salary
    });

    setEditingId(emp._id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management System</h1>

      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <br /><br />

      <input
        type="text"
        placeholder="Department"
        value={form.department}
        onChange={(e) =>
          setForm({ ...form, department: e.target.value })
        }
      />

      <br /><br />

      <input
        type="number"
        placeholder="Salary"
        value={form.salary}
        onChange={(e) =>
          setForm({ ...form, salary: e.target.value })
        }
      />

      <br /><br />

      <button onClick={handleSubmit}>
        {editingId ? "Update Employee" : "Add Employee"}
      </button>

      {editingId && (
        <button
          onClick={() => {
            setEditingId(null);
            setForm({
              name: "",
              email: "",
              department: "",
              salary: ""
            });
          }}
          style={{ marginLeft: "10px" }}
        >
          Cancel
        </button>
      )}

      <hr />

      <h2>Employees</h2>

      {employees.length === 0 ? (
        <p>No employees found</p>
      ) : (
        employees.map((emp) => (
          <div
            key={emp._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px"
            }}
          >
            <h3>{emp.name}</h3>
            <p>Email: {emp.email}</p>
            <p>Department: {emp.department}</p>
            <p>Salary: ₹{emp.salary}</p>

            <button
              onClick={() => editEmployee(emp)}
            >
              Edit
            </button>

            <button
              onClick={() => deleteEmployee(emp._id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;