/**
 * Capitalize words by delineator.
 *
 * @param {string} str        - Word or words
 * @param {string} delineator - Character to delinate words from input (defaults to ' ')
 */
export function capitalizeFirstLetter(str: string, delineator = ' '): string {
    // can add .toLowerCase() if there's a need to clean formatting
    const words = str.trim().split(delineator);

    if (words.length === 1)
        return words[0].charAt(0).toUpperCase() + words[0].slice(1);

    let capitalizedWords: string = '';
    for (let i = 0; i < words.length; i += 1) {
        const word = words[i];

        capitalizedWords += word.charAt(0).toUpperCase() + word.slice(1);

        if (i + 1 < words.length) {
            capitalizedWords += delineator;
        }
    }
    return capitalizedWords;
}
