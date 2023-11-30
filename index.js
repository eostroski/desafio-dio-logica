let nome = "Eder"
let valorXP = 6584


if (0<=valorXP && valorXP<=1000){
    console.log("O herói de nome **"+nome+ "** está no nível de **Ferro** com valor XP de " +valorXP)
}
else if (1001<=valorXP && valorXP<=2000){
    console.log("O herói de nome **"+nome+ "** está no nível de **Bronze** com valor XP de " +valorXP)
}
else if (2001<=valorXP && valorXP<=5000){
    console.log("O herói de nome **"+nome+ "** está no nível de **Prata** com valor XP de " +valorXP)
}
else if (5001<=valorXP && valorXP<=7000){
    console.log("O herói de nome **"+nome+ "** está no nível de **Ouro** com valor XP de " +valorXP)
}
else if (7001<=valorXP && valorXP<=8000){
    console.log("O herói de nome **"+nome+ "** está no nível de **Platina** com valor XP de " +valorXP)
}
else if (8001<=valorXP && valorXP<=9000){
    console.log("O herói de nome **"+nome+ "** está no nível de **Ascendente** com valor XP de " +valorXP)
}
else if (9001<=valorXP && valorXP<=10000){
    console.log("O herói de nome **"+nome+ "** está no nível de **Imortal** com valor XP de " +valorXP)
}
else if (valorXP>10000){
    console.log("O herói de nome **"+nome+ "** está no nível de **Radiante** com valor XP de " +valorXP)
}