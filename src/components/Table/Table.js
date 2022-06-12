import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../index.css";
//array to be used for mapping row data
let columnArr = [];
let operations = false;
const Table = ({
  columns,
  dataSource,
  enableEdit = false,
  enableDelete = false,
  enbaleInsert = false,
  onDataChange,
}) => {
  enableEdit || enableDelete || enbaleInsert
    ? (operations = true)
    : (operations = false);
  const [dataLength, setDataLength] = useState(dataSource.length);
  const [editState, setEditState] = useState({
    rowIndex: null,
    startEdit: false,
    rowData: null,
  });
  console.log(editState);
  const [dataSourceState, setDataSourceState] = useState(dataSource);
  //func to map columns array of objects to create table header
  const handleColumns = () => {
    columnArr = [];
    return (
      <>
        {columns.map((column) => {
          //construct columnArr with each column index
          columnArr.push(column.dataIndex);
          //render the header cells
          return <th className="px-6 py-3">{column.name}</th>;
        })}
      </>
    );
  };
  //func to render the operations cell
  const handleOperations = (index, field) => {
    return (
      <>
        {operations && (
          <td className="px-6 py-4 text-right">
            {editState.startEdit && editState.rowIndex === index ? (
              <>
                <button
                  type="submit"
                  className="mr-3 cursor-pointer font-medium text-green-600 dark:text-green-500 hover:underline"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setEditState({
                      rowIndex: null,
                      startEdit: false,
                      rowData: null,
                    })
                  }
                  className="mr-3 cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Cancel
                </button>
              </>
            ) : (
              //render normal operations if not in edit mode
              <>
                {enableEdit && !editState.startEdit && (
                  <span
                    onClick={() =>
                      setEditState({
                        rowIndex: index,
                        startEdit: true,
                        rowData: field,
                      })
                    }
                    className="mr-3 cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </span>
                )}
                {enbaleInsert && !editState.startEdit && (
                  <span
                  onClick={() => handleInsert(index)} 
                  className="mr-3 cursor-pointer font-medium text-lime-600 dark:text-lime-500 hover:underline">
                    Insert
                  </span>
                )}
                {enableDelete && !editState.startEdit && (
                  <span
                    onClick={() => handleDelete(index)}
                    className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline"
                  >
                    Delete
                  </span>
                )}
              </>
            )}
          </td>
        )}
      </>
    );
  };
  //func to render the rows data
  const handleFields = () => {
    return (
      <>
        {dataSource.map((field, index) => {
          //mapping the fields array of object to get each object then map the columnsArr and render each cell
          return (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {columnArr.map((header) => {
                return (
                  <>
                    {/* check if edit enabled and in the row that need to be edited with the index of fields array */}
                    {editState.startEdit && editState.rowIndex === index ? (
                      //render input for form
                      <td className="px-6 py-3">
                        <input
                          value={editState.rowData[header]}
                          onChange={(e) =>
                            setEditState({
                              ...editState,
                              rowData: {
                                ...editState.rowData,
                                [header]: e.target.value,
                              },
                            })
                          }
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus-visible:ring-1"
                        />
                      </td>
                    ) : (
                      //render normal cells
                      <td className="px-6 py-3">{field[header]}</td>
                    )}
                  </>
                );
              })}
              {/* render  the operations cell */}
              {handleOperations(index, field)}
            </tr>
          );
        })}
      </>
    );
  };
  const handleDelete = (index) => {
    if (window.confirm(`Confirm delete row number ${index + 1}`)) {
      let dataSourceArr = dataSourceState;
      dataSourceArr.splice(index, 1);
      setDataSourceState(dataSourceArr);
      setDataLength(dataSourceArr.length);
      onDataChange(dataSourceArr);
    }
  };
  const handleInsert = (index) => {
    let dataObj = {}
    columnArr.map((item) => {
      dataObj = {
        ...dataObj,
        [item] : ""
      }
    })
    let dataSourceArr = dataSourceState;
    dataSourceArr.splice(index+1,0,dataObj);
    setDataSourceState(dataSourceArr);
    setEditState({rowIndex:index + 1,startEdit:true,rowData:dataSourceArr[index+1]})
    setDataLength(dataSourceArr.length)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    let dataSourceArr = dataSourceState;
    dataSourceArr[editState.rowIndex] = editState.rowData;
    setDataSourceState(dataSourceArr);
    setEditState({ rowIndex: null, startEdit: false, rowData: null });
    onDataChange(dataSourceArr);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {handleColumns()}
              {/* operation column header cell */}
              {operations && (
                <th className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              )}
            </tr>
          </thead>
          {dataLength && (
            <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {handleFields()}
            </tbody>
          )}
        </table>
      </div>
    </form>
  );
};

Table.propTypes = {
  /**
   * enable edit operation for each row
   */
  enableEdit: PropTypes.bool,
  /**
   * enable delete operation for each row
   */
  enableDelete: PropTypes.bool,
  /**
   * enable insert new row after the clicked row
   */
  enbaleInsert: PropTypes.bool,
  /** array of objects, each object contain <br/>
   *  name : String  <br/>(column display name) <br/>
   * dataIndex : String <br/>(index of data in each row) */
  columns: PropTypes.array,
  /**
   * array of objects, each object contain <br/>
   * the dataIndex from columns as object key and displayed value
   */
  dataSource: PropTypes.array,
  /**
   * func that return new data operations (array of object)<br/>
   * usage:<br/>
   * onDataChange={(newData) => console.log(newData)}
   */
  onDataChange: PropTypes.func,
};

export default Table;
