import { Row, Col } from 'react-bootstrap'
import moment from 'moment'
import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '', title: '', id: props.postid }
    }

    componentDidMount() {
        const url = "https://9entfc86wi.execute-api.us-east-1.amazonaws.com";
        const { postid } = this.props;
        fetch(url + "/post/" + postid)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    text: data.text,
                    title: data.title,
                })
            })
            .catch((error) => console.log(error));
    }
    
    render() {
        const { text, title, id } = this.state;
        var momentLongAgo = moment(id).fromNow();
        return (
            <div class="post-container">
                <div>
                    <Row>
                        <Col><h3 className='blog-title'>{title}</h3></Col>
                        <Col>
                            <p className='blog-time'>{momentLongAgo}</p>
                        </Col>
                    </Row>
                </div>
                <hr></hr>
                <div>
                    <p className="blog-text">
                        {text}
                    </p>
                </div>
            </div>
        )
    }
}
