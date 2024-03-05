import { MutableRefObject, ReactElement, useEffect, useRef } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import gsap from 'gsap';

import styles from './roundedButton.module.css';

export const RoundedButton = ({text, backgroundColor="#455CE9", onClick, disabled = false, ...attributes}:{text:string | ReactElement, backgroundColor:string, onClick: () => void, disabled?:boolean}) => {

    const circle:MutableRefObject<any> = useRef(null);

    let timeline:MutableRefObject<any> = useRef(null);

    let timeoutId:any = null;
    useEffect( () => {
        timeline.current = gsap.timeline({paused: true})
        timeline.current
        .to(circle.current, {top: "-25%", width: "150%", duration: 0.4, ease: "power3.in"}, "enter")
        .to(circle.current, {top: "-150%", width: "125%", duration: 0.25}, "exit")
    }, []);

    const manageMouseEnter = () => {
        if(timeoutId) clearTimeout(timeoutId)
        timeline.current.tweenFromTo('enter', 'exit');
    }

    const manageMouseLeave = () => {
        timeoutId = setTimeout( () => {
            timeline.current.play();
        }, 300)
    }

    return (
        <button
            className={styles.roundedButton}
            style={{overflow: "hidden"}}
            onMouseEnter={() => {manageMouseEnter()}}
            onMouseLeave={() => {manageMouseLeave()}}
            {...attributes}
            onClick={onClick}
            disabled={disabled}
        >
            <p>{text}</p>
            <IoIosArrowForward size={24} />
        
        <div ref={circle} style={{backgroundColor}} className={styles.circle}></div>
        </button>
    )
}