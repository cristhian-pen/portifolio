import Lottie from "react-lottie";

import animationData from './20578-isometric-website-marketing-design.json';


export default function Work({ height, width }) {

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