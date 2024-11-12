import { useState } from 'react'

function Footer({ color }: { color: string }) {
	return <footer style={{ color }}>I am the ({color}) footer</footer>
}

function Main({ footer }: { footer: React.ReactNode }) {
	const [count, setCount] = useState(0)
	const increment = () => setCount((c) => c + 1)
	return (
		<div>
			<button onClick={increment}>The count is {count}</button>
			{/* Composition pattern here */}
			{/* 💰 Fact: state change never re-renders the parent */}
			{footer}
			{/* ✋ If we render the footer here like so, it will rerender every time the count changes. */}
			{/* <Footer color={color} /> */}
		</div>
	)
}

export function App() {
	const [color, setColor] = useState('black')
	//😅 If we introduced the new state here, then it will again rerender the footer
	// const [appCount, setAppCount] = useState(0)
	// see: ex-1.2

	return (
		<div>
			<div>
				<p>Set the footer color:</p>
				<div className='mb-6' style={{ display: 'flex', gap: 4 }}>
					<button onClick={() => setColor('black')}>Black</button>
					<button onClick={() => setColor('blue')}>Blue</button>
					<button onClick={() => setColor('green')}>Green</button>
				</div>
			</div>
			{/* Composition pattern here */}
			<Main footer={<Footer color={color} />} />
		</div>
	)
}