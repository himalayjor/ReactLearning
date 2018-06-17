const appRoot = document.getElementById('app');

const showDetailsAction = () => {
    showDetailsBoolean = !showDetailsBoolean;
    renderApp();
};

let showDetailsBoolean = true;


const renderApp = () => {
    let showDetailsButton = showDetailsBoolean ? 'Show Details' : 'Hide Details';

    const template1 = (
        <div>
            <h1>Visiblity toggle</h1>
            <button onClick={showDetailsAction}>{showDetailsButton}</button>
            { !showDetailsBoolean && (<p> Some Details </p>)}
        </div>
    );
    
    ReactDOM.render(template1, appRoot);
};

renderApp();