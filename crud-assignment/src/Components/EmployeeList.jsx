import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployListing = () => {
  const [employeeData, setemployeeData] = useState(null);
  const navigate = useNavigate();

  const EditDetails = (id) => {
    navigate("/edit/" + id);
  };
  const DeleteDetails = (id) => {
    if (window.confirm("Do you want to delete ?")) {
      axios
        .delete(`http://localhost:3010/employee/${id}`)
        .then((resolve) => {
          alert("Deleted successfully");
          getItem();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const ViewDetails = (id) => {
    navigate("/view/" + id);
  };

  const getItem = () => {
    axios
      .get("http://localhost:3010/employee")
      .then((response) => {
        setemployeeData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getItem();
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>List of company employees</h2>
        </div>
        <div className="card-body">
          <div className="add-btn">
            <Link to="/add" className="btn btn-success">
              ADD NEW (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>User email</td>
                <td>Mobile</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {employeeData &&
                employeeData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          EditDetails(item.id);
                        }}
                      >
                        EDIT
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          DeleteDetails(item.id);
                        }}
                      >
                        DELETE
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          ViewDetails(item.id);
                        }}
                      >
                        VIEW
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployListing;
