import { SELECT_METRIC } from "../actions";

const initialState = {
	selectedMetric: 'oilTemp'
};
export default (state = initialState, action) => {
	switch (action.type) {
		case SELECT_METRIC:
			return { selectedMetric: action.payload }
		default:
			return state;
	}
};
