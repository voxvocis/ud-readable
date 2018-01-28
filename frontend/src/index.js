import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state: ', store.getState())
  console.groupEnd(action.type)
  return result
}

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(logger, thunk)
  )
)

const ReadableApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  <ReadableApp />,
  document.getElementById('root'))
registerServiceWorker()
