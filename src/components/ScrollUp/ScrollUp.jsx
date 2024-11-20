import './ScrollUp.css'
import { useEffect, useState } from 'react'

const ScrollUp = () => {
    const [showScroll, setShowScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageXOffset

            if(scrollY > 560 && !showScroll){
                setShowScroll(true)
            }else if(scrollY <=560 && showScroll){
                setShowScroll(false)
            }
        }

        window.addEventListener('scroll', handleScroll)        

        return () => window.removeEventListener('scroll', handleScroll)
    }, [showScroll])

    return (
        <a href="#home" className={showScroll ? 'scrollup show-scroll' : 'scrollup'}>
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}

export default ScrollUp
