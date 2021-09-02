let btnadd = $("#btnadd");
let btnreset = $("#btnreset");
let btnsort = $("#btnsort");
let btnclean = $("#btnclean");
let inpnewtask = $("#InpNewTask");
let ultask = $("#ultask");

function startover(){
    btnadd.prop('disabled',inpnewtask.val()=='');
    btnreset.prop('disabled',inpnewtask.val()=='');
    btnsort.prop('disabled', ultask.children().length < 1)
    btnclean.prop('disabled', ultask.children().length < 1)
}
inpnewtask.on('input', startover);

function addItem(){
    let listItem = $('<li>',{
        'class': 'list-group-item',
        text: inpnewtask.val()
    })
    ultask.append(listItem);
    inpnewtask.val('');
    listItem.click((ev)=> { 
        $(ev.target).toggleClass('done');   
    });
    startover();
}

inpnewtask.keypress((e) => {
    if (e.keyCode == 13) addItem()
})

btnadd.click(addItem);
btnreset.click(()=>{
    inpnewtask.val('')
    startover();
})
btnclean.click(()=>{
    $("#ultask .done").remove();
    startover();
})
btnsort.click(()=>{
    $('#ultask .done').appendTo('#ultask');
    startover();
})

