class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options:  ['Thing1', 'Thing2', 'Thing3'],
            error: ''
        }
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    
    handleRemoveAll() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handleAddOption(text) {
        if (!text) {
            return 'text is empty';
        } else if (this.state.options.indexOf(text) > -1) {
            return 'value already exists';
        } 

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(text)
            };
        });
    }
    handlePick() {
        alert('test');
    }

    render() {
        return (
            <div>
                <Header subTittle="My SubTittle"/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1> {props.tittle} </h1>
            <h2> {props.subTittle} </h2>
        </div>
    );
}

Header.defaultProps = {
    tittle: 'IndecisionApp'
};

class Action extends React.Component {
    render() {
        return( 
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do?</button>
            </div>
        );
    }
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>RemoveAllButton</button>
            Some component here
            {props.options.map(e => {
                return <Option key={e} value={e}/>;
            })}
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.value}
        </div>
    ); 
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log(e.target.elements.option.value.trim());

        const error = this.props.handleAddOption(e.target.elements.option.value.trim());
        console.log(error);
        this.setState(() => {
            return {error};
        }); 
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot);