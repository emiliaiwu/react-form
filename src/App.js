import './App.css';
import { useState } from "react"
import Form from './components/Form';
import Card from './components/Card';

function App() {

  const [formData, setFormData] = useState({
		fullName: '',
		jobTitle: '',
		phone: '',
		email: '',
		bio: '',
		remote: false,
	  	employment: "",
  });
	
	
	function handleChange(e) {
		const { name, value, type, checked } = e.target;
		setFormData(prevFormData => {
			return {
				...prevFormData,
				[name]: type === "checkbox" ? checked : value
			}
		})
		
	}

	function submitForm(e) {
		e.preventDefault()

		console.log(formData)
	}
  
  return (
		<div className='App'>
			<Form
				formData={formData}
				fullName={formData.fullName}
				jobTitle={formData.jobTitle}
				bio={formData.bio}
				phone={formData.phone}
				email={formData.email}
				remote={formData.remote}
				employment={formData.employment}
				handleChange={handleChange}
				handleSubmit={submitForm}
			/>
			<Card
				formData={formData}
			/>
		</div>
	);
}

export default App;
