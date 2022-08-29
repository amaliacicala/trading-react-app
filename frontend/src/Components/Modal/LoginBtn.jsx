export function LoginBtnActivate({ setLogin }) {
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
				setLogin(true);
			}}
		>
			Login
		</button>
	);
}

export function LoginBtnDeactivate({ setLogin }) {
	return (
		<button
			className='modal-button'
			style={{
				backgroundColor: 'transparent',
				fontFamily: 'DM Mono',
				fontWeight: 'bold',
			}}
			onClick={() => {
				setLogin(true);
			}}
		>
			Login
		</button>
	);
}
