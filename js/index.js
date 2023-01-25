
// Funciones implementadas en los jQuery's selectors

// Punto 1)
function AddItem(e){
    
    e.preventDefault()
    let newItem = $("#newText").val()

    $(".Lista").append(` <div class=recuadros> <li> <p id="item">${newItem}</p> <p></p>
    <button class="check" type="submit">check</button> 
    <button class="delete" type="submit">delete</button> <p></p> </li> </div> `)
}

// Punto 2)
function tachar(){
    // let parent_li = $(this).parent()
    // parent_li.toggleClass('checked')

    let sibling_button = $(this).siblings("#item")
    sibling_button.toggleClass('checked')
}

// Punto 3)
function eliminar(){
    let grandpa_div = $(this).parent().parent()
    grandpa_div.remove()
}

// Definicion de jQuery Selectors
$(".agregar").click(AddItem)

$(".Lista").on("click", ".check", tachar)

$(".Lista").on("click", ".delete", eliminar)