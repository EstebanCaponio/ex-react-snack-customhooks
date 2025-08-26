import { useEffect, useState } from "react";

export default function useCustomPointer(defaultValue = '👾') {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const mouseMove = e => {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        document.addEventListener('mousemove', mouseMove);
        return () => document.removeEventListener('mousemove', mouseMove);
    }, [])

    return (
        <div style={{
            position: 'fixed',
            top: position.y,
            left: position.x,
            transform: 'translate(-50%, -50%)',
            cursor: 'none',
            fontSize: '30px'
        }}>
            {defaultValue}
        </div>
    )
}