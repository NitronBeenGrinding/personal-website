import { Row, Col } from 'react-bootstrap'

const Bottombar = () => {
    return (
        <div className='endbar noPadding'>
            <Row className="noMargin">
                <Col className="noPadding"><p className='endbar-text-left'>Questions?</p></Col>
                <Col className="noPadding"><p className='endbar-text-right'>Contact me at <b>asadhneni@gmail.com</b>!</p></Col>
            </Row>
        </div>
    )
}

export default Bottombar
