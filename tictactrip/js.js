//resultat top 5 ville si le champs de ville est vide
function resultatVilleDepart()
{
    if(document.getElementById('villeDepart').value ==''){
        bestVille()
    }else{
        document.getElementById('villeDepart').value
        //console.log(document.getElementById('villeD').value)
        searchVilleDepart()
    }
}

//console.log(resultatVille())
resultatVilleDepart()

//resultat top 5 ville si le champs de ville est vide
function resultatVilleArriver()
{
    
    if(document.getElementById('villeArriver').value ==''){
        bestVille()
    }else{
        document.getElementById('villeArriver').value
        //console.log(document.getElementById('villeD').value)
        searchVilleArriver()
    }
}

//console.log(resultatVille())
resultatVilleArriver()


//appelle de json quand et affiche les villes dans tabeau quand l'utilisateur tape une lettre dans le champs
function searchVilleDepart()
{
    $(document).ready(function()
    {
        $.getJSON("http://www-uat.tictactrip.eu/api/cities/autocomplete/?q="+ document.getElementById('villeDepart').value, function(json)
        {
            //console.log(json)
            //console.log(json[0]['city_id'])
            $('#test').html('');
            $.each( json, function( key, value ) 
            {
                $('#test').append('<a href="#"><div class="resultatVille">'+value['local_name']+'</div></a>');
            });
        });
        $.post( "", function( data )
        {
            console.log(data)
            $( ".result" ).html( data );
        });
    });
}

//appelle de json quand et affiche les villes dans tabeau quand l'utilisateur tape une lettre dans le champs
function searchVilleArriver()
{
    $(document).ready(function()
    {
        $.getJSON("http://www-uat.tictactrip.eu/api/cities/autocomplete/?q="+ document.getElementById('villeArriver').value, function(json)
        {
            //console.log(json)
            //console.log(json[0]['city_id'])
            $('#test2').html('');
            $.each( json, function( key, value )
            {
                $('#test2').append('<a href="#"><div class="resultatVille">'+value['local_name']+'</div></a>');
            });
        });
        $.post( "", function( data ) 
        {
            console.log(data)
            $( ".result" ).html( data );
        });
    });
}


//appelle de json et affiche les 5 ville populaire
function bestVille()
{
    $(document).ready(function()
    {
        $.getJSON("http://www-uat.tictactrip.eu/api/cities/popular/5", function(json){
            //console.log(json)
            //console.log(json[0]['city_id'])
            $('.top').html('');
            $.each( json, function( key, value ) 
            {
                $('.top').append('<a href="#"><div class="resultatVille">'+value['unique_name']+'</div></a>');
            });
        });
        $.post( "", function( data ) 
        {
            console.log(data)
            $( ".result" ).html( data );
        });
    });
}

//affiche la date pour le depart
function dateAller()
{   
    $( function() 
    {
        $('#dateDepart').datepicker({ minDate: 0, maxDate: "+6M +15D"})
    });
}
dateAller()


//affiche la date pour le retour
function dateRetour()
{   
    $("#dateArriver").click(function(){
        $("#dateArriver").on("click");
    });
    $( function()
    {
        $('#dateArriver').datepicker({ minDate: 1, maxDate: "+6M +16D"}).bind("click", function(){
                $('#ui-datepicker-div').prepend("<h5>Choisissez la date du retour</h5><button class='btn'>PAS DE RETOUR</button>");
        })
    });
    $("#dateArriver").click(function(){
        $("#dateArriver").off("click");
    });
}
dateRetour()


//selection du champs ville arriver pour hidden le tableau depart
function selectionArriver(){
    $('#titreArriver').prop('hidden', false)
    $('#test2').prop('hidden', false)
    $('#titreDepart').prop('hidden', true)
    $('#test').prop('hidden', true)
}
selectionArriver()

function selectionDepart(){
    $('#titreDepart').prop('hidden', false)
    $('#test').prop('hidden', false)
    $('#titreArriver').prop('hidden', true)
    $('#test2').prop('hidden', true)
}
selectionDepart()


//direction des autres page
function pageCree(){
    document.location.href='pageCree.html'
}

//ouvert du modal et rendre les champs disabled
function openNav1() {
    document.getElementById("mySidenavLangue").style.width = "560px";
    $('#villeDepart').prop('disabled',true)
    $('#villeArriver').prop('disabled',true)
    $('#dateDepart').prop('disabled',true)
    $('#dateArriver').prop('disabled',true)
}

// fermer le modal et rendre les champs enabled
function closeNav1() {
    document.getElementById("mySidenavLangue").style.width = "0";
    $('#villeDepart').prop('disabled',false)
    $('#villeArriver').prop('disabled',false)
    $('#dateDepart').prop('disabled',false)
    $('#dateArriver').prop('disabled',false)
}

//ouvert du modal et rendre les champs disabled
function openNav2() {
    document.getElementById("mySidenavMonnaie").style.width = "560px";
    $('#villeDepart').prop('disabled',true)
    $('#villeArriver').prop('disabled',true)
    $('#dateDepart').prop('disabled',true)
    $('#dateArriver').prop('disabled',true)
}

function closeNav2() {
    document.getElementById("mySidenavMonnaie").style.width = "0";
    $('#villeDepart').prop('disabled',false)
    $('#villeArriver').prop('disabled',false)
    $('#dateDepart').prop('disabled',false)
    $('#dateArriver').prop('disabled',false)
}