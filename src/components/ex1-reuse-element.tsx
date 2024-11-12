import { useState } from "react"

function Footer() {
	return <footer>I am the footer</footer>
}

/** 
 * init footer here so it never changes, thus, never rerendered
 * 
 * 😅 However, we can't pass any props
 * */ 
const footer = <Footer/>

export function ReuseElement() {
	const [count, setCount] = useState(0)
	const increment = () => setCount((c) => c + 1)
	return (
		<div>
			<button onClick={increment}>The count is {count}</button>
            {/* This footer never rerendered */}
			{footer}
		</div>
	)
}
