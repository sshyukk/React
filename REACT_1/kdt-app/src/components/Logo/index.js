import logo from './logo.svg';
import PropTypes from 'prop-types';

// prop -> prop.size로 설정 가능하나 구조분해 할당으로 사용.
function Logo({ size = 100}) {
    return (
        <img src={logo} className="App-logo" alt="logo" style={{ width: size, height: size}} />
    )
}
Logo.defaultProps = {
    size: 200
}
Logo.propTypes = {
    size: PropTypes.number
}
export default Logo
