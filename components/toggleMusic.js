import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { FaCirclePlay, FaCirclePause } from 'react-icons/fa6'
import { useState, useRef, useEffect } from 'react'

const ToggleMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false) 
    const audioRef = useRef(null)
    const iconColor = useColorModeValue('black', 'white')

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play().catch(error => {
                console.error('Error playing audio:', error)
            })
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])

    const handleToggle = () => {
        setIsPlaying(prevState => !prevState)
    }

    return (
        <>
            <audio ref={audioRef} src="/rsc/song.mp3" />
            <AnimatePresence mode='wait' initial={false}>
                <motion.div
                    key={isPlaying ? 'pause' : 'play'}
                    initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <IconButton
                        aria-label={isPlaying ? 'Pause music' : 'Play music'}
                        icon={isPlaying ? <FaCirclePause /> : <FaCirclePlay />}
                        onClick={handleToggle}
                        color={iconColor}
                        fontSize="2xl"
                        variant="ghost"
                        _hover={{ bg: isPlaying ? 'red.300' : 'green.300' }}
                    />
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default ToggleMusic