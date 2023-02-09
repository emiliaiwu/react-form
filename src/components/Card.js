import React from 'react';
import image from '../asset/4.png';

function Card(props) {
	const { formData } = props;
	const fullName = formData.fullName || props.fullName;
	const jobTitle = formData.jobTitle || props.jobTitle;
	const bio = formData.bio || props.bio;
	const email = formData.email || props.email;
	const phone = formData.phone || props.phone;
	const remote = formData.remote || props.remote;
	const employment = formData.employment || props.employment;

	return (
		<div className='card'>
			<img src={image} alt='dp' />
			<div className='name'>
				<h2>{fullName}</h2>
				<p>{jobTitle}</p>
			</div>
			<p className='bio'>{bio}</p>
			<div className='email-phoneNum'>
				<span className='email'>{email}</span>
				<span className='phone'>{phone}</span>
			</div>
			<div className='remote-employment'>
				<p>{remote ? 'Remote' : 'In-person'}</p>
				<p>{employment}</p>
			</div>
		</div>
	);
}

Card.defaultProps = {
	fullName: 'Mary Lester',
	jobTitle: 'Front-end Developer',
	phone: '+2435678900',
	email: 'marylester@gmail.com',
	bio: 'A developer with a passion for designing beautiful and intuitive user interfaces',
	remote: true,
	employment: 'Full-time',
};

export default Card;
