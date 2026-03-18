function UI() {
    this.btn_start = document.querySelector(".btn_start"),
    this.next_btn = document.querySelector(".next_btn"),
    this.replay_btn = document.querySelector(".replay_btn"),
    this.quit_btn = document.querySelector(".quit_btn"), 
    this.quiz_box = document.querySelector(".quiz_box"),
    this.score_box = document.querySelector(".score_box"),
    this.option = option_list.querySelectorAll(".option"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'

}   

UI.prototype.soruGoster = function(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for(let cevap in soru.cevapSecenekleri) {
        options += 
            `
                <div class="option"> 
                    <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
                </div>
            `;
    }

    this.option_list = document.querySelector(".option_list")
    document.querySelector(".question_text").innerHTML = question;
    ui.option_list.innerHTML = options;


    for(let opt of option) {
        opt.setAttribute("onclick", "option_selected(this")
    }

}

UI.prototype.soruSayisiniGoster=function(soruSirasi, toplamSoru) {
    let tag = `<span class="badge bg-warning">${soruSirasi}/ ${toplamSoru}</span>`;
    doucment.querySelector(".quiz_box .question_index").innerHTML
}

UI.prototype.skoruGoster = function(toplamSoru, dogruCevap) {
     let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} doğru cevap verdiniz`;
     document.querySelector(".score_box .score_tag").innerHTML = tag;

}