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
	const [numElements, setNumElements] = useState(0)

	function getNumElements() {

	}

	function incHandler() {
		if (position + 3 == data.items.length) {
			setPosition(0)
			return
		} else if (position + 1 == data.items.length || position + 2 == data.items.length) {
			// setPosition(0)
			return
		}
		setPosition(i => i += 3);
		setCode({})
	}

	function decHandler() {
		if (position == 0 || position == 1 || position == 2) {
			setPosition(0)
			return
		}
		setPosition(i => i -= 3);
		setCode({})
	}
	function getCodeHandler(id) {
		const codeVal = data.items.filter(el => {
			return el.id === id;
		})
		setCode(...codeVal)
	}

	// console.log(data);
	return (
		<AppContext.Provider value={{ position }}>
			<div className="App">
				<div className='header'>
					<h1 >CSS from Genie</h1>
				</div>
				{/* <div className='imghead'></div> */}
				<div className='buttons'>
					<button className="btn btn-outline btn-info" onClick={decHandler}>less elements</button>
					<button className="btn btn-outline btn-success" onClick={incHandler}> more elements</button>
				</div>


				<div className='pics'>

					<div onClick={() => getCodeHandler(data.items[position].id)} className=" light card w-96 bg-base-100 shadow-xl image-full">
						<figure><img src={data.items[position].image} alt="Layout" /></figure>
						<div className='picnum'>
							<h2 className="card-title"> {data.items[position].id} </h2>

						</div>
					</div>

					{data.items[position + 1] && <div onClick={() => getCodeHandler(data.items[position + 1].id)} className="light card w-96 bg-base-100 shadow-xl image-full">
						<figure><img src={data.items[position + 1].image} alt="Layout" /></figure>
						<div className='picnum'>
							{data.items[position] && <h2 className="card-title"> {data.items[position + 1].id} </h2>}

						</div>
					</div>}



					{data.items[position + 2] && <div onClick={() => getCodeHandler(data.items[position + 2].id)} className="light code card w-96 bg-base-100 shadow-xl image-full">
						<figure><img src={data.items[position + 2].image} alt="Layout" /></figure>
						<div className='picnum'>
							{data.items[position] && <h2 className="card-title"> {data.items[position + 2].id} </h2>}

						</div>
					</div>}
				</div>

				{/* test title wit num of elements */}
				{/* <h2>{data.items[position].nElements}</h2> */}
				<div className='imggin'></div>
				<div class="chat chat-start chatpos text-xl ">
					<div class="chat-bubble">Click a design you need <br />and get the code</div>
				</div>
				{code.code && <div className="getcode mockup-code ">
					<pre className='left'>{code.code}</pre>
				</div>}
			</div>
		</AppContext.Provider>
	)
}

export default App;


{/* <h1>{data.items[position].id}</h1>
				{data.items[position + 1] && <h1>{data.items[position + 1].id}</h1>}
				{data.items[position + 2] && <h1>{data.items[position + 2].id}</h1>} */}