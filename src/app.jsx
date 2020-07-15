import React from "react"
import Header from "./components/Header"
import FileList from "./components/FilesList"
import SearchView from "./components/SearchView"
import InfoMessage from "./components/InfoMessage"
import Files from "./utils/api"

import {
    HOTKEY_CODE,
    ESCAPE_CODE,
    UP_ARROW_CODE,
    DOWN_ARROW_CODE
} from "./utils/keyCodes"

export default class App extends React.Component {
    state = {
        counter: 0,
        isSearchView: false,
        filesList: Files
    }

    componentDidMount () {
        window.addEventListener("keydown", this.handleEvent)
    }

    componentWillUnmount () {
        window.removeEventListener("keydown", this.handleEvent)
    }

    handleEvent = event => {
        const keyCode = event.keyCode || event.which
        const { filesList, counter } = this.state

        switch (keyCode) {
            case HOTKEY_CODE:
                this.setState(prevState => ({
                    isSearchView: true,
                    filesList: prevState.filesList.filter(file => file.type === "file")
                }))
                break;
            case ESCAPE_CODE:
                this.setState({ isSearchView: false, filesList: Files })
                break;
            case UP_ARROW_CODE:
                if (counter > 0) {
                    this.setState({ ...this.state, counter: counter - 1 })
                }
                break;
            case DOWN_ARROW_CODE:
                if (filesList.length - 1 > counter) {
                    this.setState({ ...this.state, counter: counter + 1 })
                }
                break;
            default:
                break;
        }
    }

    handleSearch = searchTerm => {
        let list

        if (searchTerm) {
            const pattern = new RegExp(searchTerm, "gi")
            list = Files
                .filter(
                    file => (
                        file.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 &&
                        file.type === "file"
                    )
                ).map(file => {
                    return {
                        ...file,
                        name: file.name.replace(pattern, match => `<mark>${match}</mark>`)
                    }
                })
        } else {
            list = Files.filter(file => file.type === "file")
        }

        this.setState({
            isSearchView: this.state.isSearchView,
            filesList: list,
            counter: 0
        })
    }

    render () {
        const { isSearchView, filesList, counter } = this.state

        return (
            <div className="container">
                <Header />
                { isSearchView ? (
                    <div className="search-view">
                        <SearchView onSearch={ this.handleSearch } />
                        <InfoMessage />
                        <FileList
                            files={ filesList }
                            isSearchView={ isSearchView }
                            counter={ counter }
                        />
                    </div>
                ) : (
                        <FileList files={ filesList } />
                    )
                }
            </div>

        )
    }
}