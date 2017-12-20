// BUDGET CONTROLLER
var budgetController = (function() {

    // some code
})();

// UI CONTROLLER
var UIController = (function() {
    // some code
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {

        // 1. get the field input data

        // 2. Add the item to the budget controller

        // 3. Add the new item to the UI controller.

        // 4. Calculate the budget

        // 5. display the budget on the UI

        console.log('it works');

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    })


})(budgetController, UIController);

