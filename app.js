var budgetController = (function(){
    //each entry creates either an expense or an income. these are constructors.
    var Expense = function (id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    //All data that is collecte is stored in an object
    var data = {
            //we then store all the expenses and incomes in arrays
        allItems: {
            exp: [],
            inc: []
        }, 
            //we then store the toals of expenses and incomes
        totals: {
            exp: 0,
            inc: 0
        }
    }

})();

var UIController = (function(){

    //we create this in case we need to change the names of the interface
    var domStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValues: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function(){
            return {
                type: document.querySelector(domStrings.inputType).value, //inc or exp
                description: document.querySelector(domStrings.inputDescription).value, //words
                value: document.querySelector(domStrings.inputValues).value //num
            };
        },
        getDomStrings: function(){
            return domStrings;
        }
    };
})();

var controller = (function(budgetCtrl, UICtrl){

    //this is the initialization of the event listeners
    var setupEventListeners = function(){

        var dom = UICtrl.getDomStrings();

        document.querySelector(dom.inputBtn).addEventListener('click', ctrlAddItem);

        //this doesnt have query selector because there is nothing we are selecting, only a key pressed
        document.addEventListener('keypress', function(event){
    
            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    };

    

    var ctrlAddItem = function(){
        //1. Get the field input data
        var input = UICtrl.getInput();

        //2. Add the item to the budget controller

        //3. Add the item to the UI

        //4. Calculate the budget

        //5. Dispaly the budget on the UI
    };

    //this initalizes everything but needs to be called.
    return{
        init: function(){
            console.log('application is running');
            setupEventListeners();
        }
    }


})(budgetController, UIController);

// only way that controller will run. only thing outside of the modules.
controller.init(); 