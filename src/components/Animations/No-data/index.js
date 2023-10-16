import Lottie from "react-lottie";
import animationData from './no-data.json'



export default function NoData({ height, width }) {
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
                speed={1}
                isStopped={false}
                isPaused={false}
                isClickToPauseDisabled={true}
            />
        </>
    );
}