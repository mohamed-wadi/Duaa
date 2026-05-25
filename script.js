const duasFadwa = [
    "اللهم اغفر لي ذنوبي كلها، وارزقني راحة البال وطمأنينة القلب والسعادة في الدنيا والآخرة.",
    "اللهم اهدني للطريق المستقيم ووفقني لما تحب وترضى.",
    "اللهم اشفني شفاءً تامًا لا يغادر سقمًا وعافني من كل ألم وهمّ وتعب.",
    "اللهم أصلح حالي وارزقني التوبة النصوح والصلاح والتقوى والثبات والسكينة.",
    "اللهم ارزقني القوة والشجاعة والعزيمة والصبر.",
    "اللهم احفظ أهلي ومن أحب من كل سوء.",
    "اللهم أبعد عني الحزن والقلق وكل شر وسوء.",
    "اللهم افتح لي أبواب الخير والرزق والتوفيق والنجاح.",
    "اللهم اجعل أيامي القادمة أجمل وأسعد مما أتمنى.",
    "اللهم اجعلني من عبادك القريبين إليك وارزقني رضاك والجنة وما قرّب إليها من قول وعمل.",
    "اللهم احفظ محمد واحرسه بعينك التي لا تنام.",
    "اللهم ارزقه راحة البال وطمأنينة القلب والنجاح والتوفيق.",
    "اللهم اشفِ محمد شفاءً لا يغادر سقمًا وعافه في صحته ونفسه وقلبه.",
    "اللهم اهدِ محمد للطريق الصحيح ووفقه لما تحب وترضى.",
    "اللهم ارزقه القوة والصلاح والتقوى والثبات والرزق الحلال الواسع.",
    "اللهم أبعد عنه الحزن والقلق وكل سوء.",
    "اللهم افتح له أبواب الخير والنجاح والرزق والسعادة.",
    "اللهم إن كان بيني وبين محمد خير وبركة فاجمع بيننا بالحلال وبارك لنا في محبتنا وحياتنا القادمة.",
    "اللهم يسّر لي الزواج من محمد إن كان خيرًا لنا في ديننا ودنيانا وآخرتنا.",
    "اللهم ارزقنا حياة سعيدة مستقرة مليئة بالمودة والرحمة.",
    "اللهم ارزقنا أبناءً صالحين واجعلهم قرة عين لنا.",
    "اللهم يسّر لنا السكن والعيش في المكان الذي فيه خير وسعادة لنا.",
    "اللهم احفظ محمد لي واحفظني له إن كان في ذلك خير لنا.",
    "اللهم استجب دعائي وحقق لي ما أتمنى إن كان خيرًا لي."
];

const duasMohammed = [
    "اللهم اغفر لي ذنوبي كلها، دقّها وجلّها، أولها وآخرها.",
    "اللهم ارزقني راحة البال وطمأنينة القلب.",
    "اللهم اهدني للطريق الصحيح ووفقني لما تحب وترضى.",
    "اللهم ارزقني رزقًا حلالًا واسعًا مباركًا فيه.",
    "اللهم اشفني شفاءً لا يغادر سقمًا وعافني في بدني ونفسي وقلبي.",
    "اللهم احفظ أهلي ومن أحب من كل سوء.",
    "اللهم اجعل مستقبلي أجمل مما أتمنى.",
    "اللهم ارزقني النجاح والتوفيق في دراستي وعملي.",
    "اللهم أصلح قلبي ونفسي وأبعد عني الحزن والقلق.",
    "اللهم ارزقني الصحبة الطيبة وابعد عني كل شخص مؤذٍ.",
    "اللهم اجعلني من عبادك القريبين إليك.",
    "اللهم ارزقني حسن الخاتمة والجنة بغير حساب.",
    "اللهم فرّج همّي ويسّر أمري وافتح لي أبواب الخير.",
    "اللهم ارزقني القوة والشجاعة والعزيمة والتقوى والثبات على الحق.",
    "اللهم ارزقني التوبة النصوح والصلاح والهداية.",
    "اللهم ارزقني رضاك والجنة وما قرّب إليها من قول وعمل، واغفر لي ولوالديّ ولمن أحب.",
    "اللهم احفظ فدوى واحرسها بعينك التي لا تنام.",
    "اللهم ارزقها راحة البال وطمأنينة القلب والسعادة في الدنيا والآخرة.",
    "اللهم اشفِ فدوى شفاءً تامًا وعافها من كل ألم وهمّ وتعب.",
    "اللهم اهدها للطريق المستقيم ووفقها لما تحب وترضى.",
    "اللهم ارزقها القوة والصلاح والتقوى والثبات والسكينة.",
    "اللهم افتح لها أبواب الخير والرزق والتوفيق والنجاح.",
    "اللهم أبعد عنها الحزن والقلق وكل شر وسوء.",
    "اللهم اجعل أيامها القادمة أجمل وأسعد مما تتمنى.",
    "اللهم إن كان بيني وبين فدوى خير وبركة فاجمع بيننا بالحلال وبارك لنا في محبتنا وحياتنا القادمة.",
    "اللهم يسّر لي الزواج من فدوى إن كان خيرًا لنا في ديننا ودنيانا وآخرتنا.",
    "اللهم ارزقني مالًا حلالًا واسعًا مباركًا فيه، ومهنة ممتازة وراتبًا عاليًا جدًا.",
    "اللهم ارزقني أبناءً صالحين واجعلهم قرة عين لي.",
    "اللهم ارزقني سيارة مباركة واستقرارًا وراحة بال.",
    "اللهم يسّر لي السكن والعيش خارج المغرب إن كان فيه خير لي.",
    "اللهم ارزق فدوى الصحة والعافية والرضا وراحة القلب، واكتب لها الجنة وكل خير.",
    "اللهم استجب لها دعاءها، واحفظها لي واحفظني لها إن كان في ذلك خير لنا.",
    "اللهم حقق لي ما في قلبي إن كان خيرًا لي، واصرف عني كل شر، وأرضني بما كتبت لي.",
    "اللهم استجب دعائي ولو بعد حين."
];

let currentInterval = null;
let currentIndex = 0;
let currentDuas = [];
let currentPerson = '';

// --- Voice Setup ---
let synth = window.speechSynthesis;
let maleVoice = null;
let femaleVoice = null;

function loadVoices() {
    let voices = synth.getVoices();
    let arabicVoices = voices.filter(v => v.lang.startsWith('ar'));
    
    // Try to find known female and male voice names
    femaleVoice = arabicVoices.find(v => v.name.includes('Hoda') || v.name.includes('Laila') || v.name.includes('Zeina')) || arabicVoices[0];
    maleVoice = arabicVoices.find(v => v.name.includes('Naayf') || v.name.includes('Maged') || v.name.includes('Tarik') || v.name.includes('Majed')) || arabicVoices[0];
}

if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
}
loadVoices();

function speakText(text) {
    if (synth.speaking) {
        synth.cancel();
    }
    let utterThis = new SpeechSynthesisUtterance(text);
    utterThis.lang = 'ar-SA';
    utterThis.rate = 0.8; // Speak slowly for reverence
    
    if (currentPerson === 'fadwa') {
        if (femaleVoice) utterThis.voice = femaleVoice;
        utterThis.pitch = 1.2; // Higher pitch
    } else {
        if (maleVoice) utterThis.voice = maleVoice;
        utterThis.pitch = 0.8; // Lower pitch
    }
    
    synth.speak(utterThis);
}

function startDua(person) {
    currentPerson = person;
    document.getElementById('start-screen').classList.remove('active');
    setTimeout(() => {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('dua-screen').style.display = 'block';
        
        // Trigger reflow
        void document.getElementById('dua-screen').offsetWidth;
        
        document.getElementById('dua-screen').classList.add('active');
        
        if (person === 'fadwa') {
            document.getElementById('dua-title').textContent = 'دعاء فدوى:';
            currentDuas = duasFadwa;
        } else {
            document.getElementById('dua-title').textContent = 'دعاء محمد:';
            currentDuas = duasMohammed;
        }
        
        currentIndex = 0;
        showNextDua();
        currentInterval = setInterval(showNextDua, 15000); // 15 seconds
    }, 1000);
}

function showNextDua() {
    if (currentIndex >= currentDuas.length) {
        clearInterval(currentInterval);
        const contentDiv = document.getElementById('dua-content');
        contentDiv.classList.remove('fade-in');
        contentDiv.classList.add('fade-out');
        setTimeout(() => {
            let finalText = 'تقبل الله منا ومنكم صالح الأعمال.';
            contentDiv.textContent = finalText;
            contentDiv.classList.remove('fade-out');
            contentDiv.classList.add('fade-in');
            speakText(finalText);
        }, 1000);
        return;
    }
    
    const contentDiv = document.getElementById('dua-content');
    
    // First time, no need to fade out
    if (currentIndex === 0) {
        let text = currentDuas[currentIndex];
        contentDiv.textContent = text;
        contentDiv.classList.add('fade-in');
        speakText(text);
        currentIndex++;
    } else {
        // Fade out
        contentDiv.classList.remove('fade-in');
        contentDiv.classList.add('fade-out');
        
        setTimeout(() => {
            // Change text and fade in
            let text = currentDuas[currentIndex];
            contentDiv.textContent = text;
            contentDiv.classList.remove('fade-out');
            contentDiv.classList.add('fade-in');
            speakText(text);
            currentIndex++;
        }, 1000); // Wait for fade out animation
    }
}
