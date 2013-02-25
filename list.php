<!--
    Sample backbone.js drag and drop list application
    Created by Matthew Becker
-->

<html>
<head>
    <title>backbone.js Project</title>
    <link rel="stylesheet" type="text/css" href="list.css"/>
</head>

<?php
    //connect to MySQL database 
    include("connect.php");
    $orderResult = mysql_query("SELECT Name, order FROM Names", $link); //sql query 

    $result = mysql_query("SELECT Name FROM Names", $link); //sql query 
?>

<script>
	//create new js array of Names from MySQL database
	 var nameList = <?php
            $names = array();
            while( $list = mysql_fetch_assoc($result) ) {
                $names[] = $list['Name'];
            }
            echo json_encode( $names );
        ?>; 	

</script>


<body>
    <h1>Drag and Drop List of Names</h1>
    <p>The order of the names in the list can be changed by dragging and dropping.
        </br>By just single clicking one of the names, the user is alerted of the value.
        </br>The names are extracted from a MySQL database and populate the list
    </p>

    <!-- List of names-->
    <ul id='name-view'></ul>
</body>

<!-- Javascript library files-->
<script src="js/jquery-1.9.1.min.js"></script>
<script src="js/underscore.js"></script>
<script src="js/backbone-min.js"></script>
<script src="js/jquery-ui-1.10.0.custom.min.js"></script>
<!-- Javascript backbone custom files-->
<script src="js/list.js"></script>


<script>

//create new name collection instance
var listOfNames = new NameCollection();
var idNum = 0;
for (var i = 0; i < nameList.length; i++) {
    idNum = i + 1;
    listOfNames.add(new Name({id : idNum, name: nameList[i], ordinal: i}));
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
        placeholder: "ui-state-highlight"
    });
});    

	
</script>

</html>