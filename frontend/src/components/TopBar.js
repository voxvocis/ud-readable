import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import {
  getCategories,
} from '../actions'
import '../styles/App.css';

class TopBar extends Component {

  componentWillMount() {
    this.props.getCategories();
  }

  render() {
    const { categories } = this.props
    return (
      <div>
        <header className="Container-header">
          <h1 className="Container-title">
            <Link to="/">Readable</Link>
          </h1>
        </header>
        <div className="Categories">
          <ul>
            {categories.map(category => (
              <li key={category.name}>
                <Link
                  className='category'
                  to={'/' + category.path}
                ><p>{category.path} </p></Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="Top-bar">
          <div className="Filter">
            Filter
          </div>
          <div className="New-post">
            <Link to="/#">
              New Post
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => ({
    categories: Object.values(categories),
  })


const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBar))
