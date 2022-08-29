export function SignupBtnActivate({ setLogin }) {
	return (
		<button
			className='modal-button'
			style={{
				backgroundColor: 'transparent',
				fontFamily: 'DM Mono',
				fontWeight: 'bold',
				color: '#c5feaa',
			}}
			onClick={() => {
				setLogin(false);
			}}
		>
			Sign Up
		</button>
	);
}

export function SignupBtnDeactivate({ setLogin }) {
	return (
		<button
			className='modal-button'
			style={{
				backgroundColor: 'transparent',
				fontFamily: 'DM Mono',
				fontWeight: 'bold',
			}}
			onClick={() => {
				setLogin(false);
			}}
		>
			Sign Up
		</button>
	);
}
