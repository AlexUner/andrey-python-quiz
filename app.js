const cards = [
  {
    id: 1,
    topic: "NumPy",
    visual: "assets/ndarray.svg",
    question: "Как обычно импортируют NumPy?",
    answer: "import numpy as np",
    choices: ["import numpy as np", "import pandas as pd", "from numpy import pandas", "pip install numpy"],
    explain: "np - короткий общепринятый псевдоним. Он делает код короче: np.array, np.zeros, np.mean."
  },
  {
    id: 2,
    topic: "NumPy",
    visual: "assets/ndarray.svg",
    question: "Как создать массив NumPy из обычного списка Python?",
    answer: "np.array([1, 2, 3])",
    choices: ["np.array([1, 2, 3])", "np.list([1, 2, 3])", "pd.array([1, 2, 3])", "array.np([1, 2, 3])"],
    explain: "np.array преобразует список или вложенный список в ndarray."
  },
  {
    id: 3,
    topic: "NumPy",
    visual: "assets/ndarray.svg",
    question: "Главное отличие ndarray от обычного списка Python?",
    answer: "ndarray хранит элементы одного типа и быстро выполняет поэлементные операции.",
    choices: [
      "ndarray хранит элементы одного типа и быстро выполняет поэлементные операции.",
      "ndarray всегда хранит только строки.",
      "ndarray нельзя индексировать.",
      "ndarray работает только с CSV."
    ],
    explain: "Именно из-за однородного типа и внутренней оптимизации NumPy удобен для численных вычислений."
  },
  {
    id: 4,
    topic: "Форма массива",
    visual: "assets/shape.svg",
    question: "Что показывает свойство .shape?",
    answer: "Форму массива: число строк, столбцов и других измерений.",
    choices: ["Форму массива: число строк, столбцов и других измерений.", "Тип данных массива.", "Сумму всех элементов.", "Количество пропусков."],
    explain: "Например, форма (2, 3) означает 2 строки и 3 столбца."
  },
  {
    id: 5,
    topic: "Форма массива",
    visual: "assets/shape.svg",
    question: "Что показывает .ndim?",
    answer: "Количество измерений массива.",
    choices: ["Количество измерений массива.", "Количество уникальных значений.", "Количество строк с NaN.", "Размер файла на диске."],
    explain: "Вектор обычно имеет ndim = 1, матрица - ndim = 2."
  },
  {
    id: 6,
    topic: "Форма массива",
    visual: "assets/shape.svg",
    question: "Что показывает .size?",
    answer: "Общее количество элементов массива.",
    choices: ["Общее количество элементов массива.", "Количество столбцов DataFrame.", "Тип данных.", "Среднее значение."],
    explain: "Для массива формы (2, 3) size равен 6."
  },
  {
    id: 7,
    topic: "Создание массивов",
    visual: "assets/create-arrays.svg",
    question: "Как создать массив из нулей?",
    answer: "np.zeros(3) или np.zeros((2, 3))",
    choices: ["np.zeros(3) или np.zeros((2, 3))", "np.empty_list(3)", "pd.zeros(3)", "np.zeroes.only(3)"],
    explain: "В скобках можно передать длину или форму массива."
  },
  {
    id: 8,
    topic: "Создание массивов",
    visual: "assets/create-arrays.svg",
    question: "Что делает np.arange(0, 10, 2)?",
    answer: "Создает значения 0, 2, 4, 6, 8.",
    choices: ["Создает значения 0, 2, 4, 6, 8.", "Создает 10 случайных чисел.", "Создает 2 строки и 10 столбцов.", "Сортирует массив."],
    explain: "Правая граница 10 не включается, шаг равен 2."
  },
  {
    id: 9,
    topic: "Создание массивов",
    visual: "assets/create-arrays.svg",
    question: "Что делает np.linspace(0, 10, num=5)?",
    answer: "Создает 5 равномерно распределенных значений от 0 до 10.",
    choices: ["Создает 5 равномерно распределенных значений от 0 до 10.", "Создает значения с шагом 5.", "Удаляет 5 значений.", "Создает 5 столбцов DataFrame."],
    explain: "linspace удобен, когда нужно заданное количество точек на интервале."
  },
  {
    id: 10,
    topic: "Индексация",
    visual: "assets/mask.svg",
    question: "Что такое булева маска?",
    answer: "Массив True/False, которым выбирают элементы по условию.",
    choices: ["Массив True/False, которым выбирают элементы по условию.", "Способ загрузить CSV.", "Тип графика.", "Функция для транспонирования."],
    explain: "Например, a < 4 создает маску, а a[a < 4] возвращает подходящие элементы."
  },
  {
    id: 11,
    topic: "Индексация",
    visual: "assets/mask.svg",
    question: "Как выбрать из массива a элементы меньше 4?",
    answer: "a[a < 4]",
    choices: ["a[a < 4]", "a.less(4)", "a.loc[a < 4]", "np.read(a < 4)"],
    explain: "Условие внутри квадратных скобок фильтрует элементы."
  },
  {
    id: 12,
    topic: "Индексация",
    visual: "assets/mask.svg",
    question: "Что делает a[(a < 4) & (a % 2 == 0)]?",
    answer: "Выбирает элементы меньше 4 и четные.",
    choices: ["Выбирает элементы меньше 4 и четные.", "Выбирает элементы меньше 4 или четные.", "Считает сумму массива.", "Меняет форму массива."],
    explain: "Оператор & означает логическое И. Каждое условие лучше брать в скобки."
  },
  {
    id: 13,
    topic: "Оси",
    visual: "assets/axis.svg",
    question: "Что означает axis=0 при агрегации массива?",
    answer: "Считать по строкам для каждого столбца.",
    choices: ["Считать по строкам для каждого столбца.", "Считать по столбцам для каждой строки.", "Удалить нулевой столбец.", "Отсортировать строки."],
    explain: "В двумерной таблице axis=0 обычно дает результат по столбцам."
  },
  {
    id: 14,
    topic: "Оси",
    visual: "assets/axis.svg",
    question: "Что означает axis=1 при агрегации массива?",
    answer: "Считать по столбцам для каждой строки.",
    choices: ["Считать по столбцам для каждой строки.", "Считать по строкам для каждого столбца.", "Выбрать первую ось координат.", "Сбросить индекс."],
    explain: "axis=1 проходит вдоль столбцов внутри каждой строки."
  },
  {
    id: 15,
    topic: "Форма массива",
    visual: "assets/shape.svg",
    question: "Меняет ли reshape исходный массив автоматически?",
    answer: "Нет, результат нужно присвоить переменной.",
    choices: ["Нет, результат нужно присвоить переменной.", "Да, всегда меняет исходный массив.", "Да, но только для DataFrame.", "reshape только сортирует массив."],
    explain: "Если нужно сохранить новую форму: d = c.reshape((4, 2))."
  },
  {
    id: 16,
    topic: "Матрицы",
    visual: "assets/matrix.svg",
    question: "Чем отличается * от @ для матриц NumPy?",
    answer: "* выполняет поэлементное умножение, @ выполняет матричное умножение.",
    choices: ["* выполняет поэлементное умножение, @ выполняет матричное умножение.", "* транспонирует, @ сортирует.", "* работает только с Pandas.", "Разницы нет."],
    explain: "Это частый источник ошибок: m1 * m2 и m1 @ m2 дают разные результаты."
  },
  {
    id: 17,
    topic: "Матрицы",
    visual: "assets/matrix.svg",
    question: "Как посчитать скалярное произведение двух векторов?",
    answer: "np.dot(a, b)",
    choices: ["np.dot(a, b)", "pd.dot(a, b)", "a.reshape(b)", "np.unique(a, b)"],
    explain: "np.dot часто используется при ручном разборе матричного умножения."
  },
  {
    id: 18,
    topic: "Матрицы",
    visual: "assets/matrix.svg",
    question: "Как найти обратную матрицу A?",
    answer: "np.linalg.inv(A)",
    choices: ["np.linalg.inv(A)", "np.inverse(A)", "pd.linalg(A)", "A.reverse()"],
    explain: "Обратная матрица A^-1 нужна, например, для решения систем линейных уравнений."
  },
  {
    id: 19,
    topic: "Метрики",
    visual: "assets/mse.svg",
    question: "Что такое MSE?",
    answer: "Среднее значение квадратов ошибок между предсказанными и реальными значениями.",
    choices: ["Среднее значение квадратов ошибок между предсказанными и реальными значениями.", "Количество строк в таблице.", "Метод удаления пропусков.", "Тип индекса."],
    explain: "MSE штрафует большие ошибки сильнее, потому что разница возводится в квадрат."
  },
  {
    id: 20,
    topic: "Метрики",
    visual: "assets/mse.svg",
    question: "Как компактно посчитать MSE в NumPy?",
    answer: "np.mean(np.square(predVal - realVal))",
    choices: ["np.mean(np.square(predVal - realVal))", "pd.read_csv(predVal)", "np.sort(predVal - realVal)", "predVal @ realVal"],
    explain: "NumPy позволяет считать формулу сразу по всему массиву без явного цикла."
  },
  {
    id: 21,
    topic: "Pandas",
    visual: "assets/dataframe.svg",
    question: "Как обычно импортируют Pandas?",
    answer: "import pandas as pd",
    choices: ["import pandas as pd", "import numpy as pd", "from pandas import np", "pip install pandas"],
    explain: "pd - стандартный короткий псевдоним для Pandas."
  },
  {
    id: 22,
    topic: "Pandas",
    visual: "assets/dataframe.svg",
    question: "Что такое DataFrame?",
    answer: "Таблица данных со строками, столбцами и индексом.",
    choices: ["Таблица данных со строками, столбцами и индексом.", "Один список без индекса.", "Массив только из нулей.", "Файл с кодом Python."],
    explain: "DataFrame - основной объект Pandas для табличных данных."
  },
  {
    id: 23,
    topic: "Pandas",
    visual: "assets/dataframe.svg",
    question: "Что такое Series?",
    answer: "Один столбец или одномерный массив с индексом.",
    choices: ["Один столбец или одномерный массив с индексом.", "Вся база данных.", "График распределения.", "Команда установки пакета."],
    explain: "DataFrame можно представить как набор Series."
  },
  {
    id: 24,
    topic: "Загрузка данных",
    visual: "assets/csv.svg",
    question: "Как прочитать CSV-файл в Pandas?",
    answer: "pd.read_csv('file.csv')",
    choices: ["pd.read_csv('file.csv')", "np.read_excel('file.csv')", "pd.open_csv('file.csv')", "DataFrame.csv('file.csv')"],
    explain: "read_csv - базовая команда для загрузки CSV в DataFrame."
  },
  {
    id: 25,
    topic: "Загрузка данных",
    visual: "assets/csv.svg",
    question: "Как указать индексный столбец при чтении CSV?",
    answer: "pd.read_csv('file.csv', index_col=0)",
    choices: ["pd.read_csv('file.csv', index_col=0)", "pd.read_csv('file.csv', axis=0)", "pd.index('file.csv')", "np.read_csv(index=True)"],
    explain: "index_col=0 говорит Pandas взять первый столбец как индекс."
  },
  {
    id: 26,
    topic: "Первичный анализ",
    visual: "assets/dataframe.svg",
    question: "Что делает df.head()?",
    answer: "Показывает первые строки таблицы.",
    choices: ["Показывает первые строки таблицы.", "Удаляет пропуски.", "Строит график.", "Считает корреляцию."],
    explain: "head полезен сразу после загрузки датасета."
  },
  {
    id: 27,
    topic: "Первичный анализ",
    visual: "assets/dataframe.svg",
    question: "Что делает df.info()?",
    answer: "Показывает столбцы, типы данных, непустые значения и память.",
    choices: ["Показывает столбцы, типы данных, непустые значения и память.", "Показывает только первые 5 строк.", "Меняет индекс.", "Сортирует значения."],
    explain: "info быстро показывает структуру датасета и проблемы с пропусками."
  },
  {
    id: 28,
    topic: "Первичный анализ",
    visual: "assets/dataframe.svg",
    question: "Что делает df.describe()?",
    answer: "Показывает статистику по числовым столбцам.",
    choices: ["Показывает статистику по числовым столбцам.", "Удаляет все строки.", "Создает сводную таблицу.", "Загружает CSV."],
    explain: "describe показывает count, mean, std, min, quartiles и max."
  },
  {
    id: 29,
    topic: "Первичный анализ",
    visual: "assets/dataframe.svg",
    question: "Как получить статистику по категориальным столбцам?",
    answer: "df.describe(include=object)",
    choices: ["df.describe(include=object)", "df.info(include=number)", "df.category()", "np.describe(df)"],
    explain: "Для object-столбцов Pandas покажет count, unique, top и freq."
  },
  {
    id: 30,
    topic: "Фильтрация",
    visual: "assets/filter.svg",
    question: "Как выбрать один столбец DataFrame?",
    answer: "df['column_name']",
    choices: ["df['column_name']", "df(column_name)", "df.loc()", "np.column(df)"],
    explain: "Квадратные скобки с именем столбца возвращают Series."
  },
  {
    id: 31,
    topic: "Фильтрация",
    visual: "assets/filter.svg",
    question: "Как выбрать несколько столбцов DataFrame?",
    answer: "df[['col1', 'col2']]",
    choices: ["df[['col1', 'col2']]", "df['col1', 'col2']", "df.multi('col1', 'col2')", "np.array(df)"],
    explain: "Нужен список имен столбцов внутри квадратных скобок."
  },
  {
    id: 32,
    topic: "Фильтрация",
    visual: "assets/filter.svg",
    question: "Как выбрать строки по условию?",
    answer: "df[df['column'] > value]",
    choices: ["df[df['column'] > value]", "df.where.column > value", "df['column' > value]", "pd.filter(value)"],
    explain: "Это булева фильтрация, похожая на NumPy-маски."
  },
  {
    id: 33,
    topic: "Пропуски",
    visual: "assets/missing.svg",
    question: "Что такое NaN?",
    answer: "Пропущенное значение.",
    choices: ["Пропущенное значение.", "Тип графика.", "Команда импорта NumPy.", "Индексный столбец."],
    explain: "NaN нужно обнаруживать и обрабатывать перед анализом или ML-моделью."
  },
  {
    id: 34,
    topic: "Пропуски",
    visual: "assets/missing.svg",
    question: "Как проверить количество пропусков по столбцам?",
    answer: "df.isna().sum()",
    choices: ["df.isna().sum()", "df.dropna().sum()", "np.nan(df)", "df.empty()"],
    explain: "isna дает булеву карту пропусков, sum считает True по столбцам."
  },
  {
    id: 35,
    topic: "Пропуски",
    visual: "assets/missing.svg",
    question: "Как удалить строки с пропусками?",
    answer: "df.dropna()",
    choices: ["df.dropna()", "df.fillna()", "df.remove_empty()", "np.drop(df)"],
    explain: "dropna удаляет строки или столбцы с NaN в зависимости от параметров."
  },
  {
    id: 36,
    topic: "Пропуски",
    visual: "assets/missing.svg",
    question: "Как заменить пропуски на 0?",
    answer: "df.fillna(0)",
    choices: ["df.fillna(0)", "df.dropna(0)", "df.replace_nan()", "np.zeros(df)"],
    explain: "fillna заполняет пропуски заданным значением."
  },
  {
    id: 37,
    topic: "Индекс",
    visual: "assets/dataframe.svg",
    question: "Что делает set_index?",
    answer: "Делает выбранный столбец индексом таблицы.",
    choices: ["Делает выбранный столбец индексом таблицы.", "Удаляет все индексы навсегда.", "Создает график.", "Считает MSE."],
    explain: "Например, df.set_index('Unnamed: 0') назначает столбец индексом."
  },
  {
    id: 38,
    topic: "Индекс",
    visual: "assets/dataframe.svg",
    question: "Почему важно присваивать результат преобразования Pandas?",
    answer: "Многие методы не меняют исходный DataFrame без присваивания или inplace=True.",
    choices: ["Многие методы не меняют исходный DataFrame без присваивания или inplace=True.", "Pandas не умеет менять таблицы.", "Иначе Python удалит файл.", "Это нужно только для NumPy."],
    explain: "Например, df_missing.set_index(...) не сохранит результат, если его не присвоить."
  },
  {
    id: 39,
    topic: "Apply",
    visual: "assets/groupby.svg",
    question: "Что делает df.apply(...) в Pandas?",
    answer: "Применяет функцию к строкам или столбцам.",
    choices: ["Применяет функцию к строкам или столбцам.", "Загружает CSV.", "Проверяет версию Python.", "Создает единичную матрицу."],
    explain: "Например, apply(np.cumsum, axis=0) применяет накопительную сумму по столбцам."
  },
  {
    id: 40,
    topic: "GroupBy",
    visual: "assets/groupby.svg",
    question: "Что делает groupby?",
    answer: "Группирует данные по столбцу и позволяет агрегировать значения.",
    choices: ["Группирует данные по столбцу и позволяет агрегировать значения.", "Удаляет пропуски.", "Меняет форму NumPy-массива.", "Создает случайные числа."],
    explain: "После groupby часто вызывают sum, mean, size и другие агрегаты."
  },
  {
    id: 41,
    topic: "GroupBy",
    visual: "assets/groupby.svg",
    question: "Как выглядит пример группировки в Pandas?",
    answer: "df.groupby('Class').sum()",
    choices: ["df.groupby('Class').sum()", "df.group('Class')", "np.groupby(df)", "df.sum('Class').groupby()"],
    explain: "Данные группируются по Class, затем числовые значения суммируются внутри групп."
  },
  {
    id: 42,
    topic: "Pivot",
    visual: "assets/pivot.svg",
    question: "Что такое сводная таблица?",
    answer: "Таблица, где данные агрегируются по выбранным строкам и столбцам.",
    choices: ["Таблица, где данные агрегируются по выбранным строкам и столбцам.", "Обычный список Python.", "Функция для случайных чисел.", "Только график без данных."],
    explain: "pivot_table полезна для быстрых срезов и сравнений."
  },
  {
    id: 43,
    topic: "Pivot",
    visual: "assets/pivot.svg",
    question: "Как создать pivot_table по комнатам и позиции?",
    answer: "pd.pivot_table(df, values='Temperature', index='Room', columns='Position')",
    choices: [
      "pd.pivot_table(df, values='Temperature', index='Room', columns='Position')",
      "df.pivot_only('Temperature')",
      "np.pivot(df)",
      "pd.read_csv(df, pivot=True)"
    ],
    explain: "values - что агрегировать, index - строки, columns - столбцы."
  },
  {
    id: 44,
    topic: "Графики",
    visual: "assets/plot.svg",
    question: "Как построить простой график столбца Pandas?",
    answer: "df['Temperature'].plot()",
    choices: ["df['Temperature'].plot()", "df['Temperature'].draw_csv()", "np.read_plot(df)", "pd.chart.only(df)"],
    explain: "Pandas имеет встроенную обертку над matplotlib для быстрых графиков."
  },
  {
    id: 45,
    topic: "Графики",
    visual: "assets/plot.svg",
    question: "Как построить bar chart для столбца?",
    answer: "df['Temperature'].plot(kind='bar')",
    choices: ["df['Temperature'].plot(kind='bar')", "df['Temperature'].bar_only()", "np.bar(df)", "df.boxplot(kind='bar')"],
    explain: "Параметр kind задает тип графика: bar, hist, kde, box и другие."
  },
  {
    id: 46,
    topic: "EDA",
    visual: "assets/eda.svg",
    question: "Какие первые команды полезно выполнить после загрузки нового датасета?",
    answer: "head(), info(), describe(), isna().sum(), просмотр уникальных значений.",
    choices: [
      "head(), info(), describe(), isna().sum(), просмотр уникальных значений.",
      "Только plot(), без просмотра данных.",
      "Сразу обучить модель.",
      "Удалить все категориальные признаки."
    ],
    explain: "Это базовый первичный анализ: структура, типы, пропуски, статистика и категории."
  },
  {
    id: 47,
    topic: "EDA",
    visual: "assets/eda.svg",
    question: "Зачем в примере diamonds текстовые категории переводили в числа?",
    answer: "Чтобы подготовить категориальные признаки к анализу и будущим ML-алгоритмам.",
    choices: ["Чтобы подготовить категориальные признаки к анализу и будущим ML-алгоритмам.", "Чтобы испортить исходные данные.", "Чтобы удалить все строки.", "Чтобы заменить CSV на Excel."],
    explain: "Для этого использовались словари и метод map."
  },
  {
    id: 48,
    topic: "EDA",
    visual: "assets/eda.svg",
    question: "Что показывает корреляционная матрица?",
    answer: "Связь между парами числовых признаков.",
    choices: ["Связь между парами числовых признаков.", "Количество строк с NaN.", "Размер файла.", "Имена всех CSV-файлов."],
    explain: "Значения около 1 означают сильную положительную связь, около -1 - отрицательную."
  }
];

cards.push(...(window.extraCards || []));

const totalCards = cards.length;
const ticketSize = 20;
const storeKey = "lecture01-cards-progress-v2";
const app = document.getElementById("app");
let progress = loadProgress();
let state = {
  screen: "home",
  deck: [],
  index: 0,
  answered: {},
  selected: null,
  mode: "ticket"
};

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(storeKey)) || { mastered: {}, attempts: 0 };
  } catch {
    return { mastered: {}, attempts: 0 };
  }
}

function saveProgress() {
  localStorage.setItem(storeKey, JSON.stringify(progress));
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startTicket() {
  state = {
    screen: "quiz",
    mode: "ticket",
    deck: buildTicket(),
    index: 0,
    answered: {},
    selected: null
  };
  render();
}

function startFinalTest() {
  if (!isFinalUnlocked()) return;
  state = {
    screen: "quiz",
    mode: "final",
    deck: shuffle(cards),
    index: 0,
    answered: {},
    selected: null
  };
  render();
}

function buildTicket() {
  const mastered = new Set(Object.keys(progress.mastered).map(Number));
  const unmastered = shuffle(cards.filter(card => !mastered.has(card.id)));
  const masteredCards = shuffle(cards.filter(card => mastered.has(card.id)));
  return [...unmastered, ...masteredCards].slice(0, Math.min(ticketSize, totalCards));
}

function masteredCount() {
  return Object.keys(progress.mastered).length;
}

function isFinalUnlocked() {
  return masteredCount() >= totalCards;
}

function clearProgress() {
  progress = { mastered: {}, attempts: 0 };
  saveProgress();
  render();
}

function topbar(subtitle = "NumPy, Pandas, анализ данных") {
  return `
    <div class="topbar">
      <div class="brand">
        <h1>Лекция 1</h1>
        <p>${subtitle}</p>
      </div>
      ${state.screen === "home" ? "" : `<button class="icon-btn" type="button" onclick="goHome()" aria-label="На главную">←</button>`}
    </div>
  `;
}

function goHome() {
  state.screen = "home";
  render();
}

function renderHome() {
  const learned = masteredCount();
  const unlocked = isFinalUnlocked();
  app.innerHTML = `
    ${topbar()}
    <section class="stats" aria-label="Статистика">
      <div class="stat"><strong>${learned}</strong><span>правильно</span></div>
      <div class="stat"><strong>${totalCards}</strong><span>всего</span></div>
      <div class="stat"><strong>${progress.attempts || 0}</strong><span>ответов</span></div>
    </section>
    <section class="home-grid">
      <article class="mode-card">
        <h2>Билет</h2>
        <button class="primary-btn" type="button" onclick="startTicket()">Начать билет</button>
      </article>
      <article class="mode-card">
        <h2>Полный тест</h2>
        <button class="${unlocked ? "primary-btn" : "ghost-btn"}" type="button" ${unlocked ? "" : "disabled"} onclick="startFinalTest()">Начать полный тест</button>
      </article>
    </section>
    <div class="actions single">
      <button class="danger-btn" type="button" onclick="clearProgress()">Сбросить прогресс</button>
    </div>
  `;
}

function renderQuiz() {
  if (state.index >= state.deck.length) {
    renderResult();
    return;
  }
  const card = state.deck[state.index];
  const answered = state.answered[card.id];
  const current = state.index + 1;
  const pct = Math.round((state.index / state.deck.length) * 100);
  app.innerHTML = `
    ${topbar(state.mode === "final" ? "Полный тест" : "Билет")}
    <section class="toolbar">
      <div class="progress-wrap">
        <div class="progress-line"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="progress-meta"><span>Вопрос ${current} из ${state.deck.length}</span><span>${masteredCount()} из ${totalCards}</span></div>
      </div>
      <div class="number-grid">${state.deck.map((item, idx) => numberButton(item, idx)).join("")}</div>
    </section>
    <article class="study-card">
      <img class="visual" src="${card.visual}" alt="">
      <div class="study-main">
        <div class="tag-row"><span class="tag">${card.topic}</span><span class="tag">Лекция 1</span></div>
        <h2 class="question">${escapeHtml(card.question)}</h2>
        <div class="answer-list">
          ${getChoices(card).map(choice => answerButton(card, choice, answered)).join("")}
        </div>
        ${answered ? reveal(card, answered) : ""}
        <div class="actions ${answered ? "" : "single"}">
          ${answered ? `<button class="ghost-btn" type="button" onclick="nextQuestion()">Дальше</button>` : `<button class="ghost-btn" type="button" onclick="skipQuestion()">Пропустить</button>`}
          ${answered ? `<button class="primary-btn" type="button" onclick="goHome()">Завершить</button>` : ""}
        </div>
      </div>
    </article>
  `;
}

function numberButton(item, idx) {
  const answered = state.answered[item.id];
  const cls = idx === state.index ? "current" : answered ? (answered.correct ? "right" : "wrong") : "";
  return `<button class="num ${cls}" type="button" onclick="jumpTo(${idx})">${idx + 1}</button>`;
}

function getChoices(card) {
  if (!card.sessionChoices) {
    card.sessionChoices = shuffle(card.choices);
  }
  return card.sessionChoices;
}

function answerButton(card, choice, answered) {
  let cls = "";
  if (answered) {
    if (choice === card.answer) cls = "correct";
    if (choice === answered.choice && !answered.correct) cls = "incorrect";
  }
  return `<button class="answer-btn ${cls}" type="button" ${answered ? "disabled" : ""} onclick="chooseAnswer(${card.id}, ${JSON.stringify(choice).replace(/"/g, "&quot;")})">${formatInline(choice)}</button>`;
}

function reveal(card, answered) {
  const title = answered.correct ? "Верно" : "Нужно запомнить";
  return `
    <div class="reveal">
      <strong>${title}: ${formatInline(card.answer)}</strong>
      <p>${escapeHtml(card.explain)}</p>
    </div>
  `;
}

function chooseAnswer(id, choice) {
  const card = state.deck.find(item => item.id === id);
  const correct = choice === card.answer;
  state.answered[id] = { choice, correct };
  progress.attempts = (progress.attempts || 0) + 1;
  if (correct) {
    progress.mastered[id] = true;
  } else {
    delete progress.mastered[id];
  }
  saveProgress();
  render();
}

function nextQuestion() {
  state.index += 1;
  render();
}

function skipQuestion() {
  state.index = Math.min(state.index + 1, state.deck.length);
  render();
}

function jumpTo(index) {
  state.index = index;
  render();
}

function renderResult() {
  const results = Object.values(state.answered);
  const right = results.filter(item => item.correct).length;
  const total = state.deck.length;
  const wrongCards = state.deck.filter(card => state.answered[card.id] && !state.answered[card.id].correct);
  const unlocked = isFinalUnlocked();
  app.innerHTML = `
    ${topbar(state.mode === "final" ? "Результат полного теста" : "Результат билета")}
    <article class="result-card mode-card">
      <h2>${right} из ${total}</h2>
      <p>Накопленный результат: ${masteredCount()} из ${totalCards}.</p>
      <div class="actions">
        <button class="primary-btn" type="button" onclick="startTicket()">Новый билет</button>
        <button class="ghost-btn" type="button" ${unlocked ? "" : "disabled"} onclick="startFinalTest()">Полный тест</button>
      </div>
    </article>
    <section class="summary-list">
      ${wrongCards.map(card => `
        <div class="summary-item">
          <strong>${escapeHtml(card.question)}</strong>
          <span>${formatInline(card.answer)}</span>
        </div>
      `).join("")}
    </section>
  `;
}

function render() {
  if (state.screen === "home") renderHome();
  if (state.screen === "quiz") renderQuiz();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatInline(value) {
  return escapeHtml(value).replace(/`([^`]+)`/g, '<span class="code">$1</span>');
}

render();
