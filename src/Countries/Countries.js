import "./CountriesStyle.css";
import { useFormik } from "formik";
import { useState } from "react";

const Countries = (props) => {
  let data = props.data;
  const formik = useFormik({
    initialValues: data,
  });
  const addForm = useFormik({
    initialValues: {
      name: "",
      code: "",
      description: "",
    },
  });

  let [exp, setExp] = useState(["1"]);

  const handelSubmitAddForm = () => {
    formik.values.push(addForm.values);
    console.log(formik.values);
    setExp(["2"]);
  };

  const handleDeleteCountry = (code) => {
    let data = formik.values;
    data.splice(
      data.findIndex(function (i) {
        return i.code === code;
      }),
      1
    );
    formik.values = data;
    setExp(["3"]);
  };
  let [index, setIndex] = useState(0);
  const handleEditCountry = (e) => {
    setIndex(e);
  };
  return (
    <div className="container table-country ">
      <div className="modal  fade" id="modal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h2 className="text-left">Add New Country</h2>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your country"
                  value={addForm.values.name}
                  onChange={addForm.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Code</label>
                <input
                  type="text"
                  name="code"
                  placeholder="Enter your code"
                  value={addForm.values.code}
                  onChange={addForm.handleChange}
                />
                <br />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  name="description"
                  placeholder="Enter your country"
                  value={addForm.values.description}
                  onChange={addForm.handleChange}
                />
                <br />
              </div>
              <div className="checkbox">
                <button
                  className="btn btn-success"
                  data-dismiss="modal"
                  id="btn-creat"
                  onClick={() => handelSubmitAddForm()}
                >
                  Add
                </button>
                <button
                  type="submit"
                  className="btn btn-default"
                  data-dismiss="modal"
                  style={{ marginLeft: "80%" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal  fade" id="modal-delete" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h2 className="text-left">Delete Country?</h2>
            </div>
            <div className="modal-body">
              <div className="checkbox">
                <button
                  className="btn btn-success"
                  data-dismiss="modal"
                  id="btn-creat"
                  onClick={() => handleDeleteCountry()}
                >
                  Yes
                </button>
                <button
                  type="submit"
                  className="btn btn-default"
                  data-dismiss="modal"
                  style={{ marginLeft: "80%" }}
                >
                  NO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal  fade" id="modal-edit" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h2 className="text-left">Edit Country</h2>
            </div>
            <div className="modal-body">
              {formik.values.length > 0 && (
                <>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your code"
                      value={formik.values[index].name}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Code</label>
                    <input
                      type="text"
                      name="code"
                      placeholder="Enter your code"
                      value={formik.values[index].code}
                      onChange={formik.handleChange}
                    />
                    <br />
                  </div>
                  <div className="form-group">
                    <label>Country</label>
                    <input
                      type="text"
                      name="description"
                      placeholder="Enter your country"
                      value={formik.values[index].description}
                      onChange={formik.handleChange}
                    />
                    <br />
                  </div>
                </>
              )}
              <div className="checkbox">
                <button
                  className="btn btn-success"
                  data-dismiss="modal"
                  id="btn-creat"
                >
                  Submit
                </button>
                <button
                  type="submit"
                  className="btn btn-default"
                  data-dismiss="modal"
                  style={{ marginLeft: "70%" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center">Country</h1>
      <button
        className="btn btn-success pull-right"
        type="button"
        data-toggle="modal"
        data-target="#modal"
      >
        Add new country
      </button>
      <table className="table table-bordered ">
        <thead>
          <tr className="list-form">
            <th className="text-center">Country</th>
            <th className="text-center">Code</th>
            <th className="text-center">Description</th>
          </tr>
        </thead>
        <tbody>
          {formik.values &&
            formik.values.length > 0 &&
            formik.values.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{item.name}</td>
                  <td className="text-center">{item.code}</td>
                  <td className="text-center">
                    {item.description}
                    <button
                      className="btn btn-warning"
                      type="button"
                      data-toggle="modal"
                      data-target="#modal-edit"
                      onClick={() => handleEditCountry(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      type="button"
                      data-toggle="modal"
                      data-target="#modal-delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Countries;
