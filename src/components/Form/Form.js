import React, { useState } from "react";
import "../../index.css";
import Field from "./Field/Field";
import PropTypes from "prop-types";
let dataObj = {};
const Form = ({ fields, buttons = ["ok", "cancel"], onSubmit }) => {
  console.log(buttons);
  fields.map((field) => {
    dataObj = {
      ...dataObj,
      [field.dataKey]: "",
    };
  });
  const [formData, setFormData] = useState(dataObj);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <>
      <div className="bg-zinc-100 w-96 p-3 rounded shadow-2xl m-3">
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col">
            {fields.map((field, index) => {
              return (
                <Field
                  label={field.label}
                  type={field.type}
                  dataKey={field.dataKey}
                  required={field.required}
                  placeholder={field.placeholder}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [field.dataKey]: e.target.value,
                    })
                  }
                />
              );
            })}
            <div className="flex flex-row">
              {buttons.map((button) => {
                return (
                  <>
                    {button === "ok" ||
                    button === "OK" ||
                    button === "Ok" ||
                    button.ok ? (
                      <button
                        type="submit"
                        className="flex-1 m-1 rounded-full w-fit bg-lime-600 shadow-inner hover:bg-lime-400 font-medium text-slate-50 hover:text-slate-800 italic py-1 px-3"
                      >
                        {button.ok}
                      </button>
                    ) : (
                      <></>
                    )}
                    {button === "cancel" || button === "Cancel" ? (
                      <button
                        type="button"
                        className="flex-1 m-1 rounded-full w-fit bg-red-600 shadow-inner hover:bg-red-400 font-medium text-slate-50 hover:text-slate-800 italic py-1 px-3"
                      >
                        Cancel
                      </button>
                    ) : (
                      <></>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
Form.propTypes = {
  /**
   * contain object for each input field
   */
  fields: PropTypes.array,
  /**
   * array of string contain button
   * ex: OK , Login , Cancel
   */
  buttons: PropTypes.array,
  /**
   * onSubmit={(data) => console.log(data)}
   */
  onSubmit: PropTypes.func,
};
export default Form;
