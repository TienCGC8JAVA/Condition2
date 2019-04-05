function Task1()
{
    let degreeC = Number(prompt("Nhập vào độ C:"));
    let degreeF = degreeC*9/5 + 32;
    document.getElementById("innerHTML").innerHTML = degreeC + " <sup>o</sup>C bằng " + degreeF + " <sup>o</sup>F";
}

function Task2()
{
    let meter = Number(prompt("Nhập vào mét:"));
    let feet = meter*3.2808;
    document.getElementById("innerHTML").innerHTML = meter + " mét bằng " + feet + " feet";
}

function Task3()
{
    let edgeSquare = Number(prompt("Nhập vào cạnh của hình vuông:"));
    let areaSquare = Math.pow(edgeSquare,2);
    document.getElementById("innerHTML").innerHTML = "Diện tích của hình vuông là " + areaSquare + " m<sup>2</sup>";
}

function Task4()
{
    let heightRect = Number(prompt("Nhập vào chiều dài của hình chữ nhật:"));
    let widthRect = Number(prompt("Nhập vào chiều rộng của hình chữ nhật:"));
    let areaRect = heightRect*widthRect;
    document.getElementById("innerHTML").innerHTML = "Diện tích của hình chữ nhật là " + areaRect + " m<sup>2</sup>";
}

function Task5()
{
    let edgeRightAngle01 = Number(prompt("Nhập vào chiều dài của hình chữ nhật:"));
    let edgeRightAngle02 = Number(prompt("Nhập vào chiều rộng của hình chữ nhật:"));
    let areaRightAngle = (edgeRightAngle01*edgeRightAngle02)/2;
    document.getElementById("innerHTML").innerHTML = "Diện tích của tam giác vuông là " + areaRightAngle + " m<sup>2</sup>";
}

function Task6()
{
    let a = Number(prompt("Nhập vào giá trị của a:"));
    let b = Number(prompt("Nhập vào giá trị của b:"));
    let x = -b/a;
    if (a == 0)
    {
        if (b == 0)
        {
            document.getElementById("innerHTML").innerHTML = "Phương trình có nghiệm với mọi x";
        }
        else
        {
            document.getElementById("innerHTML").innerHTML = "Phương trình vô nghiệm với mọi x"
        }
    }
    else
    {
        document.getElementById("innerHTML").innerHTML = "Phương trình bậc nhất 1 ẩn có dạng:<br/>" + a + ".x + " + b + " = 0<br/>Kết quả: x = " + x;
    }
}

function Task7()
{
    let a = Number(prompt("Nhập vào giá trị của a:"));
    let b = Number(prompt("Nhập vào giá trị của b:"));
    let c = Number(prompt("Nhập vào giá trị của c:"));
    let delta;
    switch (a) {
        case 0:
            document.getElementById("innerHTML").innerHTML = "Vì " + a + " = 0 nên phương trình có dạng bậc nhất 1 ẩn:<br/>" + b + ".x " + c + " = 0";
            b = 0 ?
                c = 0 ? document.getElementById("innerHTML").innerHTML = "Vì b = 0 nên phương trình có nghiệm với mọi x"
                    : document.getElementById("innerHTML").innerHTML = "Vì c = 0 nên phương trình vô nghiệm với mọi x"
                : document.getElementById("innerHTML").innerHTML = "<br/>Kết quả: x = " + (-c / b);
            break;
        default:
            delta = Math.pow(b, 2) - 4 * a * c;
            switch (Math.sqrt(delta)) {
                case 0:
                    document.getElementById("innerHTML").innerHTML = "Phương trình bậc 2:<br/> " + a + ".x<sup>2</sup> +" + b + ".x + " + c + " = 0 " + " có 2 nghiệm kép là:<br/>" + "x = " + (-b / (2 * a));
                    break;
                default:
                    delta < 0 ? document.getElementById("innerHTML").innerHTML = "Phương trình bậc 2:<br/> " + a + ".x<sup>2</sup> +" + b + ".x + " + c + " = 0 vô nghiệm!"
                        : document.getElementById("innerHTML").innerHTML = "Phương trình bậc 2:<br/>" + a + ".x<sup>2</sup> +" + b + ".x + " + c + " = 0 có 2 nghiệm phân biệt là:<br/>x = " + (-b + Math.sqrt(delta)) / (2 * a) + " và x = " + (-b - Math.sqrt(delta)) / (2 * a);
            }
    }
}

function Task8()
{
    let age = parseInt(prompt("Nhập vào vào 1 số nguyên:"));
    if (0 < age && age < 120)
    {
        document.getElementById("innerHTML").innerHTML = "Đây là tuổi của 1 người!";
    }
    else
    {
        document.getElementById("innerHTML").innerHTML = "Đây không phải là tuổi của 1 người!";
    }
}

function Task9()
{
    let a = Number(prompt("Nhập vào số thực a:"));
    let b = Number(prompt("Nhập vào số thực b:"));
    let c = Number(prompt("Nhập vào số thực c:"));
    (a > 0 && b > 0 && c > 0) ?
        (a + b > c) ?
            (b + c > a) ?
                (a + c > b) ?
                document.getElementById("innerHTML").innerHTML = "Ba cạnh " + a + ", " + b + ", " + c + " là 3 cạnh của 1 tam giác"
                : document.getElementById("innerHTML").innerHTML = "Ba cạnh " + a + ", " + b + ", " + c + " không phải là 3 cạnh của 1 tam giác"
            : document.getElementById("innerHTML").innerHTML = "Ba cạnh " + a + ", " + b + ", " + c + " không phải là 3 cạnh của 1 tam giác"
        : document.getElementById("innerHTML").innerHTML = "Ba cạnh " + a + ", " + b + ", " + c + " không phải là 3 cạnh của 1 tam giác"
    : document.getElementById("innerHTML").innerHTML = "Ba cạnh " + a + ", " + b + ", " + c + " không phải là 3 cạnh của 1 tam giác";
}

function Task10()
{
    let zone = Number(prompt("Nhập khu vực cần tính giá điện theo đúng yêu cầu sau: số 1 khu vực nông thôn ; số 2 khu tập thể, cum dân cư ; số 3 khu thương mai, dịch vụ ; số 4 khu công nghiệp"));
    let payBill,voltage;
    switch (zone)
    {
        case 1:
            voltage = Number(prompt("Số kWh bên sử dụng tiêu thụ được là:"));
            (voltage <= 50) ?
                payBill = voltage*1403
            :   (voltage <= 100) ?
                    payBill = 50*1403 + (voltage - 50)*1459
                :   (voltage <= 200) ?
                        payBill = 50*1403 + 50*1459 + (voltage - 100)*1590
                    :   (voltage <= 300) ?
                        payBill = 50*1403 + 50*1459 + 100*1590 + (voltage - 200)*1971
                        :   (voltage <= 400) ?
                            payBill = 50*1403 + 50*1459 + 100*1590 + 100*2971 + (voltage - 300)*2231
                            :   payBill = voltage*2323;
            break;
        case 2:
            voltage = Number(prompt("Số kWh bên sử dụng tiêu thụ được là:"));
            (voltage <= 50) ?
                payBill = voltage*1568
                :   (voltage <= 100) ?
                payBill = 50*1568 + (voltage - 50)*1624
                :   (voltage <= 200) ?
                    payBill = 50*1568 + 50*1625 + (voltage - 100)*1839
                    :   (voltage <= 300) ?
                        payBill = 50*1568 + 50*1625 + 100*1839 + (voltage - 200)*2327
                        :   (voltage <= 400) ?
                            payBill = 50*1568 + 50*1625 + 100*1839 +100*2327 + (voltage - 300)*2625
                            :   payBill = voltage*2625;
            break;
        case 3:
            voltage = Number(prompt("Số kWh bên sử dụng tiêu thụ được là:"));
            (voltage <= 50) ?
                payBill = voltage*1646
                :   (voltage <= 100) ?
                payBill = 50*1646 + (voltage - 50)*1701
                :   (voltage <= 200) ?
                    payBill = 50*1646 + 50*1701 + (voltage - 100)*1976
                    :   (voltage <= 300) ?
                        payBill = 50*1646 + 50*1701 + 100*1976 + (voltage - 200)*2487
                        :   (voltage <= 400) ?
                            payBill = 50*1646 + 50*1701 + 100*1976 +100*2487 + (voltage - 300)*2780
                            :   payBill = voltage*2780;
            break;
        case 4:
            let timeLow = Number(prompt("Nhập số KWh tiêu thụ thấp điểm:"));
            let timeMedium = Number(prompt("Nhập số kWh tiêu thụ bình thường:"));
            let timeHigh = Number(prompt("Nhập số kWh tiêu thụ cao điểm:"));
            payBill = timeLow*989 + timeMedium*1526 + timeHigh*2817;
            break;
        default:
            document.getElementById("innerHTML").innerHTML = "Bạn nhập sai số khu vực! Xin hãy nhập lại!";
    }
    if (1 <= zone && zone < 5)
    {
        document.getElementById("innerHTML").innerHTML = "Số tiền mà mà bên sử dụng phải trả là: " + payBill + " VND";
    }
}

