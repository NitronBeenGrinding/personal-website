import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from './Post';

export default class Feed extends Component {
    constructor(props) {
        // Initialize mutable state
        super(props);
        this.state = { next: 0, results: [], keepRun: true };
    
        this.fetchMore = this.fetchMore.bind(this);
    }
    
    componentDidMount() {
        this.fetchMore();
    }

    fetchMore() {
        const { url } = this.props;
        const { next, results } = this.state;
        fetch(url + "/post?pagenum=" + next, { credentials: 'same-origin' })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                this.setState({
                    next: next + 1,
                    results: results.concat(data),
                    keepRun: true,
                });
                if (data.length === 0) {
                    this.setState({keepRun: false});
                }
            })
            .catch((error) => console.log(error));
    }

    render() {
        const { results, keepRun } = this.state;

        return (
            <InfiniteScroll
                dataLength={results.length}
                hasMore={keepRun}
                next={this.fetchMore}
                loader={ <p className='section-title'>Loading feed...</p>}
                endMessage={<p className='section-title'>You have reached the end of the blog!</p>}
            >
                {
                    results.map((eachpost) => (
                        <Post
                        postid={eachpost.id}
                        key={eachpost.id}
                        />
                    ))
                }
            </InfiniteScroll>
        )
    }
}