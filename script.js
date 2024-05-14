async function shorten() {
    let link = $("#link").val();
    let customURL = $("#customURL").val();
    let url = `https://is.gd/create.php?format=json&url=${link}&shorturl=${customURL}`;
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to shorten URL');
    }
    let data = await response.json();
    return data;
}

$("#shorten").click(()=>{
    
    shorten()
    .then((data)=>{
                if(data.shorturl!=undefined)
                        $("#output").html(data.shorturl);
                else
                    $("#output").html(data.errormessage);
        
            })
    .catch((err)=> {
        console.log(err.message); 
        const output = err.message;
        $("#output").html(output);
    })
    }
);
