function c(id, topic, visual, qRu, qEn, aRu, aEn, wrongs, eRu, eEn) {
  return {
    id,
    topic,
    visual,
    question: { ru: qRu, en: qEn },
    answer: { ru: aRu, en: aEn },
    choices: [{ ru: aRu, en: aEn }, ...wrongs.map(item => ({ ru: item[0], en: item[1] }))],
    explain: { ru: eRu, en: eEn }
  };
}

const cards = [
  c(1, "Обзор", "assets/matplotlib.svg",
    "Чему посвящена вторая лекция?",
    "What is Lecture 2 about?",
    "Библиотекам Matplotlib и Seaborn для визуализации данных.",
    "Matplotlib and Seaborn libraries for data visualization.",
    [
      ["Только обучению ML-моделей.", "Only training ML models."],
      ["Только работе с базами данных.", "Only working with databases."],
      ["Только обработке текстов.", "Only text processing."]
    ],
    "Лекция дает обзор установки, документации, основных функций и практических графиков.",
    "The lecture covers installation, documentation, core functions, and practical plotting examples."),
  c(2, "Обзор", "assets/matplotlib.svg",
    "Что такое Matplotlib?",
    "What is Matplotlib?",
    "Комплексная библиотека для создания статических, анимированных и интерактивных визуализаций в Python.",
    "A comprehensive library for static, animated, and interactive visualizations in Python.",
    [
      ["Библиотека только для обучения нейросетей.", "A library only for training neural networks."],
      ["Метрика качества классификации.", "A classification metric."],
      ["Формат файла для сохранения таблиц.", "A file format for saving tables."]
    ],
    "Matplotlib дает низкоуровневый контроль над фигурой, осями, стилями, цветами и экспортом.",
    "Matplotlib gives low-level control over figures, axes, styles, colors, and export."),
  c(3, "Обзор", "assets/seaborn.svg",
    "Что такое Seaborn?",
    "What is Seaborn?",
    "Высокоуровневая библиотека статистической визуализации, основанная на Matplotlib.",
    "A high-level statistical visualization library built on Matplotlib.",
    [
      ["Замена NumPy для матричного умножения.", "A replacement for NumPy matrix multiplication."],
      ["Система управления базами данных.", "A database management system."],
      ["Функция для удаления пропусков.", "A function for removing missing values."]
    ],
    "Seaborn удобен для исследования распределений и взаимосвязей в DataFrame.",
    "Seaborn is convenient for exploring distributions and relationships in DataFrames."),
  c(4, "Установка", "assets/matplotlib.svg",
    "Как установить Matplotlib или Seaborn через pip?",
    "How do you install Matplotlib or Seaborn with pip?",
    "`pip install matplotlib` или `pip install seaborn`.",
    "`pip install matplotlib` or `pip install seaborn`.",
    [
      ["`import matplotlib install`.", "`import matplotlib install`."],
      ["`plt.install(seaborn)`.", "`plt.install(seaborn)`."],
      ["`sns.download matplotlib`.", "`sns.download matplotlib`."]
    ],
    "В лекции также упомянут вариант `python -m pip install ...`.",
    "The lecture also mentions `python -m pip install ...`."),
  c(5, "Установка", "assets/matplotlib.svg",
    "Что важно помнить при установке для Python 3.x?",
    "What should you remember when installing for Python 3.x?",
    "Иногда нужно использовать `pip3` или `python3` вместо `pip` и `python`.",
    "Sometimes you need to use `pip3` or `python3` instead of `pip` and `python`.",
    [
      ["Нужно всегда удалять NumPy.", "You must always remove NumPy."],
      ["Нужно использовать только conda.", "You must use only conda."],
      ["Нужно запускать код только в браузере.", "You must run code only in a browser."]
    ],
    "Это зависит от системы и того, как установлен Python.",
    "This depends on the system and Python installation."),
  c(6, "Импорт", "assets/matplotlib.svg",
    "Как обычно импортируют pyplot из Matplotlib?",
    "How is pyplot from Matplotlib usually imported?",
    "`import matplotlib.pyplot as plt`.",
    "`import matplotlib.pyplot as plt`.",
    [
      ["`import seaborn as plt`.", "`import seaborn as plt`."],
      ["`from matplotlib import numpy`.", "`from matplotlib import numpy`."],
      ["`pip install pyplot as plt`.", "`pip install pyplot as plt`."]
    ],
    "`plt` - стандартный короткий псевдоним для pyplot.",
    "`plt` is the standard short alias for pyplot."),
  c(7, "Импорт", "assets/seaborn.svg",
    "Как обычно импортируют Seaborn?",
    "How is Seaborn usually imported?",
    "`import seaborn as sns`.",
    "`import seaborn as sns`.",
    [
      ["`import matplotlib as sns`.", "`import matplotlib as sns`."],
      ["`from seaborn import numpy`.", "`from seaborn import numpy`."],
      ["`pip install sns` внутри кода.", "`pip install sns` inside code."]
    ],
    "`sns` - общепринятый псевдоним Seaborn.",
    "`sns` is the conventional Seaborn alias."),
  c(8, "Импорт", "assets/matplotlib.svg",
    "Зачем в лекции снова импортируется NumPy?",
    "Why is NumPy imported again in the lecture?",
    "Для генерации числовых данных, например через `np.linspace`, `np.arange`, random.",
    "To generate numerical data, for example with `np.linspace`, `np.arange`, and random functions.",
    [
      ["Чтобы заменить Matplotlib.", "To replace Matplotlib."],
      ["Чтобы сохранять SVG-файлы.", "To save SVG files."],
      ["Чтобы строить только violin plot.", "To build only violin plots."]
    ],
    "Многие примеры графиков строятся на синтетических числовых массивах.",
    "Many plot examples use synthetic numerical arrays."),
  c(9, "Matplotlib anatomy", "assets/anatomy.svg",
    "Что такое Figure в Matplotlib?",
    "What is a Figure in Matplotlib?",
    "Вся фигура: контейнер, который содержит Axes и холст для рисования.",
    "The whole figure: a container that holds Axes and the drawing canvas.",
    [
      ["Только одна линия на графике.", "Only one line on a plot."],
      ["Только подпись оси x.", "Only the x-axis label."],
      ["Только деления на оси.", "Only tick marks on an axis."]
    ],
    "Одна Figure может содержать несколько областей Axes.",
    "One Figure can contain multiple Axes areas."),
  c(10, "Matplotlib anatomy", "assets/anatomy.svg",
    "Что такое Axes в Matplotlib?",
    "What are Axes in Matplotlib?",
    "Область внутри Figure, где реально строится график данных.",
    "The area inside a Figure where the data plot is actually drawn.",
    [
      ["Отдельная отметка деления.", "A single tick mark."],
      ["Только цвет линии.", "Only the line color."],
      ["Команда установки библиотеки.", "A library installation command."]
    ],
    "У Axes есть заголовок, границы, подписи x/y и методы вроде `plot`.",
    "Axes have a title, limits, x/y labels, and methods such as `plot`."),
  c(11, "Matplotlib anatomy", "assets/anatomy.svg",
    "Что такое Axis и чем он отличается от Axes?",
    "What is an Axis and how is it different from Axes?",
    "Axis - объект оси с делениями и подписями; Axes - область графика целиком.",
    "Axis is an axis object with ticks and labels; Axes is the whole plotting area.",
    [
      ["Axis и Axes всегда означают одно и то же.", "Axis and Axes always mean the same thing."],
      ["Axis - это вся фигура, а Axes - файл.", "Axis is the whole figure, while Axes is a file."],
      ["Axis - это только легенда.", "Axis is only the legend."]
    ],
    "В лекции отдельно подчеркивается: важно различать Axes и Axis.",
    "The lecture explicitly emphasizes that Axes and Axis should not be confused."),
  c(12, "Matplotlib anatomy", "assets/anatomy.svg",
    "Что возвращает `fig, ax = plt.subplots()`?",
    "What does `fig, ax = plt.subplots()` return?",
    "Объект Figure и объект Axes.",
    "A Figure object and an Axes object.",
    [
      ["Только массив NumPy.", "Only a NumPy array."],
      ["Только DataFrame.", "Only a DataFrame."],
      ["Только объект Seaborn.", "Only a Seaborn object."]
    ],
    "После этого можно вызывать методы `ax.plot`, `ax.set_xlabel`, `ax.legend`.",
    "Then you can call methods such as `ax.plot`, `ax.set_xlabel`, and `ax.legend`."),
  c(13, "Matplotlib anatomy", "assets/anatomy.svg",
    "Почему данные перед построением часто лучше преобразовать в `numpy.array`?",
    "Why is it often better to convert data to `numpy.array` before plotting?",
    "Многие функции построения графиков ожидают массивоподобные данные.",
    "Many plotting functions expect array-like data.",
    [
      ["Потому что Matplotlib не работает с числами.", "Because Matplotlib does not work with numbers."],
      ["Потому что Seaborn запрещает DataFrame.", "Because Seaborn forbids DataFrames."],
      ["Потому что графики можно строить только из строк.", "Because plots can be built only from strings."]
    ],
    "Это особенно актуально при работе с Pandas DataFrame.",
    "This is especially relevant when working with Pandas DataFrames."),
  c(14, "Matplotlib styles", "assets/matplotlib.svg",
    "Что такое OO-style в Matplotlib?",
    "What is OO-style in Matplotlib?",
    "Стиль, где явно создают `fig, ax` и вызывают методы объекта `ax`.",
    "A style where `fig, ax` are created explicitly and methods are called on `ax`.",
    [
      ["Стиль, где используется только `plt.plot` без объектов.", "A style using only `plt.plot` without objects."],
      ["Стиль, где графики строятся только в Seaborn.", "A style where plots are built only in Seaborn."],
      ["Стиль установки пакетов.", "A package installation style."]
    ],
    "В лекции сказано, что OO-style предпочтителен внутри функций.",
    "The lecture says OO-style is preferred inside functions."),
  c(15, "Matplotlib styles", "assets/matplotlib.svg",
    "Что такое pyplot-style?",
    "What is pyplot-style?",
    "Стиль, где используют команды `plt.figure`, `plt.plot`, `plt.title` с неявными Axes.",
    "A style using `plt.figure`, `plt.plot`, and `plt.title` with implicit Axes.",
    [
      ["Стиль, где нельзя строить линии.", "A style where lines cannot be plotted."],
      ["Стиль только для 3D-графиков.", "A style only for 3D plots."],
      ["Стиль только для сохранения SVG.", "A style only for saving SVG."]
    ],
    "В лекции он указан как удобный для интерактивных графиков.",
    "In the lecture, it is described as convenient for interactive plotting."),
  c(16, "Matplotlib styles", "assets/matplotlib.svg",
    "Как добавить легенду на график?",
    "How do you add a legend to a plot?",
    "Задать `label` при построении линий и вызвать `legend()`.",
    "Set `label` when plotting lines and call `legend()`.",
    [
      ["Вызвать только `savefig()`.", "Call only `savefig()`."],
      ["Использовать только `np.linspace()`.", "Use only `np.linspace()`."],
      ["Удалить все подписи осей.", "Remove all axis labels."]
    ],
    "В примере линии подписаны как linear, quadratic и cubic.",
    "In the example, the lines are labeled linear, quadratic, and cubic."),
  c(17, "Matplotlib styles", "assets/matplotlib.svg",
    "Что задает параметр `figsize`?",
    "What does `figsize` control?",
    "Размер фигуры.",
    "The size of the figure.",
    [
      ["Тип маркера.", "The marker type."],
      ["Цветовую карту.", "The colormap."],
      ["Количество классов в датасете.", "The number of classes in the dataset."]
    ],
    "Например, `plt.subplots(figsize=(8,6))` создает более крупную область.",
    "For example, `plt.subplots(figsize=(8,6))` creates a larger plotting area."),
  c(18, "Subplots", "assets/subplots.svg",
    "Для чего используют subplots?",
    "What are subplots used for?",
    "Чтобы разместить несколько графиков внутри одной Figure.",
    "To place several plots inside one Figure.",
    [
      ["Чтобы удалить оси.", "To remove axes."],
      ["Чтобы установить пакет.", "To install a package."],
      ["Чтобы заменить DataFrame на список.", "To replace a DataFrame with a list."]
    ],
    "В лекции показаны горизонтальные и вертикальные наборы графиков.",
    "The lecture shows both horizontal and vertical plot layouts."),
  c(19, "Subplots", "assets/subplots.svg",
    "Что означает `plt.subplots(1, 3)`?",
    "What does `plt.subplots(1, 3)` mean?",
    "Создать одну строку и три области Axes.",
    "Create one row and three Axes areas.",
    [
      ["Создать три строки и одну колонку.", "Create three rows and one column."],
      ["Создать один график с тремя цветами.", "Create one plot with three colors."],
      ["Создать три файла.", "Create three files."]
    ],
    "В лекции так строятся linear, quadratic и exponential plots рядом.",
    "In the lecture, this places linear, quadratic, and exponential plots side by side."),
  c(20, "Subplots", "assets/subplots.svg",
    "Что кодирует число `211` в `plt.subplot(211)`?",
    "What does `211` encode in `plt.subplot(211)`?",
    "2 строки, 1 колонка, позиция 1.",
    "2 rows, 1 column, position 1.",
    [
      ["2 колонки, 1 строка, позиция 1.", "2 columns, 1 row, position 1."],
      ["Номер цвета линии.", "The line color number."],
      ["Размер маркера.", "The marker size."]
    ],
    "`subplot` принимает число строк, число столбцов и позицию текущего subplot.",
    "`subplot` receives rows, columns, and the current subplot position."),
  c(21, "Labels", "assets/style.svg",
    "Как задать подпись оси x в OO-style?",
    "How do you set the x-axis label in OO-style?",
    "`ax.set_xlabel('x')`.",
    "`ax.set_xlabel('x')`.",
    [
      ["`plt.install_xlabel('x')`.", "`plt.install_xlabel('x')`."],
      ["`sns.xlabel('x')`.", "`sns.xlabel('x')`."],
      ["`np.xlabel('x')`.", "`np.xlabel('x')`."]
    ],
    "Для y используется `ax.set_ylabel(...)`.",
    "For y, use `ax.set_ylabel(...)`."),
  c(22, "Labels", "assets/style.svg",
    "Как задать заголовок графика?",
    "How do you set a plot title?",
    "`ax.set_title(...)` или `plt.title(...)`.",
    "`ax.set_title(...)` or `plt.title(...)`.",
    [
      ["`np.title(...)`.", "`np.title(...)`."],
      ["`pip title ...`.", "`pip title ...`."],
      ["`sns.install_title(...)`.", "`sns.install_title(...)`."]
    ],
    "Метод зависит от выбранного стиля: OO-style или pyplot-style.",
    "The method depends on the chosen style: OO-style or pyplot-style."),
  c(23, "Labels", "assets/style.svg",
    "Как в лекции добавляют LaTeX-подписи?",
    "How are LaTeX labels added in the lecture?",
    "Через строки с математической разметкой, например `$y = e^{-t} \\cdot cos(2 \\pi t)$`.",
    "With math-formatted strings, for example `$y = e^{-t} \\cdot cos(2 \\pi t)$`.",
    [
      ["Через `pip install latex_label`.", "With `pip install latex_label`."],
      ["Только через Seaborn pairplot.", "Only through Seaborn pairplot."],
      ["Только через сохранение в PDF.", "Only by saving to PDF."]
    ],
    "Matplotlib умеет отображать математические формулы в подписях.",
    "Matplotlib can render mathematical formulas in labels."),
  c(24, "Style", "assets/style.svg",
    "Что означает форматная строка `'ro-'` в `plt.plot`?",
    "What does the format string `'ro-'` mean in `plt.plot`?",
    "Красная линия с круглыми маркерами.",
    "A red line with circular markers.",
    [
      ["Синяя линия с квадратами.", "A blue line with square markers."],
      ["Зеленые треугольники без линии.", "Green triangles without a line."],
      ["Черная пунктирная линия.", "A black dashed line."]
    ],
    "`r` - red, `o` - circle marker, `-` - solid line.",
    "`r` means red, `o` means circle marker, and `-` means a solid line."),
  c(25, "Style", "assets/style.svg",
    "Что означает форматная строка `'bs-'`?",
    "What does the format string `'bs-'` mean?",
    "Синяя линия с квадратными маркерами.",
    "A blue line with square markers.",
    [
      ["Красная линия с кругами.", "A red line with circles."],
      ["Зеленые треугольники.", "Green triangles."],
      ["Черная линия без маркеров.", "A black line without markers."]
    ],
    "`b` - blue, `s` - square marker, `-` - solid line.",
    "`b` means blue, `s` means square marker, and `-` means a solid line."),
  c(26, "Style", "assets/style.svg",
    "Для чего используется `plt.setp`?",
    "What is `plt.setp` used for?",
    "Для задания свойств объектов графика, например цвета и толщины линии.",
    "To set properties of plot objects, such as color and line width.",
    [
      ["Для установки библиотеки.", "To install a library."],
      ["Для загрузки iris dataset.", "To load the iris dataset."],
      ["Для создания train-test split.", "To create a train-test split."]
    ],
    "В лекции пример: `plt.setp(ln, color='r', linewidth=2.5)`.",
    "The lecture example is `plt.setp(ln, color='r', linewidth=2.5)`."),
  c(27, "Style", "assets/style.svg",
    "Что можно получить, вызвав `plt.setp(ln)` без новых значений?",
    "What can you get by calling `plt.setp(ln)` without new values?",
    "Список доступных свойств объекта.",
    "A list of available object properties.",
    [
      ["Новый датасет.", "A new dataset."],
      ["Автоматический pairplot.", "An automatic pairplot."],
      ["Сохраненный PNG-файл.", "A saved PNG file."]
    ],
    "Так можно узнать, какие свойства линии настраиваются.",
    "This lets you inspect which line properties can be configured."),
  c(28, "Data mapping", "assets/scatter.svg",
    "Что делает `plt.scatter('a', 'b', c='c', s='d', data=data)`?",
    "What does `plt.scatter('a', 'b', c='c', s='d', data=data)` do?",
    "Строит scatter plot из столбцов DataFrame; `c` задает цвет, `s` размер маркеров.",
    "It builds a scatter plot from DataFrame columns; `c` controls color and `s` marker size.",
    [
      ["Удаляет столбцы `a` и `b`.", "It removes columns `a` and `b`."],
      ["Создает violin plot.", "It creates a violin plot."],
      ["Сохраняет фигуру в SVG.", "It saves the figure as SVG."]
    ],
    "Matplotlib может обращаться к столбцам по имени, если передан параметр `data`.",
    "Matplotlib can use column names when the `data` parameter is provided."),
  c(29, "Scatter", "assets/scatter.svg",
    "Для чего особенно полезен scatter plot?",
    "What is a scatter plot especially useful for?",
    "Чтобы показать связь между двумя переменными.",
    "To show the relationship between two variables.",
    [
      ["Чтобы показать только одну категорию без чисел.", "To show only one category without numbers."],
      ["Чтобы установить Seaborn.", "To install Seaborn."],
      ["Чтобы сохранить график как файл.", "To save a plot as a file."]
    ],
    "Дополнительные признаки можно кодировать цветом, размером и формой маркера.",
    "Additional features can be encoded by color, size, and marker shape."),
  c(30, "Scatter", "assets/scatter.svg",
    "Что делает параметр `alpha` в scatter plot?",
    "What does the `alpha` parameter do in a scatter plot?",
    "Задает прозрачность маркеров.",
    "It controls marker transparency.",
    [
      ["Задает подпись оси x.", "It sets the x-axis label."],
      ["Задает количество subplot.", "It sets the number of subplots."],
      ["Задает формат файла.", "It sets the file format."]
    ],
    "Прозрачность помогает видеть пересечения и плотность точек.",
    "Transparency helps show overlap and point density."),
  c(31, "Scatter", "assets/scatter.svg",
    "Для чего нужен `cmap` в scatter plot?",
    "What is `cmap` used for in a scatter plot?",
    "Для выбора цветовой карты.",
    "To choose the colormap.",
    [
      ["Для выбора размера Figure.", "To choose the Figure size."],
      ["Для выбора количества строк DataFrame.", "To choose the number of DataFrame rows."],
      ["Для установки пакета.", "To install a package."]
    ],
    "В лекции используется, например, `cmap='viridis'`.",
    "The lecture uses, for example, `cmap='viridis'`."),
  c(32, "Scatter", "assets/scatter.svg",
    "Для чего вызывают `plt.colorbar()`?",
    "Why call `plt.colorbar()`?",
    "Чтобы показать шкалу соответствия цвета числовым значениям.",
    "To show the scale mapping colors to numerical values.",
    [
      ["Чтобы удалить все цвета.", "To remove all colors."],
      ["Чтобы добавить новый subplot.", "To add a new subplot."],
      ["Чтобы включить LaTeX.", "To enable LaTeX."]
    ],
    "Colorbar нужен, когда цвет кодирует числовой признак.",
    "A colorbar is useful when color encodes a numerical feature."),
  c(33, "Annotation", "assets/style.svg",
    "Для чего используется `plt.text`?",
    "What is `plt.text` used for?",
    "Чтобы добавить произвольный текст в область графика.",
    "To add arbitrary text to the plot area.",
    [
      ["Чтобы установить matplotlib.", "To install matplotlib."],
      ["Чтобы загрузить iris.", "To load iris."],
      ["Чтобы построить pairplot.", "To build a pairplot."]
    ],
    "В лекции через `plt.text` добавляется формула на график.",
    "In the lecture, `plt.text` is used to add a formula to a plot."),
  c(34, "Annotation", "assets/style.svg",
    "Для чего используется `plt.annotate`?",
    "What is `plt.annotate` used for?",
    "Чтобы добавить подпись с указателем/стрелкой на важную точку графика.",
    "To add a label with an arrow/pointer to an important point on a plot.",
    [
      ["Чтобы изменить версию Python.", "To change the Python version."],
      ["Чтобы удалить легенду.", "To remove the legend."],
      ["Чтобы создать DataFrame.", "To create a DataFrame."]
    ],
    "В примере аннотируется локальный максимум.",
    "In the example, a local maximum is annotated."),
  c(35, "Scales", "assets/matplotlib.svg",
    "Как перевести ось y в логарифмическую шкалу в OO-style?",
    "How do you set the y-axis to a logarithmic scale in OO-style?",
    "`ax.set_yscale('log')`.",
    "`ax.set_yscale('log')`.",
    [
      ["`ax.log_y(True)`.", "`ax.log_y(True)`."],
      ["`plt.install_log()`.", "`plt.install_log()`."],
      ["`sns.set_y_log()`.", "`sns.set_y_log()`."]
    ],
    "В лекции сравниваются linear и log шкалы.",
    "The lecture compares linear and log scales."),
  c(36, "Scales", "assets/matplotlib.svg",
    "Когда полезна логарифмическая шкала?",
    "When is a logarithmic scale useful?",
    "Когда значения быстро растут или отличаются на порядки.",
    "When values grow rapidly or differ by orders of magnitude.",
    [
      ["Когда все значения одинаковые.", "When all values are identical."],
      ["Только для категориальных признаков.", "Only for categorical features."],
      ["Только для сохранения SVG.", "Only for saving SVG."]
    ],
    "Логарифмическая шкала помогает видеть структуру экспоненциального роста.",
    "A log scale helps reveal the structure of exponential growth."),
  c(37, "2D fields", "assets/contour.svg",
    "Для чего используется `np.meshgrid` в примерах с двумерными графиками?",
    "What is `np.meshgrid` used for in 2D plot examples?",
    "Чтобы создать координатную сетку X и Y для вычисления Z.",
    "To create X and Y coordinate grids for computing Z.",
    [
      ["Чтобы импортировать Seaborn.", "To import Seaborn."],
      ["Чтобы удалить Axes.", "To remove Axes."],
      ["Чтобы сохранить файл.", "To save a file."]
    ],
    "После этого можно строить `pcolormesh`, `contour` и `contourf`.",
    "Then `pcolormesh`, `contour`, and `contourf` can be used."),
  c(38, "2D fields", "assets/contour.svg",
    "Что строит `pcolormesh`?",
    "What does `pcolormesh` draw?",
    "Цветную сетку значений двумерного массива.",
    "A colored grid of values from a 2D array.",
    [
      ["Только одну линию.", "Only one line."],
      ["Только violin plot.", "Only a violin plot."],
      ["Только подпись оси.", "Only an axis label."]
    ],
    "В лекции он используется для отображения поверхности `ZZ` через цвет.",
    "In the lecture, it displays the surface `ZZ` using color."),
  c(39, "2D fields", "assets/contour.svg",
    "Что строит `contour`?",
    "What does `contour` draw?",
    "Линии уровня для двумерной функции.",
    "Contour lines for a two-dimensional function.",
    [
      ["Столбчатую диаграмму.", "A bar chart."],
      ["Гистограмму распределения.", "A histogram."],
      ["Только легенду.", "Only a legend."]
    ],
    "Contour показывает места, где функция имеет одинаковое значение.",
    "A contour plot shows where the function has equal values."),
  c(40, "2D fields", "assets/contour.svg",
    "Что делает `contourf`?",
    "What does `contourf` do?",
    "Строит заполненные контуры.",
    "It draws filled contours.",
    [
      ["Удаляет все уровни.", "It removes all levels."],
      ["Создает scatter plot.", "It creates a scatter plot."],
      ["Импортирует iris dataset.", "It imports the iris dataset."]
    ],
    "`contourf` удобно сочетать с `colorbar`.",
    "`contourf` is often useful together with a colorbar."),
  c(41, "2D fields", "assets/contour.svg",
    "Для чего нужны `levels` в contour plot?",
    "What are `levels` used for in a contour plot?",
    "Чтобы явно задать значения уровней, которые будут показаны.",
    "To explicitly set which contour values will be shown.",
    [
      ["Чтобы задать размер Figure.", "To set Figure size."],
      ["Чтобы выбрать DataFrame columns.", "To choose DataFrame columns."],
      ["Чтобы установить Seaborn.", "To install Seaborn."]
    ],
    "В лекции уровни задаются списком вроде `[0.5, 1.0, 1.5, ...]`.",
    "In the lecture, levels are set with a list such as `[0.5, 1.0, 1.5, ...]`."),
  c(42, "2D fields", "assets/contour.svg",
    "Для чего используется `clabel` в contour plot?",
    "What is `clabel` used for in a contour plot?",
    "Чтобы подписать линии уровня значениями.",
    "To label contour lines with values.",
    [
      ["Чтобы удалить оси.", "To remove axes."],
      ["Чтобы создать pandas DataFrame.", "To create a pandas DataFrame."],
      ["Чтобы изменить версию Python.", "To change the Python version."]
    ],
    "Подписи помогают читать значения линий уровня.",
    "Labels help read the values of contour lines."),
  c(43, "Save/export", "assets/export.svg",
    "Как сохранить фигуру в файл?",
    "How do you save a figure to a file?",
    "`fig.savefig('filename.svg')` или похожая команда с нужным расширением.",
    "`fig.savefig('filename.svg')` or a similar command with the desired extension.",
    [
      ["`fig.install('filename.svg')`.", "`fig.install('filename.svg')`."],
      ["`sns.save_dataset(...)`.", "`sns.save_dataset(...)`."],
      ["`np.savefig(...)` всегда.", "`np.savefig(...)` always."]
    ],
    "В лекции пример: `fig.savefig('contours.svg')`.",
    "The lecture example is `fig.savefig('contours.svg')`."),
  c(44, "Save/export", "assets/export.svg",
    "Какие форматы может поддерживать `savefig`?",
    "Which formats can `savefig` support?",
    "Например png, pdf, svg и другие.",
    "For example png, pdf, svg, and others.",
    [
      ["Только txt.", "Only txt."],
      ["Только ipynb.", "Only ipynb."],
      ["Только csv.", "Only csv."]
    ],
    "Список поддерживаемых форматов можно посмотреть через canvas supported filetypes.",
    "Supported formats can be inspected through canvas supported filetypes."),
  c(45, "Animation/3D", "assets/export.svg",
    "Почему live plotting непросто реализовать в Jupyter?",
    "Why is live plotting not easy to implement in Jupyter?",
    "Потому что такие анимации лучше запускать как обычный Python-скрипт вне notebook.",
    "Because such animations are better run as a normal Python script outside the notebook.",
    [
      ["Потому что Matplotlib не поддерживает анимацию.", "Because Matplotlib does not support animation."],
      ["Потому что Seaborn запрещает графики.", "Because Seaborn forbids plots."],
      ["Потому что NumPy не генерирует данные.", "Because NumPy cannot generate data."]
    ],
    "В лекции указано сохранять код в script и запускать из консоли.",
    "The lecture says to save the code as a script and run it from the terminal."),
  c(46, "Animation/3D", "assets/export.svg",
    "Как в лекции предлагают запускать пример live plotting?",
    "How does the lecture suggest running the live plotting example?",
    "Сохранить ячейку в Python-скрипт и выполнить `python3 script.py`.",
    "Save the cell as a Python script and run `python3 script.py`.",
    [
      ["Запустить только через `sns.pairplot`.", "Run only through `sns.pairplot`."],
      ["Сохранить как CSV и открыть в Excel.", "Save as CSV and open in Excel."],
      ["Вызвать `plt.setp` без аргументов.", "Call `plt.setp` without arguments."]
    ],
    "Это относится к дополнительному материалу лекции.",
    "This belongs to the additional lecture material."),
  c(47, "Animation/3D", "assets/export.svg",
    "Как в лекции предлагают запускать 3D-графики?",
    "How does the lecture suggest running 3D plots?",
    "Через Python-скрипты из консоли, например `python plot3d.py` и `python bubbles3d.py`.",
    "Through Python scripts from the terminal, for example `python plot3d.py` and `python bubbles3d.py`.",
    [
      ["Через `plt.histplot`.", "Through `plt.histplot`."],
      ["Через `df.describe`.", "Through `df.describe`."],
      ["Через `pip install 3d`.", "Through `pip install 3d`."]
    ],
    "В лекции сказано, что последняя версия Jupyter плохо работает с этой частью.",
    "The lecture says the latest Jupyter version does not work well with this part."),
  c(48, "Seaborn", "assets/seaborn.svg",
    "На чем основан Seaborn?",
    "What is Seaborn built on?",
    "На Matplotlib.",
    "On Matplotlib.",
    [
      ["На SQL.", "On SQL."],
      ["На Flask.", "On Flask."],
      ["На Git.", "On Git."]
    ],
    "Seaborn предоставляет более высокоуровневый интерфейс для статистических графиков.",
    "Seaborn provides a higher-level interface for statistical plots."),
  c(49, "Seaborn", "assets/seaborn.svg",
    "С какими структурами данных удобно работает Seaborn?",
    "Which data structures does Seaborn work conveniently with?",
    "С DataFrame и массивами, содержащими целые наборы данных.",
    "With DataFrames and arrays containing full datasets.",
    [
      ["Только с одиночными числами.", "Only with single numbers."],
      ["Только с изображениями.", "Only with images."],
      ["Только с SQL-запросами.", "Only with SQL queries."]
    ],
    "Именно поэтому в лекции используется dataset iris.",
    "That is why the lecture uses the iris dataset."),
  c(50, "Seaborn", "assets/seaborn.svg",
    "Какие группы функций Seaborn упоминаются в лекции?",
    "Which Seaborn function groups are mentioned in the lecture?",
    "Relational, distributional и categorical.",
    "Relational, distributional, and categorical.",
    [
      ["Linear, matrix и database.", "Linear, matrix, and database."],
      ["Train, test и validation.", "Train, test, and validation."],
      ["Import, install и save.", "Import, install, and save."]
    ],
    "Эти группы помогают ориентироваться в официальной документации Seaborn.",
    "These groups help navigate the official Seaborn documentation."),
  c(51, "Seaborn data", "assets/seaborn.svg",
    "Как в лекции загружается датасет iris?",
    "How is the iris dataset loaded in the lecture?",
    "`iris = sns.load_dataset('iris')`.",
    "`iris = sns.load_dataset('iris')`.",
    [
      ["`iris = plt.load_dataset('iris')`.", "`iris = plt.load_dataset('iris')`."],
      ["`iris = np.read_iris()`.", "`iris = np.read_iris()`."],
      ["`iris = pandas.install('iris')`.", "`iris = pandas.install('iris')`."]
    ],
    "Этот датасет используется для примеров Seaborn-графиков.",
    "This dataset is used for Seaborn plotting examples."),
  c(52, "Seaborn data", "assets/seaborn.svg",
    "Что показывает `iris['species'].unique()`?",
    "What does `iris['species'].unique()` show?",
    "Уникальные виды iris в столбце `species`.",
    "Unique iris species in the `species` column.",
    [
      ["Среднюю длину лепестка.", "Mean petal length."],
      ["Все цвета графика.", "All plot colors."],
      ["Список доступных форматов savefig.", "The list of savefig formats."]
    ],
    "Это помогает понять категории, по которым будут раскрашиваться графики.",
    "This helps understand the categories used for plot coloring."),
  c(53, "Seaborn distributions", "assets/seaborn.svg",
    "Для чего используется histogram / `histplot`?",
    "What is a histogram / `histplot` used for?",
    "Чтобы показать распределение значений одного признака.",
    "To show the distribution of values for one feature.",
    [
      ["Чтобы показать только связь двух признаков.", "To show only the relationship between two features."],
      ["Чтобы сохранить фигуру.", "To save the figure."],
      ["Чтобы создать 3D-анимацию.", "To create a 3D animation."]
    ],
    "В лекции строится `sns.histplot` для `sepal_length`.",
    "The lecture builds `sns.histplot` for `sepal_length`."),
  c(54, "Seaborn distributions", "assets/seaborn.svg",
    "Что делает параметр `hue='species'` в Seaborn?",
    "What does `hue='species'` do in Seaborn?",
    "Кодирует классы цветом.",
    "It encodes classes by color.",
    [
      ["Задает размер Figure.", "It sets Figure size."],
      ["Удаляет столбец species.", "It removes the species column."],
      ["Сохраняет файл.", "It saves the file."]
    ],
    "Hue часто используется для сравнения групп на одном графике.",
    "Hue is often used to compare groups on one plot."),
  c(55, "Seaborn distributions", "assets/seaborn.svg",
    "Что делает `sns.displot(..., col='species')`?",
    "What does `sns.displot(..., col='species')` do?",
    "Показывает распределения отдельно по каждому классу в разных колонках.",
    "It shows distributions separately for each class in different columns.",
    [
      ["Строит одну общую линию без классов.", "It builds one common line without classes."],
      ["Сохраняет SVG.", "It saves SVG."],
      ["Создает объект Axis.", "It creates an Axis object."]
    ],
    "Это удобно, когда нужно сравнить распределения между классами.",
    "This is useful for comparing distributions between classes."),
  c(56, "Seaborn relationships", "assets/scatter.svg",
    "Для чего используется `sns.scatterplot`?",
    "What is `sns.scatterplot` used for?",
    "Чтобы показать связь между двумя переменными, при необходимости с `hue` и `size`.",
    "To show the relationship between two variables, optionally with `hue` and `size`.",
    [
      ["Чтобы показать только таблицу описания.", "To show only a description table."],
      ["Чтобы установить пакет.", "To install a package."],
      ["Чтобы удалить все числовые признаки.", "To remove all numerical features."]
    ],
    "В лекции размер маркера связан с площадью лепестка.",
    "In the lecture, marker size is linked to petal area."),
  c(57, "Seaborn relationships", "assets/scatter.svg",
    "Что означает параметр `size=petal_area` в `sns.scatterplot`?",
    "What does `size=petal_area` mean in `sns.scatterplot`?",
    "Размер маркеров кодирует площадь лепестка.",
    "Marker size encodes petal area.",
    [
      ["Размер Figure равен площади лепестка.", "Figure size equals petal area."],
      ["Удаляются маленькие точки.", "Small points are removed."],
      ["Все точки становятся одного цвета.", "All points become one color."]
    ],
    "Так можно показать третью числовую переменную на 2D-графике.",
    "This shows a third numerical variable on a 2D plot."),
  c(58, "Seaborn relationships", "assets/seaborn.svg",
    "Что такое `jointplot`?",
    "What is `jointplot`?",
    "График, который объединяет scatter plot с распределениями признаков.",
    "A plot that combines a scatter plot with feature distributions.",
    [
      ["Только сохранение файла.", "Only file saving."],
      ["Только список свойств Line2D.", "Only a list of Line2D properties."],
      ["Только логарифмическая шкала.", "Only a log scale."]
    ],
    "В лекции он строится для `sepal_width` и `sepal_length` с `hue='species'`.",
    "In the lecture, it is built for `sepal_width` and `sepal_length` with `hue='species'`."),
  c(59, "Seaborn relationships", "assets/seaborn.svg",
    "Что такое `pairplot`?",
    "What is `pairplot`?",
    "Матрица графиков для попарных взаимосвязей между признаками.",
    "A matrix of plots for pairwise relationships between features.",
    [
      ["Один histogram без классов.", "One histogram without classes."],
      ["Команда установки Seaborn.", "A command for installing Seaborn."],
      ["Тип форматной строки Matplotlib.", "A Matplotlib format string type."]
    ],
    "На диагонали показываются распределения, вне диагонали - попарные scatter plots.",
    "The diagonal shows distributions; off-diagonal cells show pairwise scatter plots."),
  c(60, "Seaborn relationships", "assets/seaborn.svg",
    "Почему `pairplot` полезен для EDA?",
    "Why is `pairplot` useful for EDA?",
    "Он быстро показывает взаимосвязи между многими парами признаков.",
    "It quickly shows relationships between many pairs of features.",
    [
      ["Он заменяет установку Python.", "It replaces Python installation."],
      ["Он сохраняет все графики в CSV.", "It saves all plots to CSV."],
      ["Он показывает только один признак.", "It shows only one feature."]
    ],
    "Так можно увидеть разделимость классов и корреляции на раннем этапе анализа.",
    "This helps see class separability and correlations early in analysis."),
  c(61, "Seaborn categorical", "assets/seaborn.svg",
    "Что показывает `violinplot`?",
    "What does `violinplot` show?",
    "Распределение количественной переменной по категориям.",
    "The distribution of a numerical variable across categories.",
    [
      ["Только сохранение фигуры.", "Only saving a figure."],
      ["Только контуры функции.", "Only function contours."],
      ["Только список форматов файлов.", "Only a list of file formats."]
    ],
    "В лекции `violinplot` сравнивает `sepal_length` по `species`.",
    "In the lecture, `violinplot` compares `sepal_length` across `species`."),
  c(62, "Seaborn categorical", "assets/seaborn.svg",
    "Чем violin plot отличается от box plot?",
    "How is a violin plot different from a box plot?",
    "Violin plot показывает оценку плотности распределения, а не только summary statistics.",
    "A violin plot shows an estimated distribution density, not only summary statistics.",
    [
      ["Violin plot не связан с распределениями.", "A violin plot is unrelated to distributions."],
      ["Box plot всегда показывает KDE.", "A box plot always shows KDE."],
      ["Они полностью одинаковы.", "They are completely identical."]
    ],
    "В лекции сказано, что violin plot использует оценку плотности ядра.",
    "The lecture says a violin plot uses kernel density estimation."),
  c(63, "Выбор графика", "assets/seaborn.svg",
    "Какой график выбрать, чтобы показать распределение одного числового признака?",
    "Which plot should you choose to show the distribution of one numerical feature?",
    "Histogram / `histplot`.",
    "Histogram / `histplot`.",
    [
      ["Contour plot.", "Contour plot."],
      ["`savefig`.", "`savefig`."],
      ["`plt.setp`.", "`plt.setp`."]
    ],
    "Histogram показывает, как часто встречаются разные интервалы значений.",
    "A histogram shows how often different value ranges occur."),
  c(64, "Выбор графика", "assets/scatter.svg",
    "Какой график выбрать, чтобы показать связь двух числовых признаков?",
    "Which plot should you choose to show the relationship between two numerical features?",
    "Scatter plot.",
    "Scatter plot.",
    [
      ["Violin plot.", "Violin plot."],
      ["`pip install`.", "`pip install`."],
      ["`fig.savefig`.", "`fig.savefig`."]
    ],
    "Scatter plot показывает точки наблюдений в координатах x и y.",
    "A scatter plot shows observations as points in x/y coordinates."),
  c(65, "Выбор графика", "assets/seaborn.svg",
    "Какой график выбрать, чтобы быстро посмотреть все пары признаков?",
    "Which plot should you choose to quickly inspect all feature pairs?",
    "`sns.pairplot`.",
    "`sns.pairplot`.",
    [
      ["`plt.text`.", "`plt.text`."],
      ["`fig.savefig`.", "`fig.savefig`."],
      ["`ax.set_yscale`.", "`ax.set_yscale`."]
    ],
    "Pairplot особенно полезен в EDA для небольших табличных датасетов.",
    "Pairplot is especially useful in EDA for small tabular datasets."),
  c(66, "Выбор графика", "assets/seaborn.svg",
    "Какой график выбрать, чтобы сравнить распределение числа между категориями?",
    "Which plot should you choose to compare a numerical distribution across categories?",
    "Violin plot или box plot.",
    "Violin plot or box plot.",
    [
      ["Только `plt.setp`.", "Only `plt.setp`."],
      ["Только `pip install`.", "Only `pip install`."],
      ["Только `np.linspace`.", "Only `np.linspace`."]
    ],
    "В лекции violin plot сравнивает sepal length между species.",
    "In the lecture, violin plot compares sepal length across species."),
  c(67, "Выбор графика", "assets/contour.svg",
    "Какой график выбрать для двумерного поля значений Z на сетке X/Y?",
    "Which plot should you choose for a 2D field of Z values on an X/Y grid?",
    "`pcolormesh`, `contour` или `contourf`.",
    "`pcolormesh`, `contour`, or `contourf`.",
    [
      ["Только `histplot`.", "Only `histplot`."],
      ["Только `jointplot`.", "Only `jointplot`."],
      ["Только `plt.text`.", "Only `plt.text`."]
    ],
    "Эти графики используют данные, рассчитанные на координатной сетке.",
    "These plots use values calculated on a coordinate grid."),
  c(68, "Практика", "assets/matplotlib.svg",
    "Что делает `np.linspace(0, 3, 30)` в первом примере?",
    "What does `np.linspace(0, 3, 30)` do in the first example?",
    "Создает 30 равномерно распределенных значений от 0 до 3.",
    "It creates 30 evenly spaced values from 0 to 3.",
    [
      ["Создает 3 случайных графика.", "It creates 3 random plots."],
      ["Сохраняет фигуру.", "It saves a figure."],
      ["Загружает iris dataset.", "It loads the iris dataset."]
    ],
    "Эти значения используются как x-координаты.",
    "These values are used as x-coordinates."),
  c(69, "Практика", "assets/matplotlib.svg",
    "Что делает `np.random.random(30)` в первом примере?",
    "What does `np.random.random(30)` do in the first example?",
    "Создает 30 случайных чисел.",
    "It creates 30 random numbers.",
    [
      ["Создает 30 subplot.", "It creates 30 subplots."],
      ["Создает 30 форматов файлов.", "It creates 30 file formats."],
      ["Создает 30 классов iris.", "It creates 30 iris classes."]
    ],
    "Эти значения используются как y-координаты.",
    "These values are used as y-coordinates."),
  c(70, "Практика", "assets/matplotlib.svg",
    "Что делает `ax.plot(x, y)`?",
    "What does `ax.plot(x, y)` do?",
    "Строит линию на объекте Axes.",
    "It plots a line on the Axes object.",
    [
      ["Сохраняет Figure в файл.", "It saves the Figure to a file."],
      ["Импортирует Seaborn.", "It imports Seaborn."],
      ["Создает violin plot.", "It creates a violin plot."]
    ],
    "Это OO-style построения графика.",
    "This is OO-style plotting."),
  c(71, "Практика", "assets/seaborn.svg",
    "Что означает `multiple='stack'` в `sns.histplot` из лекции?",
    "What does `multiple='stack'` mean in the lecture's `sns.histplot`?",
    "Распределения групп по `hue` накладываются как stacked histogram.",
    "Groups from `hue` are shown as a stacked histogram.",
    [
      ["Каждая группа удаляется.", "Each group is removed."],
      ["Создается 3D-график.", "A 3D plot is created."],
      ["Ось y становится логарифмической.", "The y-axis becomes logarithmic."]
    ],
    "Так видно вклад каждого species в общее распределение.",
    "This shows each species' contribution to the overall distribution."),
  c(72, "Практика", "assets/seaborn.svg",
    "Главный вывод второй лекции?",
    "What is the main takeaway from Lecture 2?",
    "Нужно уметь выбирать подходящий график и настраивать визуализацию под данные.",
    "You should be able to choose an appropriate plot and customize visualization for the data.",
    [
      ["Нужно учить только команды установки.", "You need to learn only installation commands."],
      ["Нужно избегать графиков в анализе данных.", "You should avoid plots in data analysis."],
      ["Нужно использовать только один тип графика всегда.", "You should always use only one plot type."]
    ],
    "Matplotlib дает контроль, Seaborn ускоряет статистическую визуализацию.",
    "Matplotlib gives control; Seaborn speeds up statistical visualization.")
];

const balancedDistractors = {
  1: [
    ["Библиотекам NumPy и Pandas как основным инструментам табличной обработки данных.", "NumPy and Pandas as the main tools for tabular data processing."],
    ["Методам классификации и регрессии с оценкой качества моделей.", "Classification and regression methods with model-quality evaluation."],
    ["Разделу статистики, связанному с проверкой гипотез и распределениями.", "The statistics section related to hypothesis testing and distributions."]
  ],
  2: [
    ["Библиотека для статистической визуализации с готовыми высокоуровневыми графиками поверх Matplotlib.", "A library for statistical visualization with high-level plots built on top of Matplotlib."],
    ["Интерфейс Pandas, который автоматически строит отчеты, профили и сводные графики по DataFrame.", "A Pandas interface that automatically builds reports, profiles, and summary plots for a DataFrame."],
    ["Модуль SciPy для вычисления распределений, статистических тестов, p-value и доверительных интервалов.", "A SciPy module for computing distributions, statistical tests, p-values, and confidence intervals."]
  ],
  3: [
    ["Низкоуровневая библиотека, на которой напрямую создают Figure, Axes и Axis.", "A low-level library where Figure, Axes, and Axis are created directly."],
    ["Расширение NumPy для генерации сеток, случайных чисел и массивов.", "A NumPy extension for generating grids, random numbers, and arrays."],
    ["Инструмент Jupyter для запуска интерактивных 3D-скриптов вне ноутбука.", "A Jupyter tool for running interactive 3D scripts outside notebooks."]
  ],
  4: [
    ["`pip install numpy pandas`, потому что Matplotlib и Seaborn входят в Pandas.", "`pip install numpy pandas`, because Matplotlib and Seaborn are included in Pandas."],
    ["`python install matplotlib seaborn`, если запускать установку из ноутбука.", "`python install matplotlib seaborn`, when installing from a notebook."],
    ["`conda import matplotlib seaborn`, если библиотеки уже есть в окружении.", "`conda import matplotlib seaborn`, if the libraries are already in the environment."]
  ],
  5: [
    ["Использовать команду установки из активного окружения, где запускается notebook.", "Use the install command from the active environment where the notebook runs."],
    ["Проверить, что kernel Jupyter связан с тем же Python, куда ставятся пакеты.", "Check that the Jupyter kernel is linked to the same Python where packages are installed."],
    ["Сначала обновить package manager, если импорт не видит установленную библиотеку.", "First update the package manager if imports do not see the installed library."]
  ],
  6: [
    ["`import matplotlib as plt`, чтобы обращаться к функциям как `plt.pyplot.plot`.", "`import matplotlib as plt`, to call functions as `plt.pyplot.plot`."],
    ["`from matplotlib import plot as plt`, чтобы импортировать функцию построения линии.", "`from matplotlib import plot as plt`, to import the line-plotting function."],
    ["`import pyplot.matplotlib as plt`, если работа идет внутри Jupyter Notebook.", "`import pyplot.matplotlib as plt`, if working inside Jupyter Notebook."]
  ],
  7: [
    ["`import seaborn as sb`, потому что это стандартный псевдоним в документации.", "`import seaborn as sb`, because this is the standard alias in the documentation."],
    ["`from seaborn import sns`, чтобы импортировать объект визуализации как имя `sns`.", "`from seaborn import sns`, to import the visualization object as `sns`."],
    ["`import matplotlib.seaborn as sns`, потому что Seaborn является частью pyplot.", "`import matplotlib.seaborn as sns`, because Seaborn is part of pyplot."]
  ],
  8: [
    ["Чтобы напрямую создавать Figure и Axes без обращения к pyplot-интерфейсу.", "To create Figure and Axes directly without using the pyplot interface."],
    ["Чтобы загрузить встроенные датасеты Seaborn вроде `iris` и `tips`.", "To load built-in Seaborn datasets such as `iris` and `tips`."],
    ["Чтобы сохранять готовые графики в SVG, PNG и PDF через `savefig`.", "To save finished plots as SVG, PNG, and PDF via `savefig`."]
  ],
  9: [
    ["Область внутри графика, где находятся данные, шкалы и подписи осей.", "The area inside a plot where data, scales, and axis labels are placed."],
    ["Одна координатная ось с делениями, locator и formatter.", "A single coordinate axis with ticks, locator, and formatter."],
    ["Объект линии, который возвращается при вызове `ax.plot()`.", "A line object returned by calling `ax.plot()`."]
  ],
  10: [
    ["Вся фигура Matplotlib, которая может содержать один или несколько графиков.", "The whole Matplotlib figure that can contain one or more plots."],
    ["Отдельная координатная ось X или Y с делениями и форматированием.", "A single X or Y coordinate axis with ticks and formatting."],
    ["Набор параметров цвета, маркера и стиля линии для `plot()`.", "A set of color, marker, and line-style parameters for `plot()`."]
  ],
  11: [
    ["Axis - вся область графика, а Axes - отдельная шкала X или Y.", "Axis is the whole plot area, while Axes is a single X or Y scale."],
    ["Axis - объект Figure, а Axes - объект сохранения файла через `savefig`.", "Axis is a Figure object, while Axes is the file-saving object for `savefig`."],
    ["Axis - подпись легенды, а Axes - форматная строка цвета и маркера.", "Axis is a legend label, while Axes is the color and marker format string."]
  ],
  12: [
    ["Массив координат X и Y, подготовленный для первого line plot.", "An array of X and Y coordinates prepared for the first line plot."],
    ["Объект Seaborn FacetGrid и набор категорий для `hue`.", "A Seaborn FacetGrid object and a set of categories for `hue`."],
    ["Список Line2D-объектов без доступа к Figure.", "A list of Line2D objects without access to the Figure."]
  ],
  13: [
    ["Чтобы Pandas автоматически назначил `hue`, `size` и `style` по столбцам.", "So Pandas automatically assigns `hue`, `size`, and `style` by columns."],
    ["Чтобы Seaborn загрузил встроенный датасет и применил тему по умолчанию.", "So Seaborn loads a built-in dataset and applies the default theme."],
    ["Чтобы `savefig` мог определить формат файла по расширению.", "So `savefig` can infer the file format from the extension."]
  ],
  14: [
    ["Стиль, где pyplot хранит текущую фигуру, а команды `plt.*` меняют ее состояние.", "A style where pyplot keeps the current figure and `plt.*` commands change its state."],
    ["Стиль, где каждая команда строится через Seaborn и возвращает DataFrame.", "A style where each command is built through Seaborn and returns a DataFrame."],
    ["Стиль, где график создается как HTML-виджет внутри Jupyter.", "A style where the plot is created as an HTML widget inside Jupyter."]
  ],
  15: [
    ["Подход, где график явно создается через `fig, ax` и методы объекта `ax`.", "An approach where the plot is explicitly created through `fig, ax` and `ax` methods."],
    ["Подход Seaborn, где все подписи и легенды создаются автоматически.", "A Seaborn approach where labels and legends are created automatically."],
    ["Подход, где данные обязательно передаются как именованные DataFrame-столбцы.", "An approach where data must be passed as named DataFrame columns."]
  ],
  16: [
    ["Передать `label` в `plot`, а затем вызвать `plt.legend()` или `ax.legend()`.", "Pass `label` to `plot`, then call `plt.legend()` or `ax.legend()`."],
    ["Вызвать `plt.title()` с названием серии, чтобы Matplotlib сделал легенду.", "Call `plt.title()` with the series name so Matplotlib creates the legend."],
    ["Использовать `plt.xlabel()` и `plt.ylabel()`, потому что они создают legend.", "Use `plt.xlabel()` and `plt.ylabel()`, because they create the legend."]
  ],
  17: [
    ["Кортеж из трех Axes, где каждый график занимает одну строку.", "A tuple of three Axes where each plot occupies one row."],
    ["Один объект Axes с тремя независимыми линиями на общей оси.", "One Axes object with three independent lines on the same axis."],
    ["Figure и сетку 3 на 1, потому что первый аргумент задает столбцы.", "A Figure and a 3-by-1 grid because the first argument defines columns."]
  ],
  18: [
    ["Чтобы разместить несколько связанных графиков в одной Figure.", "To place several related plots inside one Figure."],
    ["Чтобы автоматически сохранить несколько версий графика в файлы.", "To automatically save several versions of a plot to files."],
    ["Чтобы заменить `plot()` на статистический график Seaborn.", "To replace `plot()` with a Seaborn statistical plot."]
  ],
  19: [
    ["Сетку из двух строк и одного столбца, активируя второй график.", "A grid with two rows and one column, activating the second plot."],
    ["Сетку из одной строки и двух столбцов, активируя первый график.", "A grid with one row and two columns, activating the first plot."],
    ["Три независимых Figure, где `211` является идентификатором файла.", "Three independent Figures where `211` is a file identifier."]
  ],
  20: [
    ["Сетку из двух строк и одного столбца, активируя первый график.", "A grid with two rows and one column, activating the first plot."],
    ["Сетку из одной строки и двух столбцов, активируя второй график.", "A grid with one row and two columns, activating the second plot."],
    ["Один график с двумя осями Y, где `121` задает вторую ось.", "One plot with two Y axes, where `121` defines the second axis."]
  ],
  21: [
    ["Через `legend`, потому что подписи осей берутся из названий линий.", "Through `legend`, because axis labels are taken from line names."],
    ["Через `set_title` для обеих осей, если используется OO-style.", "Through `set_title` for both axes when using OO-style."],
    ["Через `savefig`, потому что подписи записываются при экспорте.", "Through `savefig`, because labels are written during export."]
  ],
  22: [
    ["`ax.set_xlabel(...)`, потому что заголовок относится к оси X.", "`ax.set_xlabel(...)`, because the title belongs to the X axis."],
    ["`ax.legend(...)`, если график содержит хотя бы одну подписанную линию.", "`ax.legend(...)`, if the plot contains at least one labeled line."],
    ["`fig.savefig(...)`, если заголовок должен попасть в сохраненный файл.", "`fig.savefig(...)`, if the title must appear in the saved file."]
  ],
  23: [
    ["Через обычные строки без `$...$`, Matplotlib сам распознает LaTeX.", "Through ordinary strings without `$...$`; Matplotlib detects LaTeX by itself."],
    ["Через параметры `hue` и `style`, которые отвечают за математические формулы.", "Through `hue` and `style`, which are responsible for math formulas."],
    ["Через `np.linspace`, потому что формулы создаются вместе с координатами.", "Through `np.linspace`, because formulas are created together with coordinates."]
  ],
  24: [
    ["Красная линия с круглыми маркерами и сплошным соединением.", "A red line with circle markers and a solid connection."],
    ["Синяя линия с квадратными маркерами и пунктирным соединением.", "A blue line with square markers and a dashed connection."],
    ["Зеленые треугольники без соединительной линии между точками.", "Green triangles without a connecting line between points."]
  ],
  25: [
    ["Синие квадраты, соединенные сплошной линией.", "Blue squares connected by a solid line."],
    ["Черные точки, соединенные пунктирной линией.", "Black points connected by a dashed line."],
    ["Красные круги, отображенные без соединительной линии.", "Red circles displayed without a connecting line."]
  ],
  26: [
    ["Чтобы изменить свойства уже созданных Line2D-объектов.", "To change properties of already created Line2D objects."],
    ["Чтобы создать сетку subplot из нескольких Figure.", "To create a subplot grid from several Figures."],
    ["Чтобы загрузить встроенный dataset и назначить `hue`.", "To load a built-in dataset and assign `hue`."]
  ],
  27: [
    ["Список доступных свойств объекта линии и их текущих значений.", "A list of available line-object properties and their current values."],
    ["Новый subplot, в котором отображаются все свойства Figure.", "A new subplot where all Figure properties are displayed."],
    ["Сохраненный SVG-файл со списком настроек графика.", "A saved SVG file with the list of plot settings."]
  ],
  28: [
    ["Строит scatter, где `a` и `b` задают координаты, а `c` и `d` - цвет и размер.", "Builds a scatter plot where `a` and `b` are coordinates, and `c` and `d` set color and size."],
    ["Строит line plot, где `a`, `b`, `c`, `d` являются отдельными линиями.", "Builds a line plot where `a`, `b`, `c`, and `d` are separate lines."],
    ["Создает DataFrame из четырех массивов и передает его в Seaborn.", "Creates a DataFrame from four arrays and passes it to Seaborn."]
  ],
  29: [
    ["Для изучения связи двух числовых переменных через облако точек.", "For studying the relationship between two numeric variables through a point cloud."],
    ["Для сравнения распределений категорий через коробки и усы.", "For comparing category distributions through boxes and whiskers."],
    ["Для отображения плотности двумерного поля на регулярной сетке.", "For displaying the density of a two-dimensional field on a regular grid."]
  ],
  30: [
    ["Прозрачность точек, которая помогает видеть наложения.", "Point transparency, which helps reveal overlaps."],
    ["Размер точек, который задается как массив значений.", "Point size, which is passed as an array of values."],
    ["Цветовую карту, которая связывает числа с цветами.", "A color map that maps numbers to colors."]
  ],
  31: [
    ["Цветовая карта, которая связывает числовые значения с оттенками.", "A color map that maps numeric values to colors."],
    ["Прозрачность точек, которая регулирует видимость наложений.", "Point transparency that controls overlap visibility."],
    ["Форматная строка, которая задает маркер и стиль линии.", "A format string that sets marker and line style."]
  ],
  32: [
    ["Чтобы показать соответствие между цветом точек и числовой шкалой.", "To show the mapping between point color and the numeric scale."],
    ["Чтобы создать легенду для категорий, заданных через `label`.", "To create a legend for categories defined through `label`."],
    ["Чтобы заменить scatter plot на boxplot с теми же данными.", "To replace the scatter plot with a boxplot using the same data."]
  ],
  33: [
    ["Чтобы разместить текстовую подпись в указанной точке графика.", "To place a text label at a specified point of the plot."],
    ["Чтобы добавить стрелку от текста к выбранной точке данных.", "To add an arrow from text to a selected data point."],
    ["Чтобы изменить формат делений оси через formatter.", "To change axis tick formatting through a formatter."]
  ],
  34: [
    ["Чтобы добавить подпись с привязкой к точке и возможной стрелкой.", "To add a label anchored to a point, optionally with an arrow."],
    ["Чтобы просто вывести строку в фиксированных координатах осей.", "To simply draw a string at fixed axis coordinates."],
    ["Чтобы изменить подпись оси X или Y через OO-style.", "To change the X or Y axis label through OO-style."]
  ],
  35: [
    ["Она задает тип преобразования значений на оси Y.", "It sets the transformation type for values on the Y axis."],
    ["Она меняет формат маркеров на логарифмическую шкалу.", "It changes marker format to a logarithmic scale."],
    ["Она переключает стиль построения между pyplot и OO-style.", "It switches plotting style between pyplot and OO-style."]
  ],
  36: [
    ["Когда значения охватывают несколько порядков величины.", "When values span several orders of magnitude."],
    ["Когда нужно сравнить группы через violin plot.", "When groups must be compared through a violin plot."],
    ["Когда требуется показать отдельные категории цветом.", "When separate categories must be shown by color."]
  ],
  37: [
    ["Чтобы получить координатные матрицы из одномерных массивов X и Y.", "To obtain coordinate matrices from one-dimensional X and Y arrays."],
    ["Чтобы объединить несколько subplot в одну общую Figure.", "To combine several subplots into one common Figure."],
    ["Чтобы преобразовать DataFrame в формат, удобный для Seaborn.", "To transform a DataFrame into a format convenient for Seaborn."]
  ],
  38: [
    ["Цветную карту значений на двумерной сетке.", "A colored map of values on a two-dimensional grid."],
    ["Контурные линии равного значения без заливки.", "Contour lines of equal value without filling."],
    ["Парные scatter-графики для всех числовых признаков.", "Pairwise scatter plots for all numeric features."]
  ],
  39: [
    ["Линии равного значения для функции на двумерной сетке.", "Lines of equal value for a function on a two-dimensional grid."],
    ["Цветные прямоугольные ячейки для всех значений матрицы.", "Colored rectangular cells for all matrix values."],
    ["Распределение одной переменной по категориям DataFrame.", "The distribution of one variable across DataFrame categories."]
  ],
  40: [
    ["Заполненные области между уровнями контуров.", "Filled regions between contour levels."],
    ["Подписанные значения на уже построенных contour lines.", "Labeled values on already drawn contour lines."],
    ["Цветовую шкалу для scatter plot с параметром `c`.", "A color scale for a scatter plot with parameter `c`."]
  ],
  41: [
    ["Они задают конкретные значения Z, по которым строятся контуры.", "They set the specific Z values at which contours are drawn."],
    ["Они задают количество subplot в строках и столбцах.", "They define the number of subplots in rows and columns."],
    ["Они задают подписи делений через locator и formatter.", "They set tick labels through locator and formatter."]
  ],
  42: [
    ["Чтобы подписать уровни на contour lines.", "To label levels on contour lines."],
    ["Чтобы создать цветовую шкалу для scatter plot.", "To create a color bar for a scatter plot."],
    ["Чтобы сохранить контуры в SVG или PNG.", "To save contours as SVG or PNG."]
  ],
  43: [
    ["Вызвать `fig.savefig(...)` или `plt.savefig(...)` с именем файла.", "Call `fig.savefig(...)` or `plt.savefig(...)` with a file name."],
    ["Вызвать `ax.legend(...)`, потому что legend сохраняет Figure.", "Call `ax.legend(...)`, because legend saves the Figure."],
    ["Передать имя файла в `plt.show(...)` после построения графика.", "Pass the file name to `plt.show(...)` after plotting."]
  ],
  44: [
    ["Растровые и векторные форматы вроде PNG, PDF, SVG.", "Raster and vector formats such as PNG, PDF, SVG."],
    ["Табличные форматы вроде CSV, XLSX и Parquet.", "Tabular formats such as CSV, XLSX, and Parquet."],
    ["Notebook-форматы вроде IPYNB и HTML.", "Notebook formats such as IPYNB and HTML."]
  ],
  45: [
    ["Потому что обновление Figure в ноутбуке зависит от backend и режима отображения.", "Because updating a Figure in a notebook depends on the backend and display mode."],
    ["Потому что Matplotlib строит только статические изображения без событий.", "Because Matplotlib builds static images without events."],
    ["Потому что Jupyter не позволяет выполнять Python-код после построения графика.", "Because Jupyter does not allow Python code to run after plotting."]
  ],
  46: [
    ["Как Python-скрипт из терминала, например `python3 script.py`.", "As a Python script from the terminal, for example `python3 script.py`."],
    ["Как CSV-файл, который Matplotlib автоматически откроет как анимацию.", "As a CSV file that Matplotlib will automatically open as an animation."],
    ["Как notebook markdown cell с подключенным SVG-изображением.", "As a notebook markdown cell with an attached SVG image."]
  ],
  47: [
    ["Запускать их как отдельные Python-скрипты, чтобы работало интерактивное окно.", "Run them as separate Python scripts so the interactive window works."],
    ["Строить их только через Seaborn, потому что Matplotlib не поддерживает 3D.", "Build them through Seaborn because Matplotlib does not support 3D."],
    ["Сохранять координаты в CSV, а затем открывать файл в Jupyter markdown.", "Save coordinates to CSV and then open the file in Jupyter markdown."]
  ],
  48: [
    ["На Matplotlib, но добавляет более высокий уровень статистических графиков.", "On Matplotlib, but adds a higher level for statistical plots."],
    ["На NumPy, заменяя все функции Matplotlib для построения линий.", "On NumPy, replacing all Matplotlib line-plotting functions."],
    ["На Pandas, поэтому не использует Figure и Axes Matplotlib.", "On Pandas, so it does not use Matplotlib Figure and Axes."]
  ],
  49: [
    ["С DataFrame и именованными столбцами, которые удобно передавать в параметры.", "With DataFrames and named columns that are convenient to pass as parameters."],
    ["С meshgrid-массивами, где каждая точка сетки задает contour level.", "With meshgrid arrays where each grid point defines a contour level."],
    ["С отдельными Line2D-объектами, полученными после `ax.plot()`.", "With separate Line2D objects returned after `ax.plot()`."]
  ],
  50: [
    ["Relational, distributional и categorical plots.", "Relational, distributional, and categorical plots."],
    ["Figure, Axes и Axis как три основных объекта.", "Figure, Axes, and Axis as the three main objects."],
    ["Locator, Formatter и Legend как три модуля графика.", "Locator, Formatter, and Legend as the three plot modules."]
  ],
  51: [
    ["`sns.load_dataset('iris')`", "`sns.load_dataset('iris')`"],
    ["`pd.read_dataset('iris')`", "`pd.read_dataset('iris')`"],
    ["`plt.load_dataset('iris')`", "`plt.load_dataset('iris')`"]
  ],
  52: [
    ["`iris['species'].unique()`", "`iris['species'].unique()`"],
    ["`sns.unique(iris, column='species')`", "`sns.unique(iris, column='species')`"],
    ["`plt.unique(iris['species'])`", "`plt.unique(iris['species'])`"]
  ],
  53: [
    ["Распределение значений одной переменной через столбцы частот.", "The distribution of one variable through frequency bars."],
    ["Связь двух числовых переменных через облако точек.", "The relationship of two numeric variables through a point cloud."],
    ["Квартильное сравнение числовой переменной по категориям.", "A quartile comparison of a numeric variable by categories."]
  ],
  54: [
    ["Разделяет распределение по категориям, заданным столбцом `hue`.", "Splits the distribution by categories defined by the `hue` column."],
    ["Задает размер точек по числовому признаку DataFrame.", "Sets point size according to a numeric DataFrame feature."],
    ["Создает отдельные FacetGrid-колонки для каждого значения species.", "Creates separate FacetGrid columns for each species value."]
  ],
  55: [
    ["Создает отдельные графики по значениям species в разных колонках.", "Creates separate plots for species values in different columns."],
    ["Накладывает категории species на одну stacked histogram.", "Overlays species categories on a single stacked histogram."],
    ["Назначает species как размер точек на scatter plot.", "Assigns species as point size on a scatter plot."]
  ],
  56: [
    ["Чтобы показать связь двух числовых переменных и кодировать группы цветом.", "To show the relationship between two numeric variables and encode groups by color."],
    ["Чтобы построить распределение одной переменной по нескольким FacetGrid.", "To plot one variable distribution across several FacetGrid panels."],
    ["Чтобы сравнить квартили категорий через коробки и плотность.", "To compare category quartiles through boxes and density."]
  ],
  57: [
    ["Чтобы кодировать площадь лепестка через размер точки.", "To encode petal area through point size."],
    ["Чтобы назначить species как facet column.", "To assign species as a facet column."],
    ["Чтобы подписать contour levels на двумерной сетке.", "To label contour levels on a two-dimensional grid."]
  ],
  58: [
    ["Комбинация scatter plot и маргинальных распределений двух переменных.", "A combination of scatter plot and marginal distributions of two variables."],
    ["Набор всех парных графиков между числовыми признаками DataFrame.", "A set of all pairwise plots between numeric DataFrame features."],
    ["Категориальный график, который объединяет boxplot и KDE.", "A categorical plot combining a boxplot and KDE."]
  ],
  59: [
    ["Матрица парных графиков для нескольких числовых переменных.", "A matrix of pairwise plots for several numeric variables."],
    ["График совместного распределения для выбранной пары признаков.", "A joint distribution plot for a selected pair of features."],
    ["Гистограмма, разделенная на FacetGrid-колонки по категории.", "A histogram split into FacetGrid columns by category."]
  ],
  60: [
    ["Для сравнения распределения числовой переменной по категориям.", "For comparing a numeric-variable distribution across categories."],
    ["Для отображения всех парных связей числовых признаков.", "For showing all pairwise relationships of numeric features."],
    ["Для построения двумерных contour levels на сетке X/Y.", "For drawing two-dimensional contour levels on an X/Y grid."]
  ],
  61: [
    ["Оценку плотности распределения внутри каждой категории.", "An estimate of distribution density within each category."],
    ["Линии равного значения на двумерной числовой сетке.", "Equal-value lines on a two-dimensional numeric grid."],
    ["Медиану и межквартильный размах без формы распределения.", "The median and interquartile range without the distribution shape."]
  ],
  62: [
    ["Violin показывает форму плотности распределения, а box plot - квартильную сводку.", "Violin shows the density shape of a distribution, while box plot shows a quartile summary."],
    ["Violin показывает медиану, а box plot показывает всю KDE-плотность.", "Violin shows the median, while box plot shows the whole KDE density."],
    ["Violin применяется к двум числовым осям, а box plot связывают со scatter plot.", "Violin applies to two numeric axes, while box plot is tied to scatter plots."]
  ],
  63: [
    ["Гистограмму или KDE-график распределения.", "A histogram or KDE distribution plot."],
    ["Scatter plot с `hue` и `size`.", "A scatter plot with `hue` and `size`."],
    ["Boxplot или violin plot по категориям.", "A boxplot or violin plot by categories."]
  ],
  64: [
    ["Scatter plot или relational plot.", "A scatter plot or relational plot."],
    ["Histplot или displot с одной переменной.", "A histplot or displot with one variable."],
    ["Boxplot с категориальной осью.", "A boxplot with a categorical axis."]
  ],
  65: [
    ["Boxplot или violin plot.", "A boxplot or violin plot."],
    ["Contour или pcolormesh.", "A contour or pcolormesh plot."],
    ["Jointplot или pairplot.", "A jointplot or pairplot."]
  ],
  66: [
    ["Pairplot, потому что он показывает все парные связи числовых признаков.", "Pairplot, because it shows all pairwise relationships of numeric features."],
    ["Histplot, потому что он показывает распределение одной переменной.", "Histplot, because it shows the distribution of one variable."],
    ["Violin plot, потому что он сравнивает числовой признак по категориям.", "Violin plot, because it compares a numeric feature by categories."]
  ],
  67: [
    ["pcolormesh или contour/contourf.", "pcolormesh or contour/contourf."],
    ["pairplot с `hue` по категориям.", "pairplot with `hue` by categories."],
    ["histplot с `multiple='stack'`.", "histplot with `multiple='stack'`."]
  ],
  68: [
    ["Создает 30 равномерно расположенных значений от 0 до 3.", "Creates 30 evenly spaced values from 0 to 3."],
    ["Создает значения от 0 до 30 с шагом 3.", "Creates values from 0 to 30 with step 3."],
    ["Создает 3 случайных массива по 30 элементов.", "Creates 3 random arrays with 30 elements each."]
  ],
  69: [
    ["Создает случайные значения той же длины, что и массив `x`.", "Creates random values with the same length as array `x`."],
    ["Создает регулярную двумерную сетку для contour plot.", "Creates a regular two-dimensional grid for a contour plot."],
    ["Создает цветовую шкалу для scatter plot.", "Creates a color scale for a scatter plot."]
  ],
  70: [
    ["Создает Figure и Axes, после чего график строится через методы `ax`.", "Creates Figure and Axes, after which the plot is built through `ax` methods."],
    ["Создает текущую Figure для последующих команд `plt.*`.", "Creates the current Figure for later `plt.*` commands."],
    ["Создает Seaborn FacetGrid для статистических распределений.", "Creates a Seaborn FacetGrid for statistical distributions."]
  ],
  71: [
    ["Группы из `hue` отображаются как составная stacked histogram.", "Groups from `hue` are displayed as a combined stacked histogram."],
    ["Каждая категория `hue` строится в отдельной FacetGrid-колонке.", "Each `hue` category is plotted in a separate FacetGrid column."],
    ["Цвет точки задается числовой шкалой и отображается через colorbar.", "Point color is set by a numeric scale and shown through a colorbar."]
  ],
  72: [
    ["Нужно выбирать график под задачу и уметь настраивать его элементы.", "You need to choose a plot for the task and configure its elements."],
    ["Нужно знать готовые Seaborn-графики без устройства Matplotlib.", "You need to know ready Seaborn plots without Matplotlib structure."],
    ["Нужно строить все визуализации одним стилем, чтобы ответы были одинаковыми.", "You need to build all visualizations in one style so answers are uniform."]
  ]
};

cards.forEach(card => {
  if (balancedDistractors[card.id]) {
    card.choices = [
      card.choices[0],
      ...balancedDistractors[card.id].map(item => ({ ru: item[0], en: item[1] }))
    ];
  }
});
