// Убедитесь, что этот код выполняется в глобальной области видимости
window.factorial = 1;  
let n = 1;          

while (n <= 10) {   
    window.factorial = window.factorial * n;  
    n = n + 1;      
}

console.log(window.factorial);