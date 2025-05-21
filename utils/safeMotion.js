// Utility to safely apply motion animations
import { useMotion } from '@vueuse/motion';

export const applySafeMotion = (ref, options) => {
  if (!ref || !ref.value) return null;
  
  try {
    return useMotion(ref, options);
  } catch (error) {
    console.error('Error applying motion:', error);
    return null;
  }
};
