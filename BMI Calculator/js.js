function fun(){
    weight = document.getElementById('weight').value;
    height = document.getElementById('height').value;
    if((weight != '') || (height != ''))
    {
            h = height * 12 * 0.025;
            bmi = weight / Math.pow(h, 2);
            document.getElementById('BMI').value = Math.round(bmi);
            if( Math.round(bmi) <= 18)
            {
                document.getElementById('description').innerHTML = `You're a Weak Person`;
            }
            else if(Math.round(bmi) > 18 && Math.round(bmi) <= 25)
            {
                document.getElementById('description').innerHTML =`You're a Healthy Person`;
            }
            else if(Math.round(bmi) > 25 && Math.round(bmi) <= 29.5)
            {
                document.getElementById('description').innerHTML =`You're OverWeight`;
            }
            else{
                document.getElementById('description').innerHTML =`You're OBESE !!`;
            }
    }
    else
    {
        document.getElementById('description').innerHTML = `Please Enter all Values Correctly!!!`;
        document.getElementById('description').style="color: #9C2A00;"
    }

}