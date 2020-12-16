import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getKlasses } from '../redux/actions/klassActions'
import {Link} from 'react-router-dom'
import CharacterKlass from '../components/CharacterKlass'
class CharacterKlassIndex extends Component {

    componentDidMount() {
        this.props.getKlasses()
    }

    render() {
        return (
            <div>
                <h1>Character Class Index</h1>
                {this.props.klasses.map(klass => <ul><Link to={`/classes/${klass.name.toLowerCase()}`}>{klass.name}</Link></ul>)}
            </div>
        )
    }
}

const mapStateToProps = ({klasses}) => {
    return { 
        klasses: klasses.all
    }
}


export default connect(mapStateToProps, {getKlasses})(CharacterKlassIndex)
