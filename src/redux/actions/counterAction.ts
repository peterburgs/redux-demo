import { CounterActionType } from "../../typing/constants";

export const increaseAction = () => {
	return {
		type: CounterActionType.Increase,
		payload: {
			counter: 1,
		},
	};
};

export const decreaseAction = () => {
	return {
		type: CounterActionType.Decrease,
		payload: {
			counter: 1,
		},
	};
};
