import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, X } from 'lucide-react'
import { addToWaitlist } from '../../lib/supabase'
import './WaitlistForm.css'

export default function WaitlistForm({
    placeholder = "Enter your email",
    buttonText = "Get Early Access",
    className = "",
    noteText = "Join 2,000+ teams waiting for access. No spam, ever.",
    subNoteText = "",
    showNote = true
}) {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('idle') // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('')
    const [showTooltip, setShowTooltip] = useState(false)
    const inputRef = useRef(null)

    useEffect(() => {
        const handleFocusWaitlist = () => {
            inputRef.current?.focus()
            setShowTooltip(true)
            setTimeout(() => setShowTooltip(false), 3000)
        }

        window.addEventListener('focus-waitlist', handleFocusWaitlist)
        return () => window.removeEventListener('focus-waitlist', handleFocusWaitlist)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email) return

        setStatus('loading')
        setErrorMessage('')

        try {
            const result = await addToWaitlist(email)

            if (result.success) {
                setStatus('success')
                setEmail('')
            } else {
                setStatus('error')
                setErrorMessage(result.error || 'Something went wrong. Please try again.')
            }
        } catch (err) {
            setStatus('error')
            setErrorMessage('Failed to connect. Please check your internet.')
        }
    }

    return (
        <div className={`waitlist-form-container ${className}`}>
            <AnimatePresence mode="wait">
                {status === 'success' ? (
                    <motion.div
                        className="waitlist-success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        key="success"
                    >
                        <div className="waitlist-success-icon">
                            <Check size={20} />
                        </div>
                        <div className="waitlist-success-content">
                            <span className="waitlist-success-title">You're on the list!</span>
                            <span className="waitlist-success-desc">We'll be in touch soon.</span>
                        </div>
                    </motion.div>
                ) : (
                    <motion.form
                        className="waitlist-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key="form"
                    >
                        <div className="waitlist-input-wrapper">
                            {showTooltip && (
                                <motion.div
                                    className="waitlist-tooltip"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                >
                                    Enter your email here
                                </motion.div>
                            )}
                            <input
                                ref={inputRef}
                                type="email"
                                className="waitlist-input"
                                placeholder={placeholder}
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    if (showTooltip) setShowTooltip(false)
                                }}
                                disabled={status === 'loading'}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="waitlist-btn btn btn--primary"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? (
                                <span className="waitlist-spinner" />
                            ) : (
                                <>
                                    {buttonText}
                                    <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>

            {status === 'error' && (
                <motion.div
                    className="waitlist-error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <X size={14} />
                    {errorMessage}
                </motion.div>
            )}

            {showNote && (
                <div className="waitlist-note-wrap">
                    <p className="waitlist-note">{noteText}</p>
                    {subNoteText && <p className="waitlist-subnote">{subNoteText}</p>}
                </div>
            )}
        </div>
    )
}
