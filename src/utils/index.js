export default function formatNumber(value, prefix='', thousands_separator=',') {
    const newValue = normalizeValue(value);

    if (value.isNaN) {
        return NaN;
    }

    return prefix + separateThousands(newValue.toFixed(2), thousands_separator)
}

function normalizeValue(value) {
    if (typeof value === 'string') {
        return parseFloat(value)
    }

    return value;
}

function separateThousands(x, s) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, s);
}

