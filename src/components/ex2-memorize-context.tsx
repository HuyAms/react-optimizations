import { createContext, memo, useContext, useMemo, useState } from 'react'

const FooterContext = createContext<{
	color: string
	name: string
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

function FooterSetters({
	setName,
	setColor,
}: {
	setName: (name: string) => void
	setColor: (color: string) => void
}) {
	return (
		<>
			<div>
				<p>Set the footer color:</p>
                {/* ✋ The issue here: when we change the footer color */}
                {/* since it updates the state in App, it re-renders the App and every children (eg: Main) */}
                {/* solution in ex2.1 */}
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
	const [color, setColor] = useState('black')
	const [name, setName] = useState('')
	// ✋ The issue here is that when we update the appCount, the context value change
    // thus, the Footer component - consumer will rerender (reason: context changed)
	// const value = { color, name }

    // 💰 To solve this, we can memorize the context value
    const value = useMemo(() => ({ color, name }), [color, name])

	return (
		<FooterContext.Provider value={value}>
			<div>
				<FooterSetters setName={setName} setColor={setColor} />
				<button className='mb-5' onClick={() => setAppCount((c) => c + 1)}>
					The app count is {appCount}
				</button>
				<Main footer={<Footer />} />
			</div>
		</FooterContext.Provider>
	)
}