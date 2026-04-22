import { useEffect, useRef } from 'react';

export default function useFocusTrap(isActive, onClose) {
    const modalRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        if (isActive) {
            // Save the element that triggered the modal
            triggerRef.current = document.activeElement;

            const focusableElements = modalRef.current.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    onClose();
                    e.preventDefault();
                }
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            lastElement.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            firstElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            };

            document.addEventListener('keydown', handleKeyDown);
            if (firstElement) firstElement.focus();

            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                if (triggerRef.current) triggerRef.current.focus();
            };
        }
    }, [isActive, onClose]);

    return modalRef;
}