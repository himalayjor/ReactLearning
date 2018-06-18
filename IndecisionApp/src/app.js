class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options:  ['Thing1', 'Thing2', 'Thing3']
        }
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
    }
    
    handleRemoveAll() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick() {
        alert('test');
    }

    render() {
        return (
            <div>
                <Header tittle="My tittle" subTittle="My SubTittle"/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1> {this.props.tittle} </h1>
                <h2> {this.props.subTittle} </h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return( 
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handleRemoveAll}>RemoveAllButton</button>
                Some component here
                {this.props.options.map(e => {
                    return <Option key={e} value={e}/>;
                })}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.value}
            </div>
        );
    }
}

class AddOption extends React.Component {
    onFormSubmit(e) {
        e.preventDefault();
        console.log(e.target.elements.option.value);
    }
    render() {
        return (
            <div>
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