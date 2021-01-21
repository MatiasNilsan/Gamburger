class Burger {
  constructor(price, cal) {
    this.totalPrice = price;
    this.totalCal = cal;
    this.btnListener();
    
  }
  
  btnListener(){
    let sumNum = this.totalPrice;
    let calNum = this.totalCal;
    let sum = document.querySelector(".calc-price");
    let cal = document.querySelector('.calc-cal')
    let btn = document.querySelector(".calc-btn");
    btn.addEventListener('click', function(event) {
      let par = new Params();
      sum.innerText = `${sumNum} рублей`;
      cal.innerText = `${calNum} каллорий`;
    })
  }
  
}

class Params {
    constructor() {
      this.total =[]
      this.size = {
        price: 0,
        cal: 0
      }
      this.filling = {
        price: 0,
        cal: 0
      }
      this.season = {
        price: 0,
        cal: 0
      }
      this.mayo = {
        price: 0,
        cal: 0
      }
      this.totalSumPrice = 0
      this.totalSumCal = 0
      this.selectedBurg()
      this.totalPrice()
      this.totalCal()
      this.render()
    }
  
  
  
  selectedBurg() {
    this.size.price = document.querySelector("input[name=size]:checked").dataset.price;
    this.size.cal = document.querySelector("input[name=size]:checked").dataset.cal;
    this.total.push(this.size);
    this.filling.price = document.querySelector("input[name=filling]:checked").dataset.price;
    this.filling.cal = document.querySelector("input[name=filling]:checked").dataset.cal;
    this.total.push(this.filling);
    if (document.querySelector("input[name=season]:checked")) {
      this.season.price = document.querySelector("input[name=season]:checked").dataset.price;
     this.season.cal = document.querySelector("input[name=season]:checked").dataset.cal;
    } else {
      this.season.cal = 0;
      this.season.price = 0;
    }
    this.total.push(this.season);
    if (document.querySelector("input[name=mayo]:checked")) {
      this.mayo.price = document.querySelector("input[name=mayo]:checked").dataset.price;
      this.mayo.cal = document.querySelector("input[name=mayo]:checked").dataset.cal
    } else {
      this.mayo.cal = 0;
      this.mayo.price = 0;
    }
    this.total.push(this.mayo);
    
    
  }
  
  totalPrice() {
    for (let i = 0; i < this.total.length; i++) {
      this.totalSumPrice += Number(this.total[i].price);
    }
  }
  
  totalCal() {
    for (let i = 0; i < this.total.length; i++) {
      this.totalSumCal += Number(this.total[i].cal);
    }
  }
  
  render() {
    const burg = new Burger(this.totalSumPrice, this.totalSumCal);
  }
  
}

let par = new Params();