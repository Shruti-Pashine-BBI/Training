class bottle {
  //protected
  _waterlevel = 0;
  //private
  #water = 1;

  _setwater(value, val) {
    this._waterlevel = value;
    this.#water = val;
  }
  _getwater() {
    console.log(`${this._waterlevel} ml`);
    console.log(`${this.#water} ml`);
  }
}
//class milton
let newBottle = new bottle();
console.log(`${newBottle._waterlevel} ml`);
//console.log(`${newBottle.#water} ml`);
newBottle._setwater(100, 20);
newBottle._getwater();
