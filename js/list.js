//Backbone.js custom code for drag and drop list of names

//Name extends backbone's Model; contains basic name data
var Name = Backbone.Model.extend({
    defaults: { //default name if none given
        'name': 'default name'
    }
});

//defines a Collection of Name items
var NameCollection = Backbone.Collection.extend({
    model: Name //define model that collection is holding
});

//view for one name item
var NameView = Backbone.View.extend({
    tagName: 'li', //defined as elements in an html list ( <li> )
    events: { //define and hook up events
        'click' : 'click' //event name: triggering element
    },

    click: function(event){ //function to be fired
        var name = $(event.currentTarget).text();
        //alerts the user of the name they have clicked
        alert("You have clicked " + name);
    },

    render: function() {
        //el refers to DOM element referenced by the view
        //puts the name of the model into the <li> html element
        this.el.innerHTML = this.model.get('name');
        //$(this.el).html(this.model.get('name')); //jquery way
        return this; //return this to enable chained calls of render
    }
});

//view for the collection/list of names
 var NameListView = Backbone.View.extend({
    events: {},
    render: function() {
        //iterates through list of models, performing addView function on each element
        this.collection.each(this.addNameView, this);
        return this; //return this to enable chained calls of render
    },

    //function that creates a view for a model, renders it, and adds it to current el
    addNameView: function(model) {
        //create name view to be added to collection
        var nameView = new NameView({model : model});
        //appends this model view to current html element
        $(this.el).append(nameView.render().el);
    }
});

	
//create new name collection instance
/*var listOfNames = new NameCollection([
    //id field for internal use only
    {id: 1, name: "Steve Jobs"},
    {id: 2, name: "Bill Gates"},
    {id: 3, name: "Mark Zuckerberg"},
    {id: 4, name: "Elon Musk"},
    {id: 5, name: "Larry Paige"},
    {id: 6, name: "Sergey Brin"},
    {id: 7, name: "Larry Ellison"}
]);

var nameList = new Array();
nameList[0] = "Steve Jobs";
nameList[1] = "Bill Gates";
nameList[2] = "Mark Zuckerberg";
nameList[3] = "Elon Musk";
nameList[4] = "Larry Paige";
nameList[5] = "Sergey Brin";
nameList[6] = "Larry Ellison";

alert(nameList.length);

var listOfNames = new NameCollection();
for (var i = 0; i < nameList.length; i++) {
    listOfNames.add(new Name({name: nameList[i]}));
}



//create new view instance to display the updated/sorted collection to html
var viewOfNames = new NameListView({
    el: '#name-view', //html element for view to be added to
    collection: listOfNames //name of collection to be cycled through
});
//render the list of names to be shown through html
viewOfNames.render();

//jquery calls function when DOM is ready
$(document).ready(function() {
    $('#name-view').sortable({  //make the list sortable using drag and drop
        placeholder: "ui-state-highlight" //adds highlighted placeholder
    });
});  
*/  