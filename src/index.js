import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import reducers from './reducers';
import { searchNim, loadMore } from './actions';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducers);

class App extends Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(searchNim(this.refs.name.value));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="name" />
                    <button type="submit">Cari</button>
                </form>
                <div>
                    <ul>
                    {this.props.nims.map(item => (
                        <li key={item.nim}>{item.nim} - {item.name}</li>
                    ))}
                    {this.props.isFetching ?
                        'Loading...'
                        :
                        {this.props.nims.length > 0 ?
                            <button onClick={() => {
                                    this.props.dispatch(loadMore(this.refs.name.value))
                                }}>Load More...</button>
                            : null}}
                    </ul>

                </div>
            </div>
        );
    }
};

App.propTypes = {
    nims: React.PropTypes.array,
    isFetching: React.PropTypes.bool
};

function mapStateToProps(state) {
    let {isFetching, nims} = state.nims;
    return {isFetching, nims};
}

const AppContainer = connect(mapStateToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);