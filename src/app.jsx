import React from "react"
import Header from "./components/Header"
import FileList from "./components/FilesList"
import SearchView from "./components/SearchView"
import { HOTKEY_CODE, ESCAPE_CODE } from "./utils/keyCodes"
import Files from "./utils/api"

export default class App extends React.Component {
    state = {
        isSearchView: false,
        fileslist: Files
    }

    componentDidMount () {
        window.addEventListener("keydown", this.handleEvent)
    }

    componentWillUnmount () {
        window.removeEventListener("keydown", this.handleEvent)
    }

    handleEvent = event => {
        const keyCode = event.keyCode || event.which

        switch (keyCode) {
            case HOTKEY_CODE:
                this.setState(prevState => ({
                    isSearchView: true,
                    fileslist: prevState.fileslist.filter(file => file.type === "file")
                }))
                break;
            case ESCAPE_CODE:
                this.setState({ isSearchView: false, fileslist: Files })
                break;
            default:
                break;
        }
    }

    handleSearch = searchTerm => {
        let list

        if (searchTerm) {
            list = Files.filter(
                file => (
                    file.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 &&
                    file.type === "file"
                )
            )
        } else {
            list = Files.filter(file => file.type === "file")
        }

        this.setState({
            isSearchView: this.state.isSearchView,
            fileslist: list
        })
    }

    render () {
        const { isSearchView, fileslist } = this.state

        return (
            <div className="container">
                <Header />
                { isSearchView ? (
                    <div className="search-view">
                        <SearchView onSearch={ this.handleSearch } />
                        <FileList files={ fileslist } isSearchView={ isSearchView } />
                    </div>
                ) : (
                        <FileList files={ fileslist } />
                    )
                }
            </div>

        )
    }
}