export default function fotmatCurrency (num){
    return '$' + Number(num.toFixed(1)).toLocaleString() + ' '
}