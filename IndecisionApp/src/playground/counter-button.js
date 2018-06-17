let count = 0;
const addOne = () => {
    count++;
    console.log('add1 button');
    renderApp();
};
const subOne = () => {
    count--;
    console.log('subOne button');
    renderApp();
};
const resetButton = () => {
    count = 0;
    console.log('resetButton button');
    renderApp();
};


const appRoot = document.getElementById('app');

const renderApp = () => {
    const template2 = (
        <div>
            <h1>Count {count} </h1>
            <button onClick={addOne}>+1</button>
            <button onClick={subOne}>-1</button>
            <button onClick={resetButton}>Reset</button>
        </div>
    );

    ReactDOM.render(template2, appRoot);
};

renderApp();