import React from 'react'

const Field = ({type,label,placeholder,required,dataKey,onChange}) => {
  return (
    <>
        <label for={dataKey} key={dataKey + "label"} className="mb-1 italic">
            {label}
          </label>
          <input
            onChange={onChange}
            type={type}
            id={dataKey}
            key={dataKey}
            required={required}
            placeholder={placeholder}
            className="py-2 px-3 appearance-none placeholder:italic placeholder:text-slate-400 leading-tight mb-3 border-none focus:outline-none focus-visible:ring-1 rounded shadow"
          />
    </>
  )
}

export default Field