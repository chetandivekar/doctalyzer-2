import React from "react"
import { Link } from "react-router-dom"
import "./buttons.css"

const Buttons = () => {
	return (
		<div className='flex flex-row justify-around w-full mt-12'>
			<div className='flex flex-col p-5 items-center w-64 max-w-xl p-12 mx-2 rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg'>
				<Link to='/ocr'>
					<div>
						<img
							src='../src/assets/upload.png'
							alt='upload'
							className='button-img p-5'
						/>
					</div>
					<div className='flex justify-center'>Click Me</div>
				</Link>
			</div>
			<div className='flex flex-col p-5 items-center w-64 max-w-xl p-12 mx-2 rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg'>
				<Link to='/medical'>
					<div>
						<img
							src='../src/assets/medicine.png'
							alt='upload'
							className='button-img p-5'
						/>
					</div>
					<div className='flex justify-center'>Click Me</div>
				</Link>
			</div>
		</div>
	)
}

export default Buttons
