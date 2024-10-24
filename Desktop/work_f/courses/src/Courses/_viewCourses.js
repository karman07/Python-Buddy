import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../Base/Base";

const initialcourseInfo = {
  name: "",
  description: "",
  price: 0,
  image: "", 
  type: 0,
};

function ViewCourse(props) {
  const [courseInfo, setcourseInfo] = useState(initialcourseInfo);

  useEffect(() => {
    fetchCourseData();
  }, []);

  const fetchCourseData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/courses/` + props.courseId);
      if (response) {
        console.log(response.data);
        setcourseInfo(response.data);
      }
      return;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="Course-view">
      <div className="box">
        <div className="row">
          <div className="col-12">
            <p>
              <span style={{ fontWeight: "bold" }}>Course Name: </span>
              <span>{courseInfo.name}</span>
            </p>
          </div>
          <div className="col-12">
            <p>
              <span style={{ fontWeight: "bold" }}>Price: </span>
              <span>₹{courseInfo.price}</span>
            </p>
          </div>
          <div className="col-12">
            <p>
              <span style={{ fontWeight: "bold" }}>Type: </span>
              <span>{courseInfo.type}</span>
            </p>
          </div>
          <div className="col-12">
            <p>
              <span style={{ fontWeight: "bold" }}>Image: </span>
              {courseInfo.image && (
                <img
                  src={courseInfo.image} 
                  alt={courseInfo.name}
                  style={{ maxWidth: "200px", maxHeight: "200px", objectFit: "cover" }} 
                />
              )}
            </p>
          </div>
          <div className="col-12">
            <p>
              <span style={{ fontWeight: "bold" }}>Description: </span>
              <span>{courseInfo.description}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCourse;
