// Tiny sound engine for CSS Quest.
//
// It uses the Web Audio API and generated tones, so the game does not need
// audio files or any extra library. The AudioContext is created only after
// a user gesture (a click), which is what browsers require.

let audioContext = null
let enabled = false

export function setSoundEnabled(value) {
  enabled = Boolean(value)
  if (enabled) {
    ensureContext()
  }
}

export function isSoundEnabled() {
  return enabled
}

function ensureContext() {
  if (typeof window === 'undefined') return null
  const AudioContextClass = window.AudioContext || window.webkitAudioContext
  if (!AudioContextClass) return null
  if (!audioContext) audioContext = new AudioContextClass()
  if (audioContext.state === 'suspended') {
    audioContext.resume().catch(() => {})
  }
  return audioContext
}

function playTone(frequency, startOffset, duration, type = 'sine', volume = 0.05) {
  if (!enabled) return
  const context = ensureContext()
  if (!context) return

  const oscillator = context.createOscillator()
  const gain = context.createGain()
  const start = context.currentTime + startOffset
  const end = start + duration

  oscillator.type = type
  oscillator.frequency.setValueAtTime(frequency, start)
  gain.gain.setValueAtTime(0.0001, start)
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.015)
  gain.gain.exponentialRampToValueAtTime(0.0001, end)

  oscillator.connect(gain)
  gain.connect(context.destination)
  oscillator.start(start)
  oscillator.stop(end + 0.02)
}

export function playError() {
  playTone(180, 0, 0.12, 'sawtooth', 0.035)
  playTone(140, 0.1, 0.16, 'sawtooth', 0.03)
}

export function playSuccess() {
  playTone(523.25, 0, 0.12, 'triangle', 0.05)
  playTone(659.25, 0.1, 0.12, 'triangle', 0.05)
  playTone(783.99, 0.2, 0.22, 'triangle', 0.055)
}

export function playStar(starNumber = 1) {
  const notes = [659.25, 783.99, 1046.5]
  const frequency = notes[Math.max(0, Math.min(notes.length - 1, starNumber - 1))]
  playTone(frequency, 0, 0.12, 'sine', 0.04)
}

export function playAchievement() {
  playTone(880, 0, 0.1, 'square', 0.025)
  playTone(1174.66, 0.09, 0.18, 'square', 0.025)
}

export function playRankUp() {
  playTone(523.25, 0, 0.1, 'triangle', 0.04)
  playTone(659.25, 0.08, 0.1, 'triangle', 0.04)
  playTone(783.99, 0.16, 0.1, 'triangle', 0.04)
  playTone(1046.5, 0.24, 0.28, 'triangle', 0.05)
}

export function playClick() {
  playTone(420, 0, 0.045, 'square', 0.02)
}
