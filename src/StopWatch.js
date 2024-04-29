import { Button } from "react-bootstrap";
import { useState } from "react";
import secAudio from './Assets/secAudio.mp3';
import minSound from './Assets/minSound.mp3';

let temp;
let ms = 0;

function StopWatch() {
    let [start, setStart] = useState(0);
    let [started, setStarted] = useState(false);
    let [sec, setSec] = useState(0);
    let [min, setMin] = useState(0);

    function startHandler() {
        temp = setInterval(() => {
            setStart((x) => x + 1);
            ms = ms + 1;
            if (ms == 100) {
                new Audio(secAudio).play();
                setStart(0);
                setSec((y) => y + 1);
                sec = sec + 1;
                console.log("ms = ", ms);
                ms = 0;
            }
            if (sec == 60) {
                new Audio(minSound).play();
                setSec(0);
                setMin((z) => z + 1);
                sec = 0;
                console.log("sec = ", sec);
            }
        }, 10);

        setStarted(true);
    }


    function stopHandler() {
        clearInterval(temp);
        setStarted(false);
    }
    function resetHandler() {
        setStart(0);
        setSec(0);
        setMin(0);
        clearInterval(temp);
        setStarted(false);
    }



    return (
        <div>
            <div className="container">
                <h1>StopWatch</h1>
                <br></br>
                <h1 id="timer">{min} : {sec} : {start} </h1>
                <br></br><br></br>
                <div className="stopwatch-btn">
                    <Button onClick={startHandler} disabled={started} id="start">Start</Button>
                    <Button onClick={stopHandler}>Stop</Button>
                    <Button onClick={resetHandler} id="reset">Reset</Button>

                </div>

            </div>
        </div>
    )
}
export default StopWatch;