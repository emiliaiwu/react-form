import React from 'react'

function Form(props) {

  return (
		<form className='form' onSubmit={props.handleSubmit}>
			<input
				type='text'
				placeholder='Full Name'
				name='fullName'
				onChange={props.handleChange}
				value={props.fullName}
			/>
			<input
				type='tel'
				placeholder='Phone Number'
				name='phone'
				onChange={props.handleChange}
				value={props.phone}
			/>
			<input
				type='email'
				placeholder='Email'
				name='email'
				onChange={props.handleChange}
				value={props.email}
			/>

			<label htmlFor='jobTitle'>What's your job title?</label>
			<select
				id='jobTitle'
				name='jobTitle'
				onChange={props.handleChange}
				value={props.jobTitle}
			>
				<option className='option' value='Front-end Developer'>
					Front-end Developer
				</option>
				<option className='option' value='UX Designer'>
					UX Designer
				</option>
				<option className='option' value='Back-end Developer'>
					Back-end Developer
				</option>
				<option className='option' value='Full-Stack Developer'>
					Full-stack Developer
				</option>
				<option className='option' value='Systems analyst'>
					Systems Analyst
				</option>
				<option className='option' value='Security engineer'>
					Security Engineer
				</option>
			</select>

			<label htmlFor='bio'>A little about you</label>
			<textarea
				placeholder='I have a strong passion for technology'
				name='bio'
				id='bio'
				onChange={props.handleChange}
				value={props.bio}
			/>

			<input
				type='checkbox'
				name='remote'
				id='remote'
				checked={props.remote}
				onChange={props.handleChange}
			/>
			<label htmlFor='remote'>Are you open for Remote jobs?</label>

			<fieldset>
				<legend>Current Employment Status</legend>
				<input
					type='radio'
					name='employment'
					id='unemployed'
					value='Unemployed'
					checked={props.employment === 'Unemployed'}
					onChange={props.handleChange}
				/>
				<label htmlFor='unemployed'>Unemployed</label>
				<br />
				<input
					type='radio'
					name='employment'
					id='part-time'
					value='Part-time'
					checked={props.employment === 'Part-time'}
					onChange={props.handleChange}
				/>
				<label htmlFor='part-time'>Part-time</label>
				<br />
				<input
					type='radio'
					name='employment'
					id='full-time'
					value='Full-time'
					checked={props.employment === 'Full-time'}
					onChange={props.handleChange}
				/>
				<label htmlFor='full-time'>Full-time</label>
				<br />
				<input
					type='radio'
					name='employment'
					id='freelancer'
					value='Freelancer'
					checked={props.employment === 'Freelancer'}
					onChange={props.handleChange}
				/>
				<label htmlFor='freelancer'>Freelancer</label>
			</fieldset>
			<button>Submit</button>
		</form>
	);
}



export default Form