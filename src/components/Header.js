import PropTyppes from 'prop-types'
import  Buttons  from './Buttons'

const onClick = () => {
    console.log('Hello');
    }
const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
           <Buttons color='green' text='Add' onClick={onClick} />
           
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTyppes = {
    title: PropTyppes.string.isRequired,
}


/* 
<h1 style={headingStyle}>{title}</h1>
const headingStyle = {
    color: 'green' ,
    backgroundColor: 'yellow'
} */
export default Header
