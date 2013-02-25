//Backbone.js Model and View code for list of names

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