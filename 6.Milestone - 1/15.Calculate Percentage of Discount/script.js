// calculate discount percentage amount on the basis of discount price
const originalPrice = 1000
const discountPrice = 800

const calculateDiscountPercentage = (originalPrice, discountPrice) => {
    let discountAmount = originalPrice - discountPrice
    let discountPercentage = discountAmount / originalPrice * 100
    return discountPercentage.toFixed(2) + ' %'
}

let productDiscountPercentage = calculateDiscountPercentage(originalPrice, discountPrice)
console.log(productDiscountPercentage);



// calculate discount price on the basis of discount percentage
const discountPercentage = 20

const calculateDiscountPrice = (originalPrice, discountPercentage) => {
    let discountAmount = originalPrice * discountPercentage / 100
    let discountPrice = originalPrice - discountAmount
    return discountPrice.toFixed(2) + ' Rs'
}

const productDiscountPrice = calculateDiscountPrice(originalPrice, discountPercentage)
console.log(productDiscountPrice);