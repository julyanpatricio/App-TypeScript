interface stateI {
	counter: number;
}

const initialState: stateI = {
	counter: 1,
};

interface actionI {
	type: string;
}

export default function reducer(state: stateI = initialState, action: actionI) {
	return state;
}