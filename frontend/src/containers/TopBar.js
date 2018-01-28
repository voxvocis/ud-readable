import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import '../styles/App.css';
import FilterButton from '../components/FilterButton'
import PostDialog from '../components/PostDialog'
import RaisedButton from 'material-ui/RaisedButton'

class TopBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openModal: false,
    }
  }

  closeModal = () => {
    this.setState({
      openModal: false,
    })
  }

  componentWillMount() {
    this.props.getCategories()
  }

  render() {
    const { categories, filter } = this.props
    const { openModal } = this.state
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
                <Link to={'/' + category.path}>
                  <RaisedButton
                    className="category"
                    label={category.path}
                    backgroundColor="#0099"
                    labelColor="#fff"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="Top-bar">
          <FilterButton
            filterOnDate={this.props.filterOnDate}
            filterOnScore={this.props.filterOnScore}
            score={filter.score}
            date={filter.date}
            filterEnabled={filter.enabled}
          />
          <Link to="/#">
            <RaisedButton
              className="New-post"
              label="New Post"
              backgroundColor="#0099"
              labelColor="#fff"
              onClick={() => this.setState({
                openModal: true
              })}
            />
          </Link>
        </div>
        {openModal && (
          <PostDialog
            heading="Create a new Post!"
            open={this.state.openModal}
            closeModal={this.closeModal}
            categories={categories}
            createPost={this.props.addPost}
          />
        ) }
      </div>
    )
  }
}

const mapStateToProps = ({ categories, filter }) => ({
    categories: Object.values(categories),
    filter,
  })

export default withRouter(connect(mapStateToProps, actions)(TopBar))
