import { useContext } from 'react'
import { ThemeContext, ThemeContextProvider } from './ThemeContext'

export const Box = () => {
    const theme = useContext(ThemeContext)
    return (
    <div style={{margin: theme.expanded.marginLeft}}>
    </div>
    )
}