let game = {
    /**
     * Запускает игру.
     */
    run() {
        // Бесконечный цикл
        if (!confirm("Приветствуем будущего миллионера! Не хотите ли сыграть в игру?")) return;

        let score = 0;
        let currQuestIdx = 0;
        while (true) {
            let currQuest = config.content[currQuestIdx];
            let ans = +prompt(`Ответе на вопрос введя номер ответа:\n\n${currQuest.question}\n\n1: ${currQuest.answers[0]}\n2: ${currQuest.answers[1]}\n3: ${currQuest.answers[2]}\n4: ${currQuest.answers[3]}`);

            if (ans) {
                if (ans - 1 === currQuest.answerIdx) {
                    score++;
                }
            } else {
                let b = confirm(`Нужно ввести число от 1 до 4-х или Вы хотите завершить игру?`);
                if (b) {
                    return;
                } else {
                    continue;
                }
            }

            currQuestIdx++;
            if (currQuestIdx >= config.content.length) {
                // output score, let game?
                let a = confirm(`Вы ответили правильно на ${score} вопросов из ${config.content.length}.\n\nХотите сыграть ещё?\n`);
                if (a) {
                    score = 0;
                    currQuestIdx = 0;
                } else {
                    return;
                }
            }
        }
    },
};

game.run();