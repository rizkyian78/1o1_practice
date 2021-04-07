function designerPdfViewer(h, word) {
    const alphabet = ['a', 'b', 'c', 'd', 'e',
            'f', 'g', 'h', 'i', 'j',
            'k', 'l', 'm', 'n', 'o',
            'p', 'q', 'r', 's', 't',
            'u', 'v', 'w', 'x', 'y',
            'z'];
    
        let max = 0
        let wordLength = []
        for(let i = 0; i < word.length; i++) {
            const data = h[alphabet.indexOf(word[i])]
            wordLength.push(data)
        }
        max = Math.max(...wordLength)
        return max * wordLength.length
    }

    const result = (testStudent, testCase) => console.log(testStudent === testCase)

    result(designerPdfViewer([
        1, 3, 1, 3, 1, 4, 1, 3,
        2, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5,
        5, 7]
      , "zaba",), 28)

      result(designerPdfViewer([
        5, 1, 2, 7, 1, 3, 1, 3,
        2, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5,
        5, 7]
      , "daga",), 28)

      result(designerPdfViewer([
        5, 1, 2, 7, 1, 3, 1, 100,
        2, 33, 5, 20, 119, 5, 5, 5,
        20, 1, 17, 5, 12, 5, 13, 88,
        15, 77]
      , "xhy",), 300)