import React from "react"
import moment from "moment"
import { AiFillFolder, AiOutlineFile, AiOutlineRight } from "react-icons/ai"

export default ({ type, name, comment, modified_time, isSearchView, index, counter }) => {
    const isSelected = counter === index

    return (
        <React.Fragment>
            <div className={ `list-item ${isSelected ? "active" : ""}` }>
                <div className="file">
                    { isSearchView && (
                        <span className={ `arrow-icon ${isSelected ? "visible" : "invisible"}` }>
                            <AiOutlineRight color="#0366d6" />
                        </span>
                    ) }
                    <span className="file-icon">
                        { type === "folder" ? (
                            <AiFillFolder color="#79b8ff" size="20" />
                        ) : (
                                <AiOutlineFile size="18" />
                            ) }
                    </span>
                    <span className="label">{ name }</span>
                </div>
                { !isSearchView && (
                    <React.Fragment>
                        <div className="comment">{ comment }</div>
                        <div className="time" title={ modified_time }>
                            { moment(modified_time).fromNow() }
                        </div>
                    </React.Fragment>
                ) }
            </div>
        </React.Fragment>
    )
}