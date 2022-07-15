import "./CountriesStyle.css";
import { useFormik } from "formik";
import { useState } from "react";

const Countries = (props) => {
  let data = props.data;
  let setData = props.setData;
  const formik = useFormik({
    initialValues: {
      name: "",
      code: "",
      description: "",
    },
  });
  const handelSubmitAddForm = () => {
    console.log(formik.values);
    setData([...data, formik.values]);
  };
  let [code, setCode] = useState("");
  const handleDeleteCountry = (c) => {
    setCode(c);
  };
  const handleSubmitDelete = () => {
    console.log(code);
    
    setData(data.filter(i => i.code !== code))
  };
  const handleEditCountry = (c) => {
    setCode(c);
    console.log(code);
  };
  const handleSubmitEditCountry = () => {
    console.log(code);
    setData(data.map((item) => (item.code === code ? formik.values : item)));
  };
  console.log(data);

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
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Code</label>
                <input
                  type="text"
                  name="code"
                  placeholder="Enter your code"
                  value={formik.values.code}
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
                  value={formik.values.description}
                  onChange={formik.handleChange}
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
                  onClick={() => handleSubmitDelete()}
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
              {formik.values && (
                <>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      //   value={data}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Code</label>
                    <input
                      type="text"
                      name="code"
                      placeholder="Enter your code"
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
                  onClick={() => handleSubmitEditCountry()}
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
          {data &&
            data.length > 0 &&
            data.map((item, index) => {
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
                      onClick={() => handleEditCountry(item.code)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      type="button"
                      data-toggle="modal"
                      data-target="#modal-delete"
                      onClick={() => handleDeleteCountry(item.code)}
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
