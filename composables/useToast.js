import { ref } from 'vue'

const TOAST_LIMIT = 5
const TOAST_REMOVE_DELAY = 5000

// Counter for generating unique IDs
let count = 0

// Generate unique ID for each toast
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

// Create reactive state for toasts
const toasts = ref([])

// Timeouts for auto-dismissing toasts
const toastTimeouts = new Map()

// Add toast to the remove queue after a delay
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    removeToast(toastId)
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

// Remove toast from the state
const removeToast = (toastId) => {
  toasts.value = toasts.value.filter(t => t.id !== toastId)
}

// Dismiss toast (sets up for removal)
const dismissToast = (toastId) => {
  if (toastId) {
    addToRemoveQueue(toastId)
  } else {
    toasts.value.forEach(toast => {
      addToRemoveQueue(toast.id)
    })
  }
}

// Toast function
export function useToast() {
  // Create a new toast
  const toast = (props) => {
    const id = genId()
    
    const newToast = {
      id,
      ...props,
    }
    
    // Add to toasts
    toasts.value = [newToast, ...toasts.value].slice(0, TOAST_LIMIT)
    
    // Set auto-dismiss
    addToRemoveQueue(id)
    
    return {
      id,
      dismiss: () => dismissToast(id),
      update: (newProps) => {
        toasts.value = toasts.value.map(t => 
          t.id === id ? { ...t, ...newProps } : t
        )
      }
    }
  }
  
  return {
    toasts,
    toast,
    dismiss: dismissToast,
  }
}

export const toast = (props) => {
  const { toast: toastFn } = useToast()
  return toastFn(props)
}