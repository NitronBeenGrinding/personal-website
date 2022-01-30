import { Row, Col } from 'react-bootstrap'

const Bottombar = () => {
    return (
        <div className='endbar'>
            <Row>
                <Col><p className='endbar-text-left'>Questions?</p></Col>
                <Col><p className='endbar-text-right'>Contact me at <b>asadhneni@gmail.com</b>!</p></Col>
            </Row>
        </div>
    )
}

export default Bottombar
