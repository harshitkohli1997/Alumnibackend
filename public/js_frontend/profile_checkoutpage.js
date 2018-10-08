$(()=>{
    let interest_add_btn=$('#interest-add-btn')
    let interestinputbar = $('#interestID')
    let interestmaindiv= $('#interestmaindiv')
    interest_add_btn.click(()=>{
        let valueofinterest =$('#interestID').val();
        if(valueofinterest==="")
        {
            interestinputbar[0].style.borderBottom="1px solid red";
        }
        else {
            interestmaindiv.prepend(`
             <div class="col-12 m-1"><input class="preferencescheckbox" type="checkbox" checked="checked"><span class="preferencesspan">${valueofinterest}</span></div>
            `)
        }
    })
})