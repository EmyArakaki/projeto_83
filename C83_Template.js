var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","vovó.jpg", "mãe.jpg" , "pai.3.jpg", "prima.1.jpg", "prima 2.jpg"];

var names = ["Álbum da Família","Rosa Arakaki - Avó", "Silvia Sakata - Mãe", "Thiago Sakata - Pai", "Keisy - Prima", "Stefany - Prima"];

var age = [,88, 35, 38, 23, 20]

/*

Precisamos ordenadr os elementos presentes dentro da array "age" para estampar o valor da idade do respectivo membro da família.

Escreva: "age.sort()"

*/

age.sort();

/*

Precisamos reverter os elementos presentes dentro da array "age" para estampar o valor da idade dos respectivos membros da família.
Após ordenar a array "age", todos os elementos precisam ser organizados em ordem crescente, e nosso álbum de família consiste na lista oposta, na qual o primeiro membro é o avô, seguido pelo pai, assim em diante, ou seja, em ordem decrescente.

Escreva: "age.reverse()"

*/
age.reverse();

var i = 0;

function update()
{
    i++;

    var numbersOfFamilyMemberInArray = 5
    if(i > numbersOfFamilyMemberInArray )
    {
        i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];
    
    var updatedAge = age[i]

    document.getElementById("familyMemberImage").src = updatedImage;
    
    document.getElementById("familyMemberName").innerHTML = updatedName;

    document.getElementById("familyMemberAge").innerHTML = updatedAge;

    /*

    para achar a maior idade entre os membros da família, precisamos usar Math e a função max juntas, e para exibir a maior idade, precisamos estampar o valor. Portanto usaremos o console.

    Escreva:  "var maxNumber = Math.max.apply(Math, age)
            "console.log("A maior idade é: ", maxNumber)"

    */

    var maxNumber = Math.max.apply(Math, age);
    console.log("A maior idade é: 60", maxNumber);

    /*

    Para achar a menor idade entre os membros da família, precisamos usar Matg e a função min juntas, e para exibir a menor idade, precisamos estmpar o valor. Portanto usaremos o console.

    Escreva:  "var minNumber = Math.min.apply(Math, age)
            "console.log("A menor idade é: ", minNumber)"

    */

    var minNumber = Math.min.apply(Math, age);
    console.log("A menor idade é: 20",minNumber);
}