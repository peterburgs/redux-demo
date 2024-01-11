import { CounterActionType } from "../../typing/constants";

const initialState = {
	counter: 0,
};

export const counterReducer = (
	state: { counter: number } = initialState,
	action: { type: CounterActionType; payload: any },
) => {
	switch (action.type) {
		case CounterActionType.Increase: {
			return {
				counter: state.counter + action.payload.counter,
			};
		}
		case CounterActionType.Decrease: {
			return {
				counter: state.counter - action.payload.counter,
			};
		}
		default: {
			return state;
		}
	}
};
