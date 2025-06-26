//
// const sizesButtons =
//     document.querySelectorAll('#sizes input[type=radio]');
const Mers = document.querySelector('.mers')
const Bmw = document.querySelector('.bmw')
const Lexus = document.querySelector('.lexus')
const carsButtons = document.querySelectorAll('#cars input[type=radio]')
const tittle = document.querySelector('.tittle')
console.log(carsButtons)

for (const cars of carsButtons) {
    cars.addEventListener('change', (Event) => {
        const car= Event.target.id.slice(-1).toUpperCase();
        switch (car) {
            case 'F':
                Bmw.style.display = 'flex';
                Mers.style.display = 'none';
                Lexus.style.display = 'none';
                tittle.style.display = 'none';
                break
            case 'S':
                Mers.style.display = 'flex';
                Bmw.style.display = 'none';
                Lexus.style.display = 'none';
                tittle.style.display = 'none';

                break
            case 'T':
                Mers.style.display = 'none';
                Bmw.style.display = 'none';
                Lexus.style.display = 'flex';
                tittle.style.display = 'none';

        }
    })
    console.log(cars)
}

const carsItem = new Event("change")
carsItem[0].dispatchEvent(Bmw)
carsItem[0].checked = true;