import React, { useEffect, useRef, useState } from "react"
import "./SearchBox.css"

const SearchBox = ({ onSearch }: any) => {
  const [query, setQuery] = useState("")
  const inputRef: any = useRef(null)
  const handleSearch = () => {
    onSearch(query)
  }

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "\\") {
        e.preventDefault()
        inputRef.current.focus()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <input
      ref={inputRef}
      type='text'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSearch()
        }
      }}
      placeholder='Search places...'
    />
  )
}

export default SearchBox
