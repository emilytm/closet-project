import React, {Component} from 'react'
import ThemeContext from './themeContext'
import '../styles/Theme.css'

class ThemeButton extends Component {

    render(){
        const theme = this.context
        return (
            <button className={`${theme}-theme`}>
                Switch Theme
            </button>
        )
    }
}

ThemeButton.contextType = ThemeContext

export default ThemeButton