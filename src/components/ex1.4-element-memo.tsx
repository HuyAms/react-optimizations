import React, { memo, useState } from 'react'

// ✋continue the 1.2 example, now Footer receives a name props, 
// so we can't move it outside of the app

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

// 💰 Instead of using the useMemo, react has a memo function
const Footer = memo(function Footer({ name }: { name: string }) {
    const {color} = useColorContext()
    return (
        <footer style={{ color }}>
            I am the ({color}) footer, {name || 'Unnamed'}
        </footer>
    )
})

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

export function App() {
	const [color, setColor] = useState('black')
	const [name, setName] = useState('Kody')
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
			<div className='mb-6'>
					<p>Set the footer name:</p>
					<label>
						Name:
						<input
							value={name}
							onChange={(e) => setName(e.currentTarget.value)}
						/>
					</label>
				</div>
			<button className='mb-6' onClick={() => setAppCount((c) => c + 1)}>
				The app count is {appCount}
			</button>
			<Main footer={<Footer name={name} />} />
		</ColorContext.Provider>
	)
}