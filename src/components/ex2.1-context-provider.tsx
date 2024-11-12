import { createContext, memo, useContext, useMemo, useState } from 'react'

const FooterContext = createContext<{
	color: string
	name: string
	setColor: (color: string) => void
	setName: (name: string) => void
} | null>(null)

function useFooter() {
	const context = useContext(FooterContext)
	if (!context) throw new Error('FooterContext not found')
	return context
}

const Footer = memo(function FooterImpl() {
	const { color, name } = useFooter()
	return (
		<footer style={{ color }}>
			I am the ({color}) footer, {name || 'Unnamed'}
		</footer>
	)
})

// 💰 This provider component encapsulate the color and name state
// thus, when update these, the App component won't re-render, thus its children (Main)
function FooterProvider({ children }: { children: React.ReactNode }) {

	const [color, setColor] = useState('black')
	const [name, setName] = useState('')

	const value = useMemo(() => ({ color, name, setColor, setName }), [color, name])

	return (
		<FooterContext.Provider value={value}>
			{children}
		</FooterContext.Provider>
	)
}

function Main({ footer }: { footer: React.ReactNode }) {
	const [count, setCount] = useState(0)
	const increment = () => setCount((c) => c + 1)
	return (
		<div>
			<button onClick={increment}>The count is {count}</button>
			{footer}
		</div>
	)
}

function FooterSetters() {

	const {setName, setColor} = useFooter()

	return ( 
		<>
			<div>
				<p>Set the footer color:</p>
				<div style={{ display: 'flex', gap: 4 }}>
					<button onClick={() => setColor('black')}>Black</button>
					<button onClick={() => setColor('blue')}>Blue</button>
					<button onClick={() => setColor('green')}>Green</button>
				</div>
			</div>
			<div>
				<p>Set the footer name:</p>
				<label>
					Name:
					<input onChange={(e) => setName(e.currentTarget.value)} />
				</label>
			</div>
		</>
	)
}

export function App() {
	const [appCount, setAppCount] = useState(0)

	// ✋ see issue in ex2, the Main is re-rendered when the update the color
	return (
		<FooterProvider>
				<FooterSetters />
				<button className='mb-5' onClick={() => setAppCount((c) => c + 1)}>
					The app count is {appCount}
				</button>
				<Main footer={<Footer />} />
		</FooterProvider>
	)
}