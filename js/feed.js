async function exibirPosts() {
  const response = await fetch("https://foodgram-back.herokuapp.com/posts");
  const arrayDeFotos = await response.json();
  
  var sessaoFotos = document.querySelector('section');


  for(var i = 0; i < arrayDeFotos.length; i++){

    var post = `
    <div class="post"> 
      <div>Por: ${arrayDeFotos[i].user}</div>
      <img src="https://foodgram-back.herokuapp.com/${arrayDeFotos[i].url}" alt="" title="desenho de uma pizza e escrito foodgram"/>     
    </div> 
    `;

    sessaoFotos.insertAdjacentHTML('beforebegin', post);
  }

}

exibirPosts();