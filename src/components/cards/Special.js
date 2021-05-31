/* eslint-disable */

import { CountdownCircleTimer } from "react-countdown-circle-timer";
function Special(props) {
  const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 86400;

  const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6,
  };

  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };

  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 1043248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
  const getTimeDays = (time) => (time / daySeconds) | 0;

  const UrgeWithPleasureComponent = () => (
    <CountdownCircleTimer
      isPlaying
      duration={10}
      colors={[
        ["#004777", 0.33],
        ["#F7B801", 0.33],
        ["#A30000", 0.33],
      ]}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
  const { title, subHeading, img } = props.card;
  return (
    <div>
      <div className="cursor-pointer h-feature">
        <div className="relative flex items-center h-full">
          <img
            src={img}
            alt="feature"
            className="rounded-md w-full h-full object-cover"
          />
          <div className="absolute w-full h-full  bg-opacity-70 z-10 bg-gradient-to-t from from-black"></div>
          <div className="absolute px-4 py-4 w-full h-full flex flex-col items-center justify-center text-sm text-gray-100 font-medium z-20">
            <div className="text-center">
              <h2 className="xl:text-3xl lg:text-xl text-3xl ">{title}</h2>
              <h3 className="xl:text-xl lg:text-base text-xl">{subHeading}</h3>
            </div>
            <div className="absolute bottom-0 flex w-full">
              <CountdownCircleTimer
                {...timerProps}
                colors={[["#f8f8ff"]]}
                duration={daysDuration}
                initialRemainingTime={remainingTime}
              >
                {({ elapsedTime }) =>
                  renderTime("days", getTimeDays(daysDuration - elapsedTime))
                }
              </CountdownCircleTimer>
              <CountdownCircleTimer
                {...timerProps}
                colors={[["#f8f8ff"]]}
                duration={daySeconds}
                initialRemainingTime={remainingTime % daySeconds}
                onComplete={(totalElapsedTime) => [
                  remainingTime - totalElapsedTime > hourSeconds,
                ]}
              >
                {({ elapsedTime }) =>
                  renderTime("hours", getTimeHours(daySeconds - elapsedTime))
                }
              </CountdownCircleTimer>
              <CountdownCircleTimer
                {...timerProps}
                colors={[["#f8f8ff"]]}
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => [
                  remainingTime - totalElapsedTime > minuteSeconds,
                ]}
              >
                {({ elapsedTime }) =>
                  renderTime(
                    "minutes",
                    getTimeMinutes(hourSeconds - elapsedTime)
                  )
                }
              </CountdownCircleTimer>
              <CountdownCircleTimer
                {...timerProps}
                colors={[["#f8f8ff"]]}
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => [
                  remainingTime - totalElapsedTime > 0,
                ]}
              >
                {({ elapsedTime }) =>
                  renderTime("seconds", getTimeSeconds(elapsedTime))
                }
              </CountdownCircleTimer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Special;
