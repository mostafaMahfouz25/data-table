const searchInput = document.getElementById("search-input");
const searchName = document.getElementById("search-name");
const innerSearch = document.querySelectorAll(".inner-search");


const trTable = document.querySelectorAll("#example tbody tr");




searchInput.addEventListener("input",()=>{
    
    trTable.forEach((item)=>
    {
        if(item.innerText.toLowerCase().includes(searchInput.value))
        {
            item.style.display = "table-row"
        }
        else 
        {
            item.style.display = "none";
        }
    })
})


innerSearch.forEach((val,index)=>{
    // console.log(val);

    val.addEventListener("keyup",()=>{
    
        trTable.forEach((item)=>
        {
            if(item.children[index].innerText.toLowerCase().includes(val.value))
            {
                item.style.display = "table-row"
            }
            else 
            {
                item.style.display = "none";
            }
        })
    })



})

