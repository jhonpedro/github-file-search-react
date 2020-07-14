import React from "react"
import Header from "./components/Header"
import FileList from "./components/FilesList"
import Files from "./utils/api"

export default class App extends React.Component {
    state = {
        fileslist: Files
    }

    render () {
        const { counter, fileslist } = this.state

        return (
            <div className="container">
                <Header />
                <FileList files={ fileslist } />
            </div>

        )
    }
}