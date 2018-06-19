<?php
$ville1 = '';
$ville2 = '';
if(!empty($_POST['ville1']) && !empty($_POST['ville1'])){
  $ville1 = $_POST['ville1'];
  $ville2 = $_POST['ville2'];
}else{
  $ville1 = '';
  $ville2 = '';
}
$livres = json_decode(file_get_contents('http://www-uat.tictactrip.eu/api/cities/autocomplete/?q='.$ville1));

$livress = json_decode(file_get_contents('http://www-uat.tictactrip.eu/api/cities/autocomplete/?q='.$ville2));
?>
<div>
  <?php
    foreach ($livres as $key => $value)
    {
      echo '<div>'.$livres[$key]->local_name.'</div><br />';
    }
  ?>
</div>
<div>
  <form method="POST" action="index.php" id='ok' name='ok'>
    <input id='ville1' type="text" name="ville1" placeholder="Saissiez une ville de départ" onkeyup='villeDépart(this.value)' value="<?php echo $ville1 ?>">
    <input id='ville2' type="text" name="ville2" onkeyup='villeDépart(this.value)' value="<?php echo $ville2 ?>" placeholder="Saissiez une ville d'arriver">
    <button type="submit" hidden >envoyer</button>
  </form>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript">

var tailleLettre = document.getElementById('ville1').value;

function villeDépart(val){
  //console.log(val)
  tailleLettre = val;
  document.forms["ok"].submit();
}

var textbox = $("#ville1");

textbox.prop("selectionStart", textbox.val().length).focus();

</script>
