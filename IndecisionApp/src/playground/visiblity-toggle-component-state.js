const appRoot = document.getElementById('app');

class VisiblityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.showDetailsAction = this.showDetailsAction.bind(this);
        this.state = {
            showDetailsBoolean: true
        }
    }

    showDetailsAction() {
        this.setState((prevState) => {
            return {
                showDetailsBoolean: !prevState.showDetailsBoolean
            };
        });
    }

    render() {

        let showDetailsButton = this.state.showDetailsBoolean ? 'Show Details' : 'Hide Details';

        return (
            <div>
                <h1>VisiblityToggle</h1>
                <button onClick={this.showDetailsAction}>{showDetailsButton}</button>
                { !this.state.showDetailsBoolean && (<p> Some Details </p>)}
            </div>
        );
    }
}

ReactDOM.render(<VisiblityToggle />, appRoot);
