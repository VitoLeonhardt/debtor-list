//@flow

export const formatter = new Intl.NumberFormat('de', {
    style: 'decimal',
    minimumFractionDigits: 2
});

export const backToDefault = (str: string) => {
    const dotless = str.split(".").join("");
    const backToDot = dotless.replace(",", ".");
    if(isNaN(backToDot)) return NaN;
    
    return parseFloat(backToDot);
}