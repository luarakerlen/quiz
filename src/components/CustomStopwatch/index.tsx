import React, { useEffect, useState } from 'react';
import theme from '../../global/styles/theme';
const { Stopwatch, Timer } = require('react-native-stopwatch-timer');

export function useCustomStopwatch() {
  const [appStarted, setAppStarted] = useState(false);
  const [start, setStart] = useState(false);
	const [currentTime, setCurrentTime] = useState('00:00:00');

  function saveCurrentTime(time: string) {
    if(!start && appStarted) {
      setCurrentTime(time);
    }
  }

	const CustomStopwatch = (
		<Stopwatch
			start={start}
			options={options}
			getTime={(time: string) => {
				saveCurrentTime(time);
			}}
		/>
	);

  useEffect(() => {
		setStart(true);
	}, []);

	return {
		currentTime,
		CustomStopwatch,
	};
}

const options = {
	container: {
		backgroundColor: 'none',
	},
	text: {
		fontSize: 18,
		color: theme.colors.text,
	},
};
