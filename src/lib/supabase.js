import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const isConfigured = supabaseUrl && supabaseAnonKey &&
    supabaseUrl !== 'your-supabase-url-here' &&
    supabaseAnonKey !== 'your-anon-key-here'

if (!isConfigured) {
    console.warn('Supabase credentials not configured. Update your .env file.')
}

export const supabase = isConfigured
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

/**
 * Add email to waitlist
 * @param {string} email 
 * @returns {{ success: boolean, error?: string }}
 */
export async function addToWaitlist(email) {
    if (!supabase) {
        return { success: false, error: 'Supabase not configured' }
    }

    const { error } = await supabase
        .from('waitlist')
        .insert([{ email: email.toLowerCase().trim() }])

    if (error) {
        if (error.code === '23505') {
            // Unique constraint violation - email already exists
            return { success: true } // Still show success to user
        }
        console.error('Waitlist error:', error)
        return { success: false, error: error.message }
    }

    return { success: true }
}
