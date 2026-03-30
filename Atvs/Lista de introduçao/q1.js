function calcular() {
    let h = document.getElementById("altura").value;
    let r = document.getElementById("raio").value;

    let v = Math.PI * (r**2) * h;
    document.getElementById("resultado").innerHTML = v;
}
