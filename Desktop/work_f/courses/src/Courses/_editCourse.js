import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../Base/Base";

const initialcourseInfo = {
  id: "",
  name: "",
  price: 0,
  description: "",
  image: null, 
  type: "",
};

function EditCourse(props) {
  const [courseInfo, setcourseInfo] = useState(initialcourseInfo);

  useEffect(() => {
    fetchCourseData();
  }, []); 

  const fetchCourseData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/courses/` + props.courseId);
      if (response) {
        console.log(response);
        setcourseInfo(response.data);
      }
      return;
    } catch (e) {
      console.log(e);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setcourseInfo({ ...courseInfo, image: file });
    }
  };

  const editExistCourse = async () => {
    const formData = new FormData();
    formData.append("name", courseInfo.name);
    formData.append("price", courseInfo.price);
    formData.append("type", courseInfo.type);
    formData.append("description", courseInfo.description);
    
   
    if (courseInfo.image) {
      formData.append("image", courseInfo.image);
    }

    try {
      const response = await axios.put(
        `${BASE_URL}/courses/` + props.courseId,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", 
          },
        }
      );
      if (response) {
        props.setCourseEdited();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="Course-view _add-view">
      <div className="box">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <p>
              <b>Course Name</b>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Course Name..."
                value={courseInfo.title}
                onChange={(e) =>
                  setcourseInfo({ ...courseInfo, name: e.target.value })
                }
              />
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <p>
              <b>Price</b>
              <input
                type="number" 
                className="form-control"
                placeholder="Enter Price..."
                value={courseInfo.price}
                onChange={(e) =>
                  setcourseInfo({ ...courseInfo, price: e.target.value })
                }
              />
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <p>
              <b>Upload Image</b>
              <input
                type="file"
                className="form-control"
                accept="image/*" 
                onChange={handleFileChange} 
              />
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <p>
              <b>Type</b>
              <input
                type="number" 
                className="form-control"
                placeholder="Enter Type Here..."
                value={courseInfo.type}
                onChange={(e) =>
                  setcourseInfo({ ...courseInfo, type: e.target.value })
                }
              />
            </p>
          </div>
          <div className="col-sm-12 col-md-12">
            <p>
              <b>Description</b>
              <textarea
                className="form-control"
                placeholder="Enter Description Here..."
                value={courseInfo.description}
                onChange={(e) =>
                  setcourseInfo({ ...courseInfo, description: e.target.value })
                }
                style={{ fontSize: ".9rem" }}
              />
            </p>
          </div>
        </div>
      </div>
      <button className="btn btn-success" onClick={editExistCourse}>
        Edit Course
      </button>
    </div>
  );
}

export default EditCourse;
