import React from "react"
import ListItem from "./ListItem"

export default ({ files, isSearchView, counter }) => (
    <div className="list">
        { files.length > 0 ? (
            files.map((file, index) => {
                return <ListItem
                    key={ file.id }
                    { ...file }
                    index={ index }
                    isSearchView={ isSearchView }
                    counter={ counter }
                />
            })
        ) : (
                <div>
                    <h3 className="no-result">No matching files found</h3>
                </div>
            ) }
    </div>
)