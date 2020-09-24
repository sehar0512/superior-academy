console.log('a');
let alerts = document.getElementById('alerts');
    alerts.style.display = 'none';
//     let name = document.getElementById('name');
//     let valid = document.getElementById('valid');
//     let phone = document.getElementById('phone').value;
//     let clas = document.getElementById('clas').value;
//     let city = document.getElementById('city').value;
//     // name.classList.remove('fBox');
//     // valid.classList.remove('invalid-feedback');
//     $('#valid').hide();
//     // valid.innerText=`Your Name must atleast contains 3 to 20 characters long and it should be start with a letter`
//     name.addEventListener('blur', ()=>{
//         console.log("name is blurred");
//         let reg = /^([a-zA-Z\D]){2,10}([\D0-9a-zA-Z]){2,10}$/;
//         let str= name.value;
//         console.log(str,reg);
//         if(reg.test(str)){
//             console.log("matched");
//             name.classList.remove('fBox');
//             valid.classList.remove('invalid-feedback');
//              validName= true;
//         }
//         else{
//             console.log("not matched");
//             name.classList.add('fBox');
//             valid.classList.add('invalid-feedback');
//             validName= false;
//         }
//     })
//     phone.addEventListener('blur', ()=>{
//         console.log("phone is blurred");
//         let reg = /^([0-9]){11}$/;
//         let str= phone.value;
//         console.log(str,reg);
//         if(reg.test(str)){
//             console.log("matched");
//             phone.classList.remove('is-invalid'); validPhone= true;
//         }
//         else{
//             console.log("not matched");
//             phone.classList.add('is-invalid');
//             validPhone= false;
//         }
//     })
    
        
//     let submit = document.getElementById('submit');
//     submit.addEventListener('click', (e)=>{
//         e.preventDefault();
//         if(validName && validPhone == true)
//         {
//             let failure = document.getElementById('failure');
//         let success = document.getElementById('success');
//         success.classList.add('show');
//         failure.classList.remove('show');
//         // $('#failure').alert('close');
//         $('#failure').hide();
//         $('#success').show();
//     }
//         else{
//             let success = document.getElementById('success');
//             let failure = document.getElementById('failure');
//         failure.classList.add('show');
//         success.classList.remove('show');
//         // $('#success').alert('close');
//         $('#success').hide();
//         $('#failure').show();
//     }
//         })
let subBtn = document.getElementById('subBtn');
subBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    let clas = document.getElementById('clas');
    let city = document.getElementById('city');
    // let Check = document.querySelectorAll('input.Check');
    // let Check = document.querySelector('input[type=checkbox][name=gender]:checked').value;
    // console.log(Check)
    // for(items of Check){
    //     console.log(items);
    //     if(items == )
        
    // }
   
    let data = localStorage.getItem('data');
    if(data == null){
        dataObj = [];
    }
    else{
        dataObj = JSON.parse(data);
    }
    let myObj={
        name : name.value,
        phone : phone.value,
        clas : clas.value,
        city : city.value
    }
    dataObj.push(myObj);
    localStorage.setItem("data",JSON.stringify(dataObj));
    console.log('your form has been submitted');
    document.getElementById("myForm").reset();
    let alerts = document.getElementById('alerts');
    alerts.style.display = 'block';

})