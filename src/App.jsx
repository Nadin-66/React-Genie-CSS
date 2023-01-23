import './App.css';
import Header from './components/Header';
import items from './data.json'
import { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

export const AppContext = createContext();


function App() {

	const [data, setData] = useState(items)
	const [position, setPosition] = useState(0)
	const [code, setCode] = useState({})


	function incHandler() {
		if (position + 3 == data.items.length) {
			setPosition(0)
			return
		} else if (position + 1 == data.items.length || position + 2 == data.items.length) {
			// setPosition(0)
			return
		}
		setPosition(i => i += 3);
		setCode ({})
	}

	function decHandler() {
		if (position == 0 || position == 1 || position == 2) {
			setPosition(0)
			return
		}
		setPosition(i => i -= 3);
		setCode ({})
	}
function getCodeHandler(id) {
	const codeVal = data.items.filter (el=> {
		return el.id===id; 
	})
	setCode(...codeVal )

}

// console.log(data);
	return (
		<AppContext.Provider value={{ position }}>
			<div className="App">

<div className="btn no-animation glass title text-xl">Click the design of layout and get a code </div>
<div className='buttons'>
				<button className="btn btn-outline btn-info" onClick={decHandler}>Move back</button>
				<button className="btn btn-outline btn-success" onClick={incHandler}>Move fovard</button>
</div>


				<div className='pics'>

					<div onClick={()=>getCodeHandler(data.items[position].id)} className="card w-96 bg-base-100 shadow-xl image-full">
						<figure><img src={data.items[position].image} alt="Shoes" /></figure>
						<div className="card-body">
							<h2 className="card-title"> {data.items[position].id} </h2>

						</div>
					</div>

				{data.items[position + 1] && <div onClick={ ()=>getCodeHandler(data.items[position+1].id)} className="card w-96 bg-base-100 shadow-xl image-full">
						<figure><img src={data.items[position + 1].image} alt="Shoes" /></figure>
						<div className="card-body">
							{data.items[position] && <h2 className="card-title"> {data.items[position + 1].id} </h2>}

						</div>
					</div>}


					
				{data.items[position + 2] && <div onClick={ ()=> getCodeHandler(data.items[position + 2].id)} className=" code card w-96 bg-base-100 shadow-xl image-full">
						<figure><img src={data.items[position + 2].image} alt="Shoes" /></figure>
						<div className="card-body">
							{data.items[position] && <h2 className="card-title"> {data.items[position + 2].id} </h2>}

						</div>
					</div>}
				</div>

				{code.code && <div className=' getcode mockup-code'> 
					<pre className='left'>{code.code}</pre>
				</div> }
			</div>
		</AppContext.Provider>
	)
}

export default App;


{/* <h1>{data.items[position].id}</h1>
				{data.items[position + 1] && <h1>{data.items[position + 1].id}</h1>}
				{data.items[position + 2] && <h1>{data.items[position + 2].id}</h1>} */}