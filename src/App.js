import './App.css';

function App() {
    return (
        <div className='text-center'>
            <h1 className='text-danger'>Count with Reducer</h1>
            <hr />
            <h2 className='text-info'>100</h2>

            <div className='d-flex justify-content-center gap-1'>
                <button className='btn btn-primary'>+1</button>
                <button className='btn btn-success'>+10</button>
                <button className='btn btn-warning'>+10</button>
                <button className='btn btn-success'>-10</button>
                <button className='btn btn-primary'>-1</button>
            </div>
        </div>
    );
}

export default App;
