const user = {
    name: 'Alice',
    greet: function() {
        console.log('Outer function, this.name:', this.name); // Works as expected

        const displayGreeting = function() {
            console.log('Inner function, this.name:', this.name); // Arrow function inherits 'this'
        }

        displayGreeting();
    }
};

user.greet(); 
// Output:
// Outer function, this.name: Alice
// Inner function, this.name: Alice
