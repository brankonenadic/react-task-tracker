import PropTyppes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTyppes = {
    title: PropTyppes.string.isRequired,
}

export default Header
