var write = " write with Ramy reda",
    mybutton = document.querySelector("#button")
    i = 0;
    
    window.onload = function () {
        console.log(write[5])
        var myfunc = setInterval(function () {
            document.getElementById("ramy").textContent += write[i];
            i += 1;
            if (i > write.length - 1 )
            {
                clearInterval(myfunc)
            }
        }, 200)
}