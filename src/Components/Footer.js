import React from 'react'

const Footer = () => {
    let footerStyle = {
        position: "absolute",
        top: "100vh",
        width: "100%"
    }
    return (
        <footer className='bg-dark text-light py-3' style={footerStyle}>
            Copyright &Copy; MyTodosList.com
        </footer>
    )
}

export default Footer

