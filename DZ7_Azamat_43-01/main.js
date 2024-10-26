/// задание №1
const cars = {

    model: 'sportCars',
    color: "gray",
    wheels: 4,

}
class Cars {
    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }



}



class Toyota_Supra extends Cars {
    constructor(options) {
        super(options);
        this.color = options.color
        this.wheels = options.wheels
        this.horsePower = options.horsePower
        this.carStatus = options.carStatus

    }

}



const toyotaSupra = new Toyota_Supra({
    model: 'sportCars',
    color: "black",
    wheels: 4,
    horsePower: 324,
    carStatus: 'машина заведена'
})



class Porsche_911 extends Cars {
    constructor(options) {
        super(options);
        this.color = options.color
        this.wheels = options.wheels
        this.horsePower = options.horsePower
        this.carStatus = options.carStatus
    }



}



const porsche_911 = new Porsche_911({
    model: 'sportCars',
    color: "red",
    wheels: 4,
    horsePower: 525,
    carStatus: 'машина заведена'
})

class Chevrolet_Camaro_SS extends Cars {
    constructor(options) {
        super(options);
        this.color = options.color
        this.wheels = options.wheels
        this.horsePower = options.horsePower
        this.carStatus = options.carStatus

    }



}


const chevrolet_Camaro_SS = new Chevrolet_Camaro_SS({
    model: 'sportCars',
    color: "orange",
    wheels: 4,
    horsePower: 445,
    carStatus: 'машина заведена'
})

console.log(chevrolet_Camaro_SS)
console.log(toyotaSupra)
console.log(porsche_911)





/// задание №2
class TrafficLight {
    constructor() {
        this.redLight = document.getElementById("red-light");
        this.yellowLight = document.getElementById("yellow-light");
        this.greenLight = document.getElementById("green-light");
        this.message = document.getElementById("message");
    }

    changeLight() {
        const color = prompt("Введите цвет (Красный/Зеленый)").toLowerCase();

        // Сброс всех огней
        this.redLight.classList.remove("active");
        this.yellowLight.classList.remove("active");
        this.greenLight.classList.remove("active");
        this.message.textContent = "";

        if (color === "красный") {
            this.redLight.classList.add("active");
            this.message.textContent = "STOP";
        } else if (color === "зеленый") {
            this.greenLight.classList.add("active");
            this.message.textContent = "GO";
        } else {
            alert("Пожалуйста, введите 'красный' или 'зеленый'");
        }
    }
}

// Создание экземпляра светофора
const trafficLight = new TrafficLight();
