import React from "react"
import ListItem from "./ListItem"

export default ({ files }) => (
    <div className="list">
        { files.length > 0 ? (
            files.map(file => {
                return <ListItem key={ file.id } { ...file } />
            })
        ) : (
                <div>
                    <h3 className="no-result">No matching files found</h3>
                </div>
            ) }
    </div>
)