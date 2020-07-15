import React, { useState, useEffect, useRef } from "react"

export default ({ onSearch }) => {
    const [input, setInput] = useState("")
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const onChangeInput = event => {
        const data = event.target.value
        setInput(data)
        onSearch(data)
    }

    return (
        <div className="search-box">
            My repository <span className="slash">/</span>
            <input
                type="text"
                name="input"
                value={ input }
                ref={ inputRef }
                autoComplete="off"
                onChange={ onChangeInput }
            />
        </div>
    )
}