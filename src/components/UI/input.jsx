import React from 'react'

function input({
    type="text",
    label,
    placeholder,
    name,
    value,
    onchange,
    required=false
}) {
  return (
    <div className='flex flex-col gap-2'>
        <label htmlfor={name} className="text-sm font-median">
            {label}
        </label>
        <input
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        required={required}
        className="w-full rounded-lg border border-gray=300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
        
    </div>
  );
}

export default input;