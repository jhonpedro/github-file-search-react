import React from "react"
import moment from "moment"
import { AiFillFolder, AiOutlineFile } from "react-icons/ai"

export default ({ type, name, comment, modified_time }) => (
    <React.Fragment>
        <div className="list-item">
            <div className="file">
                <span className="file-icon">
                    { type === "folder" ? (
                        <AiFillFolder color="#79b8ff" size="20" />
                    ) : (
                            <AiOutlineFile size="18" />
                        ) }
                </span>
                <span className="label">{ name }</span>
            </div>
            <div className="comment">{ comment }</div>
            <div className="time" title={ modified_time }>
                { moment(modified_time).fromNow() }
            </div>
        </div>
    </React.Fragment>
)