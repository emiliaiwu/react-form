import React, { useState } from 'react';

const App = () => {
	const [text, setText] = useState('');
	const [displayText, setDisplayText] = useState([]);

	const handleSubmit = (event) => {
		event.preventDefault();
		setDisplayText([...displayText, text]);
		setText('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<textarea
				value={text}
				onChange={(event) => setText(event.target.value)}
			/>
			<button type='submit'>Add text</button>
			{displayText.map((displayText, index) => (
				<div key={index}>{displayText}</div>
			))}
		</form>
	);
};

export default App;
