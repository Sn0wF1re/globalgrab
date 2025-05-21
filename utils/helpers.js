/**
 * Combines multiple class names into a single string
 * @param {...string} classes - Class names to combine
 * @returns {string} - Combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * Format price to display as currency
 * @param {number} price - The price to format
 * @param {string} currency - The currency code
 * @returns {string} - Formatted price
 */
export function formatPrice(price, currency = 'KES') {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency,
  }).format(price)
}