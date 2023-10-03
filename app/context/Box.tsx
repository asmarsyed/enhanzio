import { useContext } from 'react'
import { ThemeContextProvider } from './ThemeContext'

export const Box = () => {
    const theme = useContext(ThemeContext)
    return <div >Theme context</div>
}