import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ViewItem = () => {
  const { empid } = useParams();
  const [employeeData, setemployeeData] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3010/employee/${empid}`)
      .then((response) => {
        setemployeeData(response.data);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [empid]);

  return (
    <div>
      {!loader ? (
        <>
          <h5>Name of Employee : {employeeData.name}</h5>
          <h5>Mobile Number : {employeeData.mobile}</h5>
          <h5>Email Id : {employeeData.email}</h5>
          <Link className="btn btn-danger" to="/">
            Back to Home Page
          </Link>
        </>
      ) : null}
    </div>
  );
};

export default ViewItem;
