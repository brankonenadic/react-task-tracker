import PropTyppes from 'prop-types'

const Buttons = ({color, text, onClick}) => {
    return  <button onClick={onClick} style={{backgroundColor: color}} className="btn">{text}</button>
}
Buttons.defaultProps = {
    color: 'steelblue'
}
Buttons.propTyppes = {
    text: PropTyppes.string,
    color: PropTyppes.string,
    onClick: PropTyppes.func
}
export default Buttons