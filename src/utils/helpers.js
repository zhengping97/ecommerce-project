export const formatPrice = (number) => {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'SGD',
    }).format(number / 100)
}

export const getUniqueValues = () => { }
