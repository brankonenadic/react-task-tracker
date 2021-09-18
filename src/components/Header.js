import PropTypes from 'prop-types'
import  Buttons  from './Buttons'


const Header = ({ title, onAdd}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
           <Buttons color='green' text='Add' onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


/* 
<h1 style={headingStyle}>{title}</h1>
const headingStyle = {
    color: 'green' ,
    backgroundColor: 'yellow'
} */
export default Header
