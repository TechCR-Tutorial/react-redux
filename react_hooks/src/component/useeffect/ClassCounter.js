import React, { Component } from 'react'

class ClassCounter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} Times`
    }

    componentDidUpdate(prePros, preState) {
        
        if (preState.count !== this.state.count) {
            console.log('Document Title updating. ')
            document.title = `Clicked ${this.state.count} Times`
        }
        
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e => { this.setState({name: e.target.value})}}/>
                <button onClick={() => this.setState( {count: this.state.count + 1})} > Click {this.state.count} </button>
            </div>
        )
    }
}

export default ClassCounter