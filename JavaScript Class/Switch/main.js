import input from 'input'

function drive(direction) {
    switch(direction) {
        case 'left':
            console.log('Turning left');
            break;
        case 'right':
            console.log('Turning right');
            break;
        case 'forward':
            console.log('Driving forward');
            break;
        case'backward':
            console.log('Driving backward');
            break
        default:
            console.log(`You are driving ${direction}!`);
    }
}

async function main() {
    const resp = await input.text('Enter a direction');
    drive(resp);
}

main();