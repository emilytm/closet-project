import React, { Component } from 'react'
import ThemeContext from './themeContext'
import '../styles/Theme.css'

class Header extends Component {
    render(){
        const theme = this.context
        return (
            <header className={`${theme}-theme`}>
                <h1>My Closet</h1>
            </header>
        )
    }
}

Header.contextType = ThemeContext

export default Header