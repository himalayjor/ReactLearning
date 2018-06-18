const appRoot = document.getElementById('app');

const options = {
    arr: ['Hima', 'Jor']
};

const getElements = () => {
    let result = '';
    options.arr.forEach(element => {
      result += <li>{element}</li>;
    })
    return result;
};

const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements.option.value);
    options.arr.push(event.target.elements.option.value);
    event.target.elements.option.value = '';
    renderApp();
};

const removeAllButton = () => {
    options.arr = [];
    renderApp();
};

const renderApp = () => {
    const template1 = (
        <div>
            <h1>Himalay Joriwal </h1>
            <p>Age :26</p>
            <p> {options.arr.length > 0 ? 'Your options are' : 'No options'} </p>
            <button onClick={removeAllButton}>RemoveAll</button>
           
            <ol>
                { options.arr.map((r) => <li key={r}>{r}</li>) }
               <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Submit</button>
               </form>
               
            </ol>
        </div>
    );
    
    ReactDOM.render(template1, appRoot);
};

renderApp();




