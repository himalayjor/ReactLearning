class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSub = this.handleSub.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    handleAdd() {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            };
        });
    }
    handleSub() {
        this.setState((previousState) => {
            return {
                count: previousState.count - 1
            }
        });
    }
    handleReset() {
        // this.setState is async
        // this.setState((previousState) => {
        //     return {
        //         count: 0
        //     };
        // });
        this.setState({
            count: 0
        });
    }
    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAdd}>+1</button>
                <button onClick={this.handleSub}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));