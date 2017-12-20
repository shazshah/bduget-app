// BUDGET CONTROLLER
var budgetController = (function() {

    // some code
})();

// UI CONTROLLER
var UIController = (function() {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'    
    };
    
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },

        getDOMstrings: function() {
            return DOMStrings
        }
    }

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UIController.getDOMstrings();

    var ctrlAddItem = function () {

        // 1. get the field input data
        var input = UIController.getInput();
        console.log(input);

        // 2. Add the item to the budget controller

        // 3. Add the new item to the UI controller.

        // 4. Calculate the budget

        // 5. display the budget on the UI

    }

    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    })


})(budgetController, UIController);

