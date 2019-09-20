import { Component } from 'react';
import axios from 'axios';

class GetWord extends Component {
    async componentDidMount() {
        const response = await axios.get('/api/word');
        console.log(response);
    }

    render() {
        return null;
    }
}

export default GetWord;
