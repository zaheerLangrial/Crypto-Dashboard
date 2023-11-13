import React from 'react'

function Button({svg , child}) {
  return (
    <button className="flex space-x-4 items-center py-3 px-4 rounded-md bg-[#F3F3F7] ">
            <span>
              {svg}
            </span>
            <span>{child}</span>
          </button>
  )
}

export default Button