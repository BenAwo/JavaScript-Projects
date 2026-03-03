const cash_register = {
    Phone: 300,
    TV: 220,
    Console: 150,
    Phone_Stock: 19,
    TV_Stock: 5,
    Console_Stock: 3,
    shopping_cart: [],
    add_item: function(item_name){
        switch(item_name){
            case 'phone':
                if (this.Phone_Stock > 0){
                    this.shopping_cart.push("Phone");
                    console.log('Phone added to cart!');
                    this.Phone_Stock -= 1
                } else {
                    console.log(`We don't have any more ${item_name}s in stock, sorry!`)
                }
                break;
            case 'tv':
                if (this.TV_Stock > 0){
                    this.shopping_cart.push("Smart TV");
                    console.log('Smart TV added to cart!');
                    this.TV_Stock -= 1
                } else {
                    console.log(`We don't have any more ${item_name}s in stock, sorry!`)
                }
                break;
            case 'console':
                if (this.Console_Stock > 0){
                    this.shopping_cart.push("Gaming Console");
                    console.log('Gaming Console added to cart!');
                    this.Console_Stock -= 1
                } else {
                    console.log(`We don't have any more ${item_name}s in stock, sorry!`)
                }
                break;
            default:
                console.log(`We do not sell ${item_name}!`);    
        }
    },
    calculate_total_price: function(){
        let cart_total = 0;
        let i = 0;
        let x = this.shopping_cart.length
        while (i < x){
            if (this.shopping_cart[i] == 'Phone') {
                cart_total += this.Phone;
            } else if (this.shopping_cart[i] == 'Smart TV') {
                cart_total += this.TV;
            } else if (this.shopping_cart[i] == 'Gaming Console'){
                cart_total += this.Console;
            } 
            i++;
        }
        return cart_total;
    
    },
    pay: function(payment){
        total_price = this.calculate_total_price()
        if (total_price >= 400){
            total_price *= 0.9;
        }
        if (payment < total_price){
            console.log('This is not enough to pay for your items!');
        } else if (payment > total_price){
            change = payment - total_price;
            console.log(`You have paid too much for your items. Your change is ${change}!`);
        } else {
            console.log('Thank you for shopping with us! Have a good day!');
        }
    }
}
console.log(cash_register.shopping_cart);
cash_register.add_item('console');
cash_register.add_item('console');
cash_register.add_item('console');
cash_register.add_item('console');
let price = cash_register.calculate_total_price();
console.log(price);
