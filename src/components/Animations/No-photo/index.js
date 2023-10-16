import Lottie from "react-lottie";
import animationData from './profile-animation.json';

export default function NoPhoto({ height, width }) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <>
            <Lottie
                options={defaultOptions}
                height={height}
                width={width}
                isStopped={false}
                isPaused={false}
                isClickToPauseDisabled={true}
            />
        </>
    );
}