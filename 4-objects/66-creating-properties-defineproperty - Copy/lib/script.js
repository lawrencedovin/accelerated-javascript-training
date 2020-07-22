var account = {
    cash: 1200,
    _name: 'Default',
    widthdraw: function(amount) {
        this.cash -= amount;
        console.log('Withdrew ' + amount + ', new cash reserve is: ' + this.cash);
    }
};

Object.defineProperty(account, 'deposit', {
    value: function(amount) {
        this.cash += amount;
        console.log('Deposited ' + amount + ', new cash reserve is: ' + this.cash);
    }
});

account.deposit(3000);
account.widthdraw(1000);

Object.defineProperty(account, 'name', {
    get: function() {
        return this._name;
    },
    set: function(name) {
        this._name = name;
    }
});

console.log(account.name);
account.name('ID-003');