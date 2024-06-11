import React, { useState, useEffect } from "react"
import './App.css'
import SearchBox from "./components/SearchBox"
import Table from "./components/Table"
import Pagination from "./components/Pagination"
import axios from "axios"

const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  // const [currentPage, setCurrentPage] = useState(1)
  // const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(5);
  const fetchData = async (query: any) => {
    setLoading(true)
     try {
       const response = await axios.get(
         "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
         {
           params: {
             countryIds: "IN",
             namePrefix: query,
             limit: limit,
           },
           headers: {
             "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
             "x-rapidapi-key": import.meta.env.VITE_API_KEY,
           },
         }
       )
       console.log(response.data)
       setData(response.data.data)
     } catch (error) {
       console.error(error)
     }
    setLoading(false)
  }

  useEffect(() => {
    fetchData("")
  }, [limit])

  const handleSearch = (query:any) => {
    fetchData(query)
  }

  // const onPageChange = (page:any) => {
  //   setCurrentPage(page)
  // }

   const handleChange = (e:any) => {
     const value = e.target.value
     const numericValue = value.replace(/\D/g, "")
     const clampedValue:any = Math.min(Math.max(Number(numericValue), 0), 10)
     setLimit(clampedValue.toString())
   }

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      <Table data={data} loading={loading} />
      {/* <Pagination totalPages={totalPages} onPageChange={onPageChange} /> */}
      <div className='pagninate-container'>
        {/* {data.length === 0 ? null : } */}
        <input
          type='text'
          className="paginate-box"
          value={limit}
          onChange={handleChange}
          placeholder='Enter a number between 0 and 10'
        />
      </div>
    </div>
  )
}

export default App
