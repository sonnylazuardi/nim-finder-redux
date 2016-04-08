import React, {
    Component,
    AppRegistry,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import reducers from './reducers';
import { searchNim, loadMore } from './actions';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducers);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }
    handleSubmit(e) {
        if (e)
            e.preventDefault();
        this.props.dispatch(searchNim(this.state.search));
    }
    render() {
        return (
            <ScrollView>
                <View>
                    <TextInput onChangeText={(search) => this.setState({search})} value={this.state.search} style={{height: 40, borderColor: 'gray', marginTop: 20}} />
                    <TouchableOpacity onPress={this.handleSubmit.bind(this)}>
                        <View style={{padding: 10, backgroundColor: '#ddd'}}>
                            <Text>{'Cari'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    {this.props.nims.map(item => (
                        <Text key={item.nim}>{item.nim} - {item.name}</Text>
                    ))}
                    {this.props.isFetching ?
                        <Text>Loading...</Text>
                        :
                        (this.props.nims.length > 0 ?
                            (
                                <TouchableOpacity onPress={() => {
                                    this.props.dispatch(loadMore(this.state.search))
                                }}>
                                    <View style={{padding: 10, backgroundColor: '#ddd'}}>
                                        <Text>Load More...</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                            : null)}
                </View>
            </ScrollView>
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
const NimFinder = () => {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    )
};

export default NimFinder;
