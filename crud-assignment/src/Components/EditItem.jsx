import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditItem = () => {
  const { empid } = useParams();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [activeStatus, setActiveStatus] = useState(true);

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const employeeData = { id, name, email, mobile, activeStatus };

    axios
      .put(`http://localhost:3010/employee/${empid}`, employeeData)
      .then((resolve) => {
        alert("Saved successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3010/employee/${empid}`)
      .then((response) => {
        setId(response.data.id);
        setName(response.data.name);
        setEmail(response.data.email);
        setMobile(response.data.mobile);
        setActiveStatus(response.data.activeStatus);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [empid]);

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={submitHandler}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Employee Data Edit</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="">ID</label>
                      <input
                        type="text"
                        className="form-control"
                        value={id}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="">NAME</label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="">EMAIL</label>
                      <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="">MOBILE</label>
                      <input
                        type="text"
                        className="form-control"
                        value={mobile}
                        onChange={(e) => {
                          setMobile(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={activeStatus}
                        onChange={(e) => {
                          setActiveStatus(e.target.value);
                        }}
                      />
                      <label htmlFor="">Is Active ?</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditItem;
