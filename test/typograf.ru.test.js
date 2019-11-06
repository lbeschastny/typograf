import { typografTest } from './helpers';

const ruTests = [
    [
        'В	этом   тексте  много пробелов.',
        'В\u00A0этом тексте много пробелов.'
    ],
    [
        'При при проверке текста обнаружились обнаружились повторяющиеся слова слова. Слова убраны.',
        'При проверке текста обнаружились повторяющиеся слова. Слова убраны.',
        {
            enableRule: ['common/other/repeatWord']
        }
    ],
    [
        'Возьми ка детка молока.  А коль увижу де, что казнь ему мала, повешу тут же всех судей вокруг стола. Поди кась так.',
        'Возьми-ка детка молока. А\u00A0коль увижу-де, что казнь ему мала, повешу тут\u00A0же всех судей вокруг стола. Поди-кась\u00A0так.',
        {
            enableRule: ['ru/dash/de']
        }
    ],
    [
        'Кое как дошли. Кой кого встретили. Кое от кого, кое на чем, кой у кого, кое с чьим.',
        'Кое-как дошли. Кой-кого встретили. Кое от\u00A0кого, кое на\u00A0чем, кой у\u00A0кого, кое с\u00A0чьим.'
    ],
    [
        'Секретарь, хотя и чувствовал свое слабое недовольство, все таки радовался наличию таких старушек в активе района. Но хоть и велик был соблазн, я таки успел себя побороть.',
        'Секретарь, хотя и\u00A0чувствовал свое слабое недовольство, все-таки радовался наличию таких старушек в\u00A0активе района. Но\u00A0хоть и\u00A0велик был соблазн, я\u00A0таки успел себя побороть.'
    ],
    [
        'Из за леса величаво выплывало солнце. Из под развесистой сирени вдруг с лаем выскочила собака.',
        'Из-за леса величаво выплывало солнце. Из-под развесистой сирени вдруг с\u00A0лаем выскочила собака.'
    ],
    [
        'Правда!? Правда!!! Неправда??? Честно?? Честно!! Проехали.. Задумчиво...',
        'Правда?! Правда!!! Неправда??? Честно? Честно! Проехали. Задумчиво…'
    ],
    [
        'Некоторые виды деревьев : ель ,сосна , берёза, дуб ; растут в наших лесах .',
        'Некоторые виды деревьев: ель, сосна, берёза, дуб; растут в\u00A0наших лесах.'
    ],
    [
        'Вывод:верен.',
        'Вывод: верен.'
    ],
    [
        '100 %',
        '100%'
    ],
    [
        '- Я пошёл домой... - Может останешься? - Нет, ухожу.',
        '—\u00A0Я\u00A0пошёл домой… —\u00A0Может останешься? —\u00A0Нет, ухожу.'
    ],
    [
        'Я бы в лётчики б пошёл, пусть меня научат.',
        'Я\u00A0бы в\u00A0лётчики\u00A0б пошёл, пусть меня научат.'
    ],
    [
        '1/2, 1/4, 3/4, 123/432',
        '½, ¼, ¾, 123/432'
    ],
    [
        'Coca-Cola(r) - зарегистрированный товарный знак.',
        'Coca-Cola®\u00A0— зарегистрированный товарный знак.'
    ],
    [
        '(c) Eugene Spearance',
        '© Eugene Spearance'
    ],
    [
        'ВасяПупкин(tm)',
        'ВасяПупкин™'
    ],
    [
        'Раздобудь к утру ковёр -\nШитый золотом узор!..\nГосударственное дело, -\nРасшибись, а будь добёр!',
        'Раздобудь к\u00A0утру ковёр\u00A0—\nШитый золотом узор!..\nГосударственное дело,\u00A0—\nРасшибись, а\u00A0будь добёр!'
    ],
    [
        '§32, §IV',
        '§\u202F32, §\u202FIV'
    ],
    [
        '№15Ф, №34/25',
        '№\u202F15Ф, №\u202F34/25'
    ],
    [
        'Она добавила: "И цвет мой самый любимый - "эсмеральда"".',
        'Она добавила: «И\u00A0цвет мой самый любимый\u00A0— „эсмеральда“».'
    ],
    [
        'г.Тюмень, ул.Ленина, д. 4',
        'г.\u00A0Тюмень, ул.\u00A0Ленина, д.\u00A04'
    ],
    [
        'Разрешение 300dpi (для офсета).',
        'Разрешение 300\u00A0dpi (для офсета).'
    ],
    [
        'Жёлто-оранжевый цвет. Ростов-на-Дону красивый город.',
        'Жёлто-оранжевый цвет. Ростов-на-Дону красивый город.'
    ],
    [
        'Адрес localhost - 127.0.0.1',
        'Адрес localhost\u00A0— 127.0.0.1'
    ],
    [
        'Выставка пройдёт в апреле-мае этого года.',
        'Выставка пройдёт в\u00A0апреле–мае этого года.'
    ],
    [
        'Пушкин, оценивая всех своих предшественников, писал: &quot;... Некоторые оды Державина, несмотря на неправильность языка и неровность слога, исполнены порывами гения...&quot;.',
        'Пушкин, оценивая всех своих предшественников, писал: «… Некоторые оды Державина, несмотря на\u00A0неправильность языка и\u00A0неровность слога, исполнены порывами гения…».'
    ],
    [
        'ООО "Фирма "Терминал", НИИ "ОблСнабВротКомпот"',
        'ООО\u00A0«Фирма «Терминал», НИИ\u00A0«ОблСнабВротКомпот»'
    ],
    [
        'Оля, Иван, Олег и др. ребята.',
        'Оля, Иван, Олег и\u00A0др. ребята.'
    ],
    [
        'На лесопилку завезли 32 м3 леса, из которых 4м3 пустили под распил на 25мм доски, длинной по 6м.',
        'На\u00A0лесопилку завезли 32\u00A0м³ леса, из\u00A0которых 4\u00A0м³ пустили под распил на\u00A025\u00A0мм доски, длинной по\u00A06\u00A0м.'
    ],
    [
        'Мало написать а запятые кто за тебя расставит. Я же расставлял но похоже что-то пропустил.',
        'Мало написать, а\u00A0запятые кто за\u00A0тебя расставит. Я\u00A0же расставлял, но\u00A0похоже что-то пропустил.'
    ],
    [
        'Текст( ( Внутри ) скобок ).',
        'Текст ((Внутри) скобок).'
    ],
    [
        'P.S. привет всем.',
        'P.\u00A0S. привет всем.'
    ],
    [
        'P.P.S. и мне тоже.',
        'P.\u00A0P.\u00A0S. и\u00A0мне тоже.'
    ],
    [
        'don\'t',
        'don’t'
    ],
    [
        'Данные изложены в таблице см.цветной вкладыш. Дом им.Пушкина.',
        'Данные изложены в\u00A0таблице см.\u00A0цветной вкладыш. Дом им.\u00A0Пушкина.'
    ],
    [
        'Инструкцию см. гл. 8, стр.34, рис.3 или илл.3.',
        'Инструкцию см.\u00A0гл.\u00A08, стр.\u00A034, рис.\u00A03 или илл.\u00A03.'
    ],
    [
        'Документ был подписан 17.02.1983г. И утратил свою силу 07.03.93 года.',
        'Документ был подписан 17.02.1983\u00A0г. И\u00A0утратил свою силу 07.03.93 года.'
    ],
    [
        'Это событие произошло между 1999-2001г.г., на стыке XX-XXIв.',
        'Это событие произошло между 1999–2001\u00A0гг., на\u00A0стыке XX–XXI\u00A0вв.'
    ],
    [
        'Так бывает. И вот так...И ещё вот так!..Бывает же???Что поделать.',
        'Так бывает. И\u00A0вот\u00A0так… И\u00A0ещё вот так!.. Бывает\u00A0же??? Что поделать.'
    ],
    [
        'Собеседования состоятся 14-24 сентября, в актовом зале с 11:30-13:00.',
        'Собеседования состоятся 14–24\u00A0сентября, в\u00A0актовом зале с\u00A011:30–13:00.'
    ],
    [
        '3х4, 3 х 6',
        '3×4, 3×6'
    ],
    [
        '123 456 789 руб. В стычке участвовало 3 200 человек.',
        '123\u202F456\u202F789\u00A0руб. В\u00A0стычке участвовало 3\u202F200 человек.'
    ],
    [
        'Опять же что - то получилось, но как- то не так.',
        'Опять\u00A0же что\u00A0— то\u00A0получилось, но\u00A0как-то не\u00A0так.'
    ],
    [
        'А.С.Пушкин, Пушкин А.С.',
        'А.\u00A0С.\u00A0Пушкин, Пушкин А.С.'
    ]
    /*[
        '123-32',
        '123-32'
    ],
    [
        'Кто то где то когда то как то что то чем то стукнул. И возможно чего нибудь бы получилось если б кто либо пришел.',
        'Кто то\u00A0где то\u00A0когда то\u00A0как то\u00A0что то\u00A0чем то\u00A0стукнул. И\u00A0возможно чего-нибудь\u00A0бы получилось если&nbsp;б кто-либо пришел.',
    ],
    [
        'В смешанных лесах встречаются разнообразные деревья, как то: береза, осина, кедр, сосна.',
        'В\u00A0смешанных лесах встречаются разнообразные деревья, как то: береза, осина, кедр, сосна.'
    ],
    [
        '10,34руб., 23тыс.долл., 64 млн.евро, 34.3€, 56$, 3,65уе',
        '10,34\u00A0руб., 23\u00A0тыс.\u00A0долл., 64\u00A0млн.\u00A0евро, 34.3\u00A0€, 56\u00A0$, 3,65\u00A0у.\u00A0е.'
    ],
    [
        'Лес, газ, нефть и тд., и т.п.. Перины, подушки в тч. подушки-думки.',
        'Лес, газ, нефть и\u00A0т.\u00A0д., и\u00A0т.\u00A0п. Перины, подушки в\u00A0т.\u00A0ч. подушки-думки.'
    ],
    [
        '+7 (3452) 55-66-77, 8 905 555-55-55',
        '+7 (3452) 55-66-77, 8 905 555-55-55'
    ],
    [
        'Гост 5773-90 - российские стандартные форматы изданий',
        'ГОСТ\u00A05773–90\u00A0— российские стандартные форматы изданий'
    ],
    [
        '~23,5в',
        '~23,5\u00A0В'
    ],
    [
        'IV в до н.э, в V-VIвв до нэ., третий в. н.э.',
        'IV\u00A0в.\u00A0до\u00A0н.\u00A0э., в\u00A0V—VI\u00A0вв.\u00A0до\u00A0н.\u00A0э., третий в. н. э.'
    ]*/
];

typografTest(
    'typograf.ru, double execute',
    ruTests,
    {
        enableRule: ['common/number/digitGrouping'],
        locale: ['ru', 'en-US']
    }
);
