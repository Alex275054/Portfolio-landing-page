if (document.body.classList.contains('ev-date')) {
    // Якщо потрібен вивід дати та час + хвилин, тоді до спана з датою додаємо клас "time" <span class="date-1 time"></span>.
    // Працює як в порядку спадання, так і в порядку зростання.
    document.addEventListener('DOMContentLoaded', Datee);

    function Datee() {
        var msInDay = 86400000,
            counterLength = 90,
            months,
            countryName = 'ar', // Встановлюємо мову для місяців.
            isAbbreviated = false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн" і т.д, тоді ставим TRUE.
            localDate = new Date();

        switch (countryName) {
            case 'lv': // Latvia латышский
                months = [
                    'Janvāris',
                    'Februāris',
                    'Marts',
                    'Aprīlis',
                    'Maijs',
                    'Jūnijs',
                    'Jūlijs',
                    'Augusts',
                    'Septembris',
                    'Oktobris',
                    'Novembris',
                    'Decembris',
                ];
                break;
            case 'lt': // Litva литовский
                months = [
                    'Sausis',
                    'Vasaris',
                    'Kovas',
                    'Balandis',
                    'Gegužės',
                    'Birželis',
                    'Liepa',
                    'Rugpjūtis',
                    'Rugsėjis',
                    'Spalis',
                    'Lapkritis',
                    'Gruodis',
                ];
                break;
            case 'it': // Italy
                months = [
                    'Gennaio',
                    'Febbraio',
                    'Marzo',
                    'Aprile',
                    'Maggio',
                    'Giugno',
                    'Luglio',
                    'Agosto',
                    'Settembre',
                    'Ottobre',
                    'Novembre',
                    'Dicembre',
                ];
                break;
            case 'es': // Spain
                months = [
                    'Enero',
                    'Febrero',
                    'Marzo',
                    'Abril',
                    'Mayo',
                    'Junio',
                    'Julio',
                    'Agosto',
                    'Septiembre',
                    'Octubre',
                    'Noviembre',
                    'Diciembre',
                ];
                break;
            case 'fr': // France
                months = [
                    'Janvier',
                    'Février',
                    'Mars',
                    'Avril',
                    'Mai',
                    'Juin',
                    'Juillet',
                    'Août',
                    'Septembre',
                    'Octobre',
                    'Novembre',
                    'Décembre',
                ];
                break;
            case 'pt': // Portugal
                months = [
                    'Janeiro',
                    'Fevereiro',
                    'Março',
                    'Abril',
                    'Maio',
                    'Junho',
                    'Julho',
                    'Agosto',
                    'Setembro',
                    'Outubro',
                    'Novembro',
                    'Dezembro',
                ];
                break;
            case 'de': // Germany
                months = [
                    'Januar',
                    'Februar',
                    'März',
                    'April',
                    'Mai',
                    'Juni',
                    'Juli',
                    'August',
                    'September',
                    'Oktober',
                    'November',
                    'Dezember',
                ];
                break;
            case 'bg': // Bulgaria
                months = [
                    'Януари',
                    'Февруари',
                    'Март',
                    'Април',
                    'Май',
                    'Юни',
                    'Юли',
                    'Август',
                    'Септември',
                    'Октомври',
                    'Ноември',
                    'Декември',
                ];
                break;
            case 'pl': // Poland
                months = [
                    'Stycznia',
                    'Lutego',
                    'Marca',
                    'Kwietnia',
                    'Maja',
                    'Czerwca',
                    'Lipca',
                    'Sierpnia',
                    'Września',
                    'Października',
                    'Listopada',
                    'Grudnia',
                ];
                break;
            case 'ro': // Romania
                months = [
                    'Ianuarie',
                    'Februarie',
                    'Martie',
                    'Aprilie',
                    'Mai',
                    'Iunie',
                    'Iulie',
                    'August',
                    'Septembrie',
                    'Octombrie',
                    'Noiembrie',
                    'Decembrie',
                ];
                break;
            case 'id': // Indonesia
                months = [
                    'Januari',
                    'Februari',
                    'Maret',
                    'April',
                    'Mei',
                    'Juni',
                    'Juli',
                    'Agustus',
                    'September',
                    'Oktober',
                    'Nopember',
                    'Desember',
                ];
                break;
            case 'hu': // Hungary (Румунія)
                months = [
                    'Január',
                    'Február',
                    'Március',
                    'Április',
                    'Május',
                    'Június',
                    'Július',
                    'Augusztus',
                    'Szeptember',
                    'Október',
                    'November',
                    'December',
                ];
                break;
            case 'gr': // Greece
            case 'cy': // Cyprus (Кіпр)
                months = [
                    'Ιανουάριος',
                    'Φεβρουάριος',
                    'Μάρτιος',
                    'Απρίλιος',
                    'Μάιος',
                    'Ιούνιος',
                    'Ιούλιος',
                    'Αύγουστος',
                    'Σεπτέμβριος',
                    'Οκτώβριος',
                    'Νοέμβριος',
                    'Δεκέμβριος',
                ];
                break;
            case 'ar': // Арабский
                months = [
                    'يناير',
                    'فبراير',
                    'مسيرة',
                    'أبريل',
                    'قد',
                    'يونيو',
                    'يوليو',
                    'أغسطس',
                    'سبتمبر',
                    'أكتوبر',
                    'نوفمبر',
                    'ديسمبر',
                ];
                break;
            case 'th': // Тайский
                months = [
                    'มกราคม',
                    'กุมภาพันธ์',
                    'มีนาคม',
                    'เมษายน',
                    'พฤษภาคม',
                    'มิถุนายน',
                    'กรกฎาคม',
                    'สิงหาคม',
                    'กันยายน',
                    'ตุลาคม',
                    'พฤศจิกายน',
                    'ธันวาคม',
                ];
                break;
            case 'ru': // Русский
                months = [
                    'Января',
                    'Февраля',
                    'Марта',
                    'Апреля',
                    'Мая',
                    'Июня',
                    'Июля',
                    'Августа',
                    'Сентября',
                    'Октября',
                    'Ноября',
                    'Декабря',
                ];
                break;
            case 'ua': // Українська
                months = [
                    'Січня',
                    'Лютого',
                    'Березня',
                    'Квітня',
                    'Травня',
                    'Червня',
                    'Липня',
                    'Серпня',
                    'Вересня',
                    'Жовтня',
                    'Листопада',
                    'Грудня',
                ];
                break;
            case 'en': // Английский
                months = [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ];
                break;
            case 'ge': // Грузинский
                months = [
                    'იანვარი',
                    'თებერვალი',
                    'მარტი',
                    'აპრილი',
                    'მაისი',
                    'ივნისი',
                    'ივლისი',
                    'აგვისტო',
                    'სექტემბერი',
                    'ოქტომბერი',
                    'ნოემბერი',
                    'დეკემბერი',
                ];
                break;
            case 'kz': // Казахский
                months = [
                    'Қаңтар',
                    'Ақпан',
                    'Марш',
                    'Сәуір',
                    'Мүмкін',
                    'Маусым',
                    'Шілде',
                    'Тамыз',
                    'Қыркүйек',
                    'Қазан',
                    'Қараша',
                    'Желтоқсан',
                ];
                break;
            case 'sk': // Словацкий
                months = [
                    'január',
                    'február',
                    'marec',
                    'apríl',
                    'máj',
                    'júna',
                    'júl',
                    'august',
                    'septembra',
                    'október',
                    'november',
                    'december',
                ];
                break;
            case 'cz': // Czech
                months = [
                    'Leden',
                    'Únor',
                    'Březen',
                    'Duben',
                    'Květen',
                    'Červen',
                    'Červenec',
                    'Srpen',
                    'Září',
                    'Říjen',
                    'Listopad',
                    'Prosinec',
                ];
                break;
            case 'hr': // Хорватский
                months = [
                    'siječanj',
                    'veljača',
                    'ožujak',
                    'travanj',
                    'svibanj',
                    'lipanj',
                    'srpanj',
                    'kolovoz',
                    'rujan',
                    'listopad',
                    'studeni',
                    'prosinac',
                ];
                break;
            case 'sl': // Словенский
                months = [
                    'Januarja',
                    'Februarja',
                    'Marca',
                    'Aprila',
                    'Maja',
                    'Junija',
                    'Julija',
                    'Avgusta',
                    'Septembra',
                    'Oktobra',
                    'Novembra',
                    'Decembra',
                ];
                break;
            case 'nl': // Нидерландский
                months = [
                    'januari',
                    'februari',
                    'maart',
                    'april',
                    'mei',
                    'juni',
                    'juli',
                    'augustus',
                    'september',
                    'oktober',
                    'november',
                    'december',
                ];
                break;
            case 'vi': // Вьетнамский
                months = [
                    'tháng một',
                    'tháng hai',
                    'diễu hành',
                    'tháng tư',
                    'có thể',
                    'tháng sáu',
                    'tháng bảy',
                    'tháng tám',
                    'tháng chín',
                    'tháng mười',
                    'tháng mười một',
                    'Tháng 12',
                ];
                break;
            case 'my': // Малайский
                months = [
                    'Januari',
                    'Februari',
                    'Mac',
                    'April',
                    'Mei',
                    'Jun',
                    'Julai',
                    'Ogos',
                    'September',
                    'Oktober',
                    'November',
                    'Disember',
                ];
                break;
            case 'mm': // Бирманский
                months = [
                    'ဇန်နဝါရီ',
                    'ဖေဖော်ဝါရီလ',
                    'ချီတက်',
                    '.ပြီလ',
                    'မေ',
                    'ဇွန်',
                    'ဇူလိုင်',
                    'သြဂုတ်',
                    'စက်တင်ဘာ',
                    'အောက်တိုဘာ',
                    'နိုဝင်ဘာ',
                    'ဒီဇင်ဘာ',
                ];
                break;
            case 'in': // Хинди (Индия)
                months = [
                    'जनवरी',
                    'फरवरी',
                    'मार्च',
                    'अप्रैल',
                    'मई',
                    'जून',
                    'जुलाई',
                    'अगस्त',
                    'सितंबर',
                    'अक्टूबर',
                    'नवंबर',
                    'दिसंबर',
                ];
                break;
            case 'tw': // Китайский (Тайвань)
                months = [
                    '一月',
                    '二月',
                    '行軍',
                    '四月',
                    '可能',
                    '六月',
                    '七月',
                    '八月',
                    '九月',
                    '十月',
                    '十一月',
                    '十二月',
                ];
                break;
            case 'bd': // Бенгальский (Бангладеш)
                months = [
                    'জানুয়ারী',
                    'ফেব্রুয়ারি',
                    'এপ্রিল',
                    'মে',
                    'জুন',
                    'জুলাই',
                    'অগাস্ট',
                    'অগাস্ট',
                    'সেপ্টেম্বর',
                    'অক্টোবর',
                    'নভেম্বর',
                    'ডিসেম্বর',
                ];
                break;
        }
        if (isAbbreviated) {
            for (var i = 0; i < months.length; i++) {
                months[i] = months[i].slice(0, 3).toLowerCase(); // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
            }
        }

        for (var counter = 0; counter < counterLength; counter++) {
            var dateClass = 'date-' + counter,
                nodeList = document.getElementsByClassName(dateClass),
                date = new Date(localDate.getTime() - counter * msInDay),
                timeCounter = 0;
            var timeArray = time(nodeList /*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.

            timeArray = timeFormat(timeArray);

            for (var i = 0; i < nodeList.length; i++) {
                var data = nodeList[i].dataset;

                if (data.format) {
                    nodeList[i].innerHTML = format(date, data.format);
                    // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
                    // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
                } else {
                    nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
                }
                if (/\btime\b/.test(nodeList[i].className)) {
                    nodeList[i].innerHTML += ' ' + timeArray[timeCounter]; // Рядок для формату виводу часу.
                    timeCounter++;
                }
            }
        }

        // <span clas="date-NUMBER"></span> - мотає час назад на NUMBER днів. Наприклад, <span className="date-5"></span>
        // <span clas="dateNUMBER"></span> - мотає час вперед на NUMBER днів. Наприклад, <span className="date5"></span>

        for (var counter = 0; counter < counterLength; counter++) {
            var dateClass = 'date' + counter,
                nodeList = document.getElementsByClassName(dateClass),
                date = new Date(localDate.getTime() + counter * msInDay),
                timeCounter = 0;
            var timeArray = time(nodeList /*, true*/); // Розкоментувати, якщо необхідне сортування в порядку спадання.

            timeArray = timeFormat(timeArray);

            for (var i = 0; i < nodeList.length; i++) {
                var data = nodeList[i].dataset;

                if (data.format) {
                    nodeList[i].innerHTML = format(date, data.format);
                    // format: особливий формать для окремої дати. Додаєм як data-format="фомарт". Формати дивитись в switch'і нижче. dd - цифри, day - прописом.
                    // <span class="date-1" data-format="dd month yyyy"></span> - мотає на 1 день назад і виводить цей span у вигляді "24 Липня 1995".
                } else {
                    nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/); // Default: dd.mm.yyyy ADD FORMAT HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
                }
            }
        }

        function time(nodeList, reverse) {
            var timeArray = [];

            for (var i = 0; i < nodeList.length; i++) {
                if (nodeList[i].className.match(/\btime\b/)) {
                    timeArray.push(timeRandom());
                }
            }

            if (reverse)
                timeArray.sort(function (a, b) {
                    return b - a;
                });
            else
                timeArray.sort(function (a, b) {
                    return a - b;
                });

            return timeArray;
        }

        function timeRandom() {
            return Math.round(0 + Math.random() * 1440);
        }

        function timeFormat(timearray) {
            var array = [];

            for (var i = 0; i < timearray.length; i++) {
                var htemp = Math.floor(timearray[i] / 60),
                    mtemp = timearray[i] % 60,
                    hours = htemp < 10 ? '0' + htemp : htemp,
                    minutes = mtemp < 10 ? '0' + mtemp : mtemp;
                array.push(hours + ':' + minutes);
            }

            return array;
        }

        function format(date, formatstring) {
            var innerDate = '',
                day = date.getDate(),
                year = date.getFullYear(),
                month = date.getMonth() + 1,
                fo = formatstring || true;

            switch (fo) {
                case 'yyyy':
                    innerDate += '' + year;
                    return innerDate;

                case 'yyyy-1':
                    innerDate += '' + year - 1;
                    return innerDate;

                case 'yyyy-2':
                    innerDate += '' + year - 2;
                    return innerDate;

                case 'mm.dd.yyyy':
                    innerDate += month < 10 ? '0' + month : month;
                    innerDate += '.';
                    innerDate += day < 10 ? '0' + day : day;
                    innerDate += '.' + year;
                    return innerDate;

                case 'month':
                    innerDate += months[month - 1].toLowerCase();
                    return innerDate;

                case 'dd':
                    innerDate += day < 10 ? '0' + day : day;
                    return innerDate;

                case 'dd month':
                    innerDate += day < 10 ? '0' + day : day;
                    innerDate += ' ';
                    innerDate += months[month - 1].toLowerCase();
                    return innerDate;

                case 'dd month yyyy':
                    innerDate += day < 10 ? '0' + day : day;
                    innerDate += ' ';
                    innerDate += months[month - 1].toLowerCase();
                    innerDate += ' ' + year;
                    return innerDate;

                case 'day dd, month yyyy':
                    var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
                    innerDate += days[new Date(year, month - 1, day).getDay()];
                    innerDate += ' ';
                    innerDate += day < 10 ? '0' + day : day;
                    innerDate += ' ';
                    innerDate += months[month - 1];
                    innerDate += ' ' + year;
                    return innerDate;

                case 'dd/mm/yyyy':
                    innerDate += day < 10 ? '0' + day : day;
                    innerDate += '/';
                    innerDate += month < 10 ? '0' + month : month;
                    innerDate += '/' + year;
                    return innerDate;

                case 'dd-mm-yyyy':
                    innerDate += day < 10 ? '0' + day : day;
                    innerDate += '-';
                    innerDate += month < 10 ? '0' + month : month;
                    innerDate += '-' + year;
                    return innerDate;

                default:
                    innerDate += day < 10 ? '0' + day : day;
                    innerDate += '.';
                    innerDate += month < 10 ? '0' + month : month;
                    innerDate += '.' + year;
                    return innerDate;
            }
        }
    }
}
$(function () {
    $('a[href^="#"]').on('click', function (event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr('href'),
            dn = $(sc).offset().top;

        $('html, body').animate({ scrollTop: dn }, 1000);
    });
});

var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');
var time = 600;

if (localStorage.getItem('wheel')) {
    $('.spin-wrapper').slideUp();
    $('.order_block').slideDown();
    time = localStorage.getItem('time');
    start_timer();
    $('.btm').text('طلب CollagenAX مع خصم %50!');
}

function spin() {
    if (!wheel.classList.contains('rotated')) {
        wheel.classList.add('super-rotation');
        setTimeout(function () {
            resultWrapper.style.display = 'block';
            localStorage.setItem('wheel', true);
        }, 8000);
        setTimeout(function () {}, 10000);
        wheel.classList.add('rotated');
    }
}

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
    e.preventDefault();
    $('.spin-wrapper').slideUp();
    $('.order_block').slideDown();
    start_timer();
    $('.btm').text('طلب CollagenAX مع خصم %50!');
    $('.spin-result-wrapper').fadeOut();

    var top = $('#roulette').offset().top;
    $('body,html').animate({ scrollTop: top }, 800);
});

var intr;

function start_timer() {
    intr = setInterval(tick, 1000);
}

function tick() {
    time = time - 1;

    if (time < 0) {
        time = 0;
        $('#min').html('00');
        $('#sec').html('00');
    }
    localStorage.setItem('time', time);
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;

    if (mins == 0 && secs == 0) {
        return;
    }
    secs = secs >= 10 ? secs : '0' + secs;

    $('#min').html('0' + mins);
    $('#sec').html(secs);
}
