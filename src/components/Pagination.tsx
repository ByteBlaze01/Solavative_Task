import React from "react"

const Pagination = ({ totalPages, onPageChange }:any) => {
  return (
    <div>
      {totalPages > 0 && (
        <div>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i + 1} onClick={() => onPageChange(i + 1)}>
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Pagination
