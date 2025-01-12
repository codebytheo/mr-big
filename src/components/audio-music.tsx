'use client'

import { useRef, useState } from "react";
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";

const AudioMusic = () => {
  const [isButtonClick, setIsButtonClick] = useState<boolean>(false);
  const music = useRef<HTMLAudioElement>(null)

  const handleAudio = () => {
    if(isButtonClick === true) {
      setIsButtonClick(false)
      music?.current?.pause()
    }
    if(isButtonClick === false) {
      setIsButtonClick(true);
      music?.current?.play();
    }
  }

  return (
    <div className="fixed top-8 left-10 z-50">
      <button className="btn" id="playAudio" onClick={handleAudio} type="button">
      {isButtonClick ? (
        <IoVolumeHigh size={25} color="white" />
      ) : (
        <IoVolumeMute size={25} color="white" />
      )}
      </button>
      <audio id='audio-mr-big' loop={true} ref={music}>
        <source src='/music/mr.big-green-tinted sixties mind.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default AudioMusic;
