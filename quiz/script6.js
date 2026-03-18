// OOP: Nesne Tabanlı Programlama

const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener("click", function() {
    ui.quiz_box.classList.add("active");
    ui.soruGoster(quiz.soruGetir());
    ui. soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.next_btn.classList.remove("show");
})

document.querySelector(".next_btn").addEventListener("click", function() {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        document.querySelector(".next_btn").classList.remove("show");
    } else {
        console.log("quiz bitti");
    }
});

/*const option = option_list.querySelectorAll(".option");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';*/


function option_selected(option) {
        let cevap = option.querySelector("span b").textContent;
        let soru = quiz.soruGetir();

        if(soru.cevabiKontrolEt(cevap)) {
            option.classList.add("correct");
            option.insertAdjacentHTML("before end", this.correctIcon);
        } else {
            option.classList.add("incorrect")
            option.insertAdjacentHTML("before end", this.incorrectIcon);

        }

        for(let i=0; i<ui.option_list.children.length; i++) {
            ui.option_list.children[i].classList.add("disabled");
        }

        ui.next_btn.classList.add("show"); 
 }

