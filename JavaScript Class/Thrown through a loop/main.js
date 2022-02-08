import input from 'input';

function pyramid(char, maxHeight) {
    for (let height = 1; height <= maxHeight; height += 1) {
        let output = '';
        for (let len = 0; len < height; len += 1) {
            output += char
        }
        console.log(output);
    }
}

async function main() {
    const char = await input.text('What character do you want to use?');
    const maxHeight = await input.text('How tall do you want the pyramid');

    pyramid(char, maxHeight);
}

main();