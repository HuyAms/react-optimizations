import React, { useState } from 'react'

// ✋ see the issue we're trying to solve in ex1.1 element props

type ColorContextValue = {
    color: string
}

const ColorContext = React.createContext<ColorContextValue | null>(null)

function useColorContext() {
    const context = React.useContext(ColorContext)

    if(!context) {
        throw new Error('useColorContext must be used within a ColorProvider')
    }

    return context
}

function Footer() {

    const {color} = useColorContext()

	return <footer style={{ color }}>I am the ({color}) footer</footer>
}

function Main({ footer }: { footer: React.ReactNode }) {
	const [count, setCount] = useState(0)
	const increment = () => setCount((c) => c + 1)
	return (
		<div>
			<button onClick={increment}>The main count is {count}</button>
			{footer}
		</div>
	)
}

// by using context, again, we ca move the footer outside the App component
const footer = <Footer />

export function App() {
	const [color, setColor] = useState('black')
    const [appCount, setAppCount] = useState(0)

	return (
		<ColorContext.Provider value={{color}}>
			<div>
				<p>Set the footer color:</p>
				<div className='mb-6' style={{ display: 'flex', gap: 4 }}>
					<button onClick={() => setColor('black')}>Black</button>
					<button onClick={() => setColor('blue')}>Blue</button>
					<button onClick={() => setColor('green')}>Green</button>
				</div>
			</div>
			<button className='mb-6' onClick={() => setAppCount((c) => c + 1)}>
				The app count is {appCount}
			</button>
			<Main footer={footer} />
		</ColorContext.Provider>
	)
}