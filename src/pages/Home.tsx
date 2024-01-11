import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSelector } from "../redux/selectors/counterSelector";
import { decreaseAction, increaseAction } from "../redux/actions/counterAction";

const Home: FC = () => {
	const { counter } = useSelector(counterSelector);

	const dispatch = useDispatch();
	const stableDispatch = useCallback(dispatch, [dispatch]);

	const handleIncrease = () => {
		stableDispatch(increaseAction());
	};
	const handleDecrease = () => {
		stableDispatch(decreaseAction());
	};

	return (
		<div>
			<h1>Current counter: {counter}</h1>
			<div>
				<button onClick={handleIncrease}>Increase</button>
			</div>
			<div>
				<button onClick={handleDecrease}>Decrease</button>
			</div>
		</div>
	);
};

export default Home;
