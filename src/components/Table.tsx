import React from "react"
import './Table.css'

const Table = ({ data, loading }: any) => {
  return (
    <div className='table-container'>
      {loading && <div className="spinner-container"><div className='spinner'></div></div>}
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Place Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={3} className="no-result">{loading ? "" : "No result found"}</td>
            </tr>
          ) : (
            data.map((item: any, index: any) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.city}</td>
                <td className='country-div'>
                  <img
                    src={`https://flagsapi.com/${item.countryCode}/flat/16.png`}
                    alt={item.countryName}
                  />{" "}
                  <span className="countryName">{item.country}</span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table
