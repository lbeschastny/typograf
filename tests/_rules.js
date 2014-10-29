tests.push(['delDoublePunctiation', [
    ['У меня была только синяя краска;; но,, несмотря на это,, я затеял нарисовать охоту.', 'У меня была только синяя краска; но, несмотря на это, я затеял нарисовать охоту.'],
    ['Никогда не отказывайся от малого в работе:: из малого строится великое.', 'Никогда не отказывайся от малого в работе: из малого строится великое.']
]]);

tests.push(['exclamation', [
    ['!!', '!'],
    ['Ура!!  ', 'Ура!  '],
    ['!!!!', '!!!'],
    ['Ура!!!!  ', 'Ура!!!  ']
]]);

tests.push(['exclamationQuestion', [
    ['!?', '?!'],
    ['Может домой!?', 'Может домой?!']
]]);

tests.push(['quot', [
    ['Вот у вас "Мой спутник" – это не сочинение, это хорошо, потому что не выдумано.', 'Вот у вас «Мой спутник» – это не сочинение, это хорошо, потому что не выдумано.'],
    ['««Цыганы» мои не продаются вовсе»', '«„Цыганы“ мои не продаются вовсе»'],
    ['"Пример"', '«Пример»'],
    ['ОАО "Пример"', 'ОАО «Пример»']
]]);


tests.push(['dash/izza', [
    ['Из за лесу', 'Из-за лесу'],
    ['  Из за лесу', '  Из-за лесу'],
    ['из за гор', 'из-за гор'],
    ['  из за гор', '  из-за гор']
]]);

tests.push(['dash/izpod', [
    [' из под печки', ' из-под печки'],
    [' Из под печки', ' Из-под печки']
]]);

tests.push(['dash/koe', [
    ['Завелись кое какие деньжонки.', 'Завелись кое-какие деньжонки.'],
    ['Кое какие деньжонки.', 'Кое-какие деньжонки.'],
    ['Кое как', 'Кое-как'],
    ['Кой как', 'Кой-как'],
    ['кой с каким', 'кой с каким'],
    ['Кое в чем', 'Кое в чем'],
    ['Кой какой', 'Кой-какой']
]]);

tests.push(['dash/to', [
    ['Подобру то поздорову.', 'Подобру-то поздорову.'],
    ['когда то', 'когда-то'],
    ['Какой либо', 'Какой-либо'],
    ['откуда либо', 'откуда-либо'],
    ['Кто нибудь', 'Кто-нибудь'],
    ['ну кась', 'ну-кась']
]]);

tests.push(['dash/taki', [
    ['верно таки', 'верно-таки'],
    ['довольно таки', 'довольно-таки'],
    ['опять таки', 'опять-таки'],
    ['прямо таки', 'прямо-таки'],
    ['так таки', 'так-таки'],
    ['всё таки', 'всё-таки'],
    ['действительно таки', 'действительно-таки'],
    ['неужели таки', 'неужели-таки']
]]);

tests.push(['dash/main', [
    ['Правда - небольшая ложь', 'Правда\u00A0— небольшая ложь'],
    ['XX-XXI', 'XX—XXI'],
    ['XX - XXI', 'XX—XXI']
]]);

tests.push(['dash/month', [
    ['Март-декабрь', 'Март—декабрь'],
    ['январь-май', 'январь—май']
]]);

tests.push(['dash/weekday', [
    ['Вторник-среда', 'Вторник—среда'],
    ['понедельник-четверг', 'понедельник—четверг']
]]);

tests.push(['date/main', [
    ['2010-02-01', '01.02.2010'],
    [' 2010-02-01 ', ' 01.02.2010 '],
    ['11/22/2010', '22.11.2010'],
    [' 11/22/2010 ', ' 22.11.2010 ']
]]);

tests.push(['html/nbr', [
    ['a\nb\nc', 'a<br/>b<br/>c']
]]);

tests.push(['html/pbr', [
    ['a\n\nb\nc\n\nd', '<p>a</p>\n<p>b<br/>\nc</p>\n<p>d</p>'],
    ['a', '<p>a</p>']
]]);

tests.push(['html/stripTags', [
    ['123123 12<br/>12312 312 3<p>asdlalsdpa</p>', '123123 1212312 312 3asdlalsdpa'],
    ['<p', '<p'],
    ['<p align="center">Hello</p>', 'Hello']
]]);

tests.push(['html/url', [
    ['Ссылка https://example.com', 'Ссылка <a href="https://example.com">https://example.com</a>'],
    ['Ссылка http://example.com/', 'Ссылка <a href="http://example.com/">example.com</a>'],
    ['Ссылка http://example.com/path/', 'Ссылка <a href="http://example.com/path/">example.com/path/</a>'],
    ['Ссылка http://ww2.example.com/path/', 'Ссылка <a href="http://ww2.example.com/path/">ww2.example.com/path/</a>'],
    ['Ссылка http://www.example.com/path/', 'Ссылка <a href="http://www.example.com/path/">example.com/path/</a>']
]]);

tests.push(['nbsp/afterNum', [
    [' № 123', ' №\u00A0123'],
    [' №123', ' №\u00A0123'],
    [' § 123', ' §\u00A0123'],
    [' §123', ' §\u00A0123'],
    [' §XX', ' §\u00A0XX']
]]);

tests.push(['nbsp/afterShortWord', [
    ['Повторять, пока процесс не свернётся в навык.', 'Повторять, пока процесс не\u00A0свернётся в\u00A0навык.'],
]]);

tests.push(['nbsp/beforeParticle', [
    ['Может ли быть?', 'Может\u00A0ли быть?'],
    ['Может же быть?', 'Может\u00A0же быть?']
]]);

tests.push(['nbsp/beforeShortLastWord', [
    ['Голубка дряхлая моя!', 'Голубка дряхлая\u00A0моя!']
]]);

tests.push(['nbsp/but', [
    ['Его лодка скользнула вниз но бедняга держался по-прежнему стойко.', 'Его лодка скользнула вниз, но бедняга держался по-прежнему стойко.'],
    ['Я пошёл домой а он остался.', 'Я пошёл домой, а он остался.']
]]);

tests.push(['nbsp/m', [
    [' 2 м2 ', ' 2\u00A0м² '],
    [' 2.0 м2 ', ' 2.0\u00A0м² '],
    [' dd м2 ', ' dd м2 '],
    [' 20 м3 ', ' 20\u00A0м³ ']
]]);

tests.push(['nbsp/ooo', [
    ['ООО "Пример"', 'ООО\u00A0"Пример"'],
    ['ОАО "Пример"', 'ОАО\u00A0"Пример"']
]]);

tests.push(['nbsp/xxxx', [
    ['2012 г.', '2012\u00A0г.'],
    [' (2012 г.) ', ' (2012\u00A0г.) ']
]]);

tests.push(['nbsp/yy', [
    ['2012-2015 г. г. ', '2012-2015\u00A0гг. '],
    ['2012-2015г.г. ', '2012-2015\u00A0гг. ']
]]);

tests.push(['space/afterPunctuation', [
    ['Солнце садилось за горизонт,и поднялся ветер. Вот.', 'Солнце садилось за горизонт, и поднялся ветер. Вот.'],
    ['Солнце садилось за горизонт,и поднялся ветер!Вот.', 'Солнце садилось за горизонт, и поднялся ветер! Вот.'],
    ['Солнце садилось за горизонт,и поднялся ветер?Вот.', 'Солнце садилось за горизонт, и поднялся ветер? Вот.']
]]);

tests.push(['space/delBeforePercent', [
    ['20 %', '20%'],
    ['около 4\u00A0%', 'около 4%']
]]);

tests.push(['space/delBeforePunctuation', [
    ['И был посажен в крепость вместе с Измайловым ( странна судьба и союз сих имен ! ) .', 'И был посажен в крепость вместе с Измайловым (странна судьба и союз сих имен!).']
]]);

tests.push(['space/delRepeatSpace', [
    ['    asdk oaskdo       askd oasdk oasdk    asd koasd       ', ' asdk oaskdo askd oasdk oasdk asd koasd ']
]]);

tests.push(['space/delTrailingBlanks', [
    ['asda d  \t \n er er ert er er       \nassdf asf sdf asdf\n', 'asda d\n er er ert er er\nassdf asf sdf asdf\n']
]]);

tests.push(['space/replaceTab', [
    ['  \t \t \t  ', '         ']
]]);

tests.push(['space/trim', [
    ['   wkd kqw0ek 0qw    ', 'wkd kqw0ek 0qw']
]]);

tests.push(['sym/arrow', [
    ['20 + 10 -> 30', '20 + 10 → 30'],
    ['20 + 10 <- 30', '20 + 10 ← 30'],
    ['<-', '←'],
    ['->', '→']
]]);

tests.push(['sym/cc', [
    ['20 в. в.', '20\u00A0вв.'],
    ['1934 в. в.', '1934\u00A0вв.'],
    ['1934в.в.', '1934\u00A0вв.'],
    ['1934в. в.', '1934\u00A0вв.'],
    ['1934 в.в.', '1934\u00A0вв.']
]]);

tests.push(['sym/cf', [
    [' 200 C', ' 200 °C'],
    [' 200 C.', ' 200 °C.'],
    [' 20d C', ' 20d C'],
    [' 20 C1', ' 20 C1'],
    [' 200 F', ' 200 °F']
]]);

tests.push(['sym/copy', [
    ['(c)', '©'],
    ['(с)', '©'],
    ['(r)', '®'],
    ['(tm)', '™']
]]);

tests.push(['sym/fraction', [
    ['1/2', '½'],
    ['1/4', '¼'],
    ['3/4', '¾']
]]);

tests.push(['sym/hellip', [
    ['Текст текст... Другой текст... ', 'Текст текст… Другой текст… '],
    ['..', '..'],
    ['...', '…'],
    ['.....', '.....']
]]);

tests.push(['sym/plusMinus', [
    ['+-', '±'],
    ['+-100', '±100']
]]);

tests.push(['sym/times', [
    ['100 x 2', '100×2'],
    ['Пример: 30x3=90', 'Пример: 30×3=90'],
]]);

tests.push(['money/dollar', [
    ['100$', '100\u00A0$'],
    ['100 $', '100\u00A0$'],
    ['У меня есть $2!', 'У меня есть 2\u00A0$!'],
    ['У меня есть $2.5!', 'У меня есть 2.5\u00A0$!'],
    ['У меня есть $ 2!', 'У меня есть 2\u00A0$!'],
    ['У меня есть $ 2.5!', 'У меня есть 2.5\u00A0$!'],
    ['20 $ 30 центов', '20\u00A0$ 30 центов']
]]);

tests.push(['money/euro', [
    ['100€', '100\u00A0€'],
    ['100 €', '100\u00A0€'],
    ['У меня есть €2!', 'У меня есть 2\u00A0€!'],
    ['У меня есть €2.5!', 'У меня есть 2.5\u00A0€!'],
    ['У меня есть € 2!', 'У меня есть 2\u00A0€!'],
    ['У меня есть € 2.5!', 'У меня есть 2.5\u00A0€!'],
    ['20 € 30 центов', '20\u00A0€ 30 центов']
]]);
