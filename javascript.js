
let searchBook=()=>{
  let searchField=document.getElementById('searchField');
  let searchText=searchField.value;
  searchField.value=" ";
  let url=`https://www.googleapis.com/books/v1/volumes?q=${searchText}`;
  fetch(url)
  .then(res => res.json())
  .then(data => bookSelf(data.items))
}

let bookSelf=(items)=>{
  let searchResult=document.getElementById('searchResult');

  items.forEach(item => {
    //console.log(item)
    let div=document.createElement('div');
    div.classList.add('col');
    div.innerHTML=`
    <div class="card">
    <img src="${item.volumeInfo.imageLinks.smallThumbnail}" class="card-img-top" alt="Book 
Image">
    <div class="card-body">
    <h5 class="card-title">${item.volumeInfo.title}</h5>
    <h3 class="card-authors">${item.volumeInfo.authors}</h3>
    </div>
</div>
    
    
    `;
    searchResult.appendChild(div);
    
  }) 
}